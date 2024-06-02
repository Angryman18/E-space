import { STOREAPI } from "@/constants/APIConst";
import axios from "./axiosService";
import { AxiosResponse } from "axios";
import { TUser } from "@/types";
import request from "./request";

export const userSignIn = async (token: string) => {
  try {
    const res = await request.post<{ token: string }, TUser>(STOREAPI.SIGNIN, { token });
    return res.data;
  } catch (err: unknown) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const fetchUserInfo = async () => {
  try {
    const res = await request.post<null, TUser>(STOREAPI.USER_INFO, null);
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createUserProfile = async () => {
  try {
    const res = await request.post<null, { profileID: string }>(STOREAPI.CREATE_PROFILE, null);
    return res.data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
};

export const getUserContent = async () => {
  try {
    const res = await request.post(STOREAPI.USER_CONTENT, null);
    return res.data
  } catch(err: unknown) {
    return Promise.reject(err)
  }
}