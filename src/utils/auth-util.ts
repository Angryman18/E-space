import jscookie from "js-cookie";

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
