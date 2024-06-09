import { signOut } from "@/utils/auth-util";
import { useCallback } from "react";

export default function useLogout() {
  const signOutWithRedirect = useCallback(() => {
    signOut();
    const logOutUrl = new URL(process.env.NEXT_PUBLIC_SSO_URL! + "/logout");
    logOutUrl.searchParams.append("next", window.location.origin);
    window.location.replace(logOutUrl);
  }, []);
  return signOutWithRedirect;
}
