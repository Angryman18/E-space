export type ViewType = "List" | "Icon";

export type TUser = {
  _id: string;
  id: string;
  email: string;
  fullname: string;
  username: string;
  avatar: null | string;
  provider: string;
  profile: null | string;
};


export enum TLoader { Text, Dot }