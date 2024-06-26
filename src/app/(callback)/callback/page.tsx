"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { userSignIn } from "@/service/storeService";
import useCtx from "@/hooks/useContext";
import { handleJWTExpired, signOut } from "@/utils/auth-util";
import toast from "react-hot-toast";

const Callback = () => {
  const searchParams = useSearchParams();
  const { userCtx } = useCtx();
  const router = useRouter();
  const token = searchParams.get("token");
  const next = searchParams.get("next");

  useEffect(() => {
    if (token && next) {
      userSignIn(token)
        .then((res) => {
          console.log("Received", res);
          userCtx.setUser(res!);
          toast.success("Logged In Successfully")
          router.replace(next);
        })
        .catch((err) => {
          handleJWTExpired(err, router)
        });
    } else router.replace("/login");
  }, [token, next, router, userCtx]);

  return null;
};

export default Callback;
