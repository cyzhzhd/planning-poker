export interface PokerUser {
  id: string;
  name: string;
  score?: number;
}
export interface PokerState {
  users: PokerUser[];
  card: number | null;
}
