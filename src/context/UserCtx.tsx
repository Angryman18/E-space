import { TLoader, TUser } from "@/types";
import { createContext, Dispatch, SetStateAction, useCallback, useState } from "react";
import useGetUserInformations from "@/hooks/useGetUserInfo";
import jsCookie from "js-cookie";
import { useRouter } from "next/navigation";
import { RouteConst } from "@/constants/routerConst";
import { signOut } from "@/utils/auth-util";
import toast from "react-hot-toast";
import { fetchUserInfo } from "@/service/storeService";
import Loader from "@/components/Loader";

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

const defaultCtx: {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
  fetchAndSaveUserInfo: () => Promise<any>;
} = {
  user: { ...initial },
  setUser: () => {},
  fetchAndSaveUserInfo: async () => {},
};

export const UserContext = createContext(defaultCtx);

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser>({ ...initial });
  const router = useRouter();
  const { error, loading } = useGetUserInformations(setUser);

  const fetchAndSaveUserInfo = useCallback(async () => {
    try {
      const res = await fetchUserInfo();
      setUser(res);
    } catch (err) {
      toast.error("Error fetching user info");
    }
  }, []);

  if (error) {
    toast.error("We are sorry something went wrong, please try again");
    signOut();
    router.push(RouteConst.LOGIN);
    return null;
  }
  if (loading) return <Loader />;
  return (
    <UserContext.Provider value={{ user, setUser, fetchAndSaveUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
