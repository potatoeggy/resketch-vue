interface ExternalUser {
  name: string;
  id: string;
}

interface Event {
  event: string;
}

interface ImageResult {
  confidence: number;
  label: string;
}

interface UserEvent extends Event {
  event: "user_update";
  guild_id: string;
  users: { name: string; id: string }[];
}

interface NewRoundEvent extends Event {
  event: "new_round";
  total_rounds: number;
  word: string;
}

interface VictoryEvent extends Event {
  event: "victory";
  victor_user_id: string;
}

interface CanvasEvent extends Event {
  event: "draw";
  images: { user_id: string; content: string; confidence: number }[];
}

interface ErrorEvent extends Event {
  event: "error";
  error: string;
}

interface Action {
  action: string;
  name?: string;
  image?: string;
}
interface SetProfileAction {
  action: "set_profile";
  name: string;
}

interface UpdateImageAction {
  action: "draw";
  image: string;
}

interface StartAction {
  action: "begin";
}

interface ReadyAction {
  action: "finished";
}
