import { RouteConst } from "@/constants/routerConst";
import jscookie from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export const removeCookies = () => {
  const cookies = document.cookie;
  const arr = cookies.split(";").map((i) => i.split("=")[0]);
  arr.forEach((item) => {
    jscookie.remove(item);
  });
  localStorage.clear();
  sessionStorage.clear();
};

export const signOut = () => {
  removeCookies();
};

export const handleJWTExpired = (error: unknown, router: AppRouterInstance) => {
  if ((error as { error: string }).error === "jwt expired") {
    toast.error("You have been logged Out");
    signOut();
    router.push(RouteConst.LOGIN);
  }
};
