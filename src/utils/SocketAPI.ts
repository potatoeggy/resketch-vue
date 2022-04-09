import type { Event } from "./types";

const API_ENDPOINT = "wss://api.eggworld.tk/sketch";

export class SocketAPI {
  users = [];
  guild_id = 0;
  currentRound = 1;
  totalRounds = 3;
  victories: { [key: string]: number } = {}; // uuid: int
  images: { [key: string]: string } = {}; // uuid: base64 encoded string
  confidences: { [key: string]: number } = {}; // uuid: decimal percentage (0 <= x <= 1)
  wordHistory: string[] = [];
  socket: WebSocket;
  name: string | null;
  constructor() {
    const url = new URL(window.location.href);
    this.socket = new WebSocket(
      `${API_ENDPOINT}${url.pathname}?guild=${url.searchParams.get(
        "guild"
      )}&rounds=${url.searchParams.get("rounds")}`
    );
    this.name = url.searchParams.get("name");

    this.socket.addEventListener("open", () => {
      if (this.name) {
        this.sendUserAction(this.name);
      }
    });

    this.socket.addEventListener("message", (event: Event) => {
      const data = JSON.parse(event.data);
      console.log("received", data);
      switch (data.event) {
        case "user_update":
          this.users = data.users;
          this.guild_id = data.guild_id;
          this.stateFillMissingUsers();
          return;
        case "new_round":
          this.currentRound++;
          this.wordHistory.push(data.word);
          this.totalRounds = data.total_rounds;
          return;
        case "draw":
          data.images.forEach(({ user_id, content, confidence }) => {
            this.images[user_id] = content;
            this.confidences[user_id] = confidence;
          });
          return;
        case "victory":
          this.victories[data.victor_user_id]++;
          return;
        default:
          console.log("invalid server event?", data);
      }
    });
  }

  sendCanvasAction(newImage: string) {
    this.send({
      action: "draw",
      image: newImage,
    });
  }

  sendFinishedAction() {
    this.send({ action: "finished" });
  }

  sendBeginGameAction() {
    this.send({ action: "begin" });
  }

  sendUserAction(newName: string) {
    this.send({
      action: "set_profile",
      name: newName,
    });
  }

  send(object: object) {
    console.log(object);
    this.socket.send(JSON.stringify(object));
  }

  stateFillMissingUsers() {
    for (const u of this.users) {
      if (!this.victories.hasOwnProperty(u.id)) {
        // if not present in leaderboard
        this.victories[u.id] = 0;
      }
      if (!(u.id in this.confidences)) {
        // if not present in confidences
        this.confidences[u.id] = 0;
      }
    }
  }

  get currentWord() {
    return this.wordHistory.length > 0 ? this.wordHistory.at(-1) : null;
  }
}
