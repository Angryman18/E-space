import { RouteConst } from "@/constants/routerConst";
import { signOut } from "@/utils/auth-util";
import useLogout from "./useLogout";

export default function useMenu() {
  const signOutWithRedirect = useLogout();
  return { signOutWithRedirect };
}
