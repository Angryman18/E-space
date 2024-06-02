import { publicRuntimeConfig } from "@/utils/config";

// const storeAPI = (endPoint: string) => publicRuntimeConfig.STORE_API + "/" + endPoint;

export const APIRotue = {
  VERIFY: "verify",
};

export const STOREAPI = {
  VERIFY: "/verify",
  SIGNIN: "/signin",
  USER_INFO: "/user-info",
  CREATE_PROFILE: '/create-profile',
  USER_CONTENT: "/user-content"
};
