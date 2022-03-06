export interface PokerUser {
  id: string;
  name: string;
  score?: number;
}
export interface State {
  users: PokerUser[];
}
