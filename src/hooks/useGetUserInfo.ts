import { fetchUserInfo } from "@/service/storeService";
import { TUser } from "@/types";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useLogout from "./useLogout";
import useSetTimeout from "./useSetTimeout";

export default function useGetUserInformations(setState?: Dispatch<SetStateAction<TUser>>) {
  const [userData, setUserData] = useState<TUser>();
  const [loading, setLoading] = useState(true);
  const [IsError, setIsError] = useState(false);
  const signOutWithRedirect = useLogout();

  const memorizedSignIn = useCallback(fetchUserInfo, []);
  const timeoutCall = useSetTimeout();

  useEffect(() => {
    (async () => {
      try {
        const res = await memorizedSignIn();
        setUserData(res!);
        setState!(res!);
      } catch (err) {
        setIsError(true);
        toast.error("We are sorry something went wrong, please try again");
        timeoutCall(signOutWithRedirect);
      } finally {
        setLoading(false);
      }
    })();
  }, [memorizedSignIn, setState, signOutWithRedirect, timeoutCall]);

  return { user: userData, loading, error: IsError };
}
