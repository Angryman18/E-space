import { fetchUserInfo } from "@/service/storeService";
import { TUser } from "@/types";
import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react";

export default function useGetUserInformations(setState?: Dispatch<SetStateAction<TUser>>) {
  const [userData, setUserData] = useState<TUser>();
  const [loading, setLoading] = useState(true);
  const [IsError, setIsError] = useState(false);

  const memorizedSignIn = useCallback(fetchUserInfo, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await memorizedSignIn();
        setUserData(res!);
        setState!(res!);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [memorizedSignIn, setState]);

  return { user: userData, loading, error: IsError };
}
