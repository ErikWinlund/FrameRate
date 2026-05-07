import type { ObjectId } from "mongodb";

export type User = {
  _id: ObjectId;
  username: string;
  email: string;
  favoriteGenre: string;
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};
