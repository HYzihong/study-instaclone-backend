/**
 * @Author: hy
 * @Date: 2022-02-04 20:06:23
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 23:20:38
 * @FilePath: /instaclone-backend/src/utils/user.utils.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import jwt from "jsonwebtoken";
import client from "../client";
import { defaultFailResult } from "./returnResult";
export const getUserByToken = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const SECRETKEY = process.env.SECRET_KEY;
    const { id } = jwt.verify(token, SECRETKEY);
    const user = await client.user.findFirst({ where: { id } });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const protectResolver = (resolver) => (root, args, context, info) => {
  if (!context.userConfig) {
    return defaultFailResult(
      "You need to login",
      "",
      "global protect resolver"
    );
  }
  return resolver(root, args, context, info);
};
