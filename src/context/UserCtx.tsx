import { TUser } from "@/types";
import { createContext, Dispatch, SetStateAction, useCallback, useState } from "react";
import useGetUserInformations from "@/hooks/useGetUserInfo";
import jsCookie from "js-cookie";

const initial: TUser = {
  _id: "",
  avatar: null,
  email: "",
  fullname: "",
  id: "",
  profile: "",
  provider: "",
  username: "",
};

const defaultCtx: { user: TUser; setUser: Dispatch<SetStateAction<TUser>> } = {
  user: { ...initial },
  setUser: () => {},
};

export const UserContext = createContext(defaultCtx);

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser>({ ...initial });
  const { error, loading } = useGetUserInformations(setUser);
  if (loading) return <div>Loading...</div>;
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
