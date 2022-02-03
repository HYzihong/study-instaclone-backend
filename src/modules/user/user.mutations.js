/**
 * @Author: hy
 * @Date: 2022-02-03 15:50:21
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 21:05:06
 * @FilePath: /instaclone-backend/src/modules/user/user.mutations.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import clint from "../../client";
import bcrypt from "bcrypt";

export default {
  createUser: async (_, { firstName, lastName, userName, email, password }) => {
    console.log("param ==>", firstName, lastName, userName, email, password);
    try {
      const isHaveUser = await clint.user.findFirst({
        where: { OR: [{ userName }, { email }] },
      });
      console.log("isHaveUser  ==>", isHaveUser);
      if (isHaveUser) {
        throw new Error("This username/password is already taken.");
      }
      // create : password -> MD5 -（后端）> MD5 -> db
      // login : password -> MD5 -> MD5 -（后端) -> db
      const uglyPassword = await bcrypt.hash(password, 10);
      console.log("uglyPassword ==>", uglyPassword);
      // let user = await client.user.create({
      //   data: {
      //     userName,
      //     email,
      //     firstName,
      //     lastName,
      //     password: uglyPassword,
      //   },
      // });
      // console.log("createUser ==>", user);
      // return user;
      return await clint.user.create({
        data: {
          userName,
          email,
          firstName,
          lastName,
          password: uglyPassword,
        },
      });
      // return ture;
    } catch (error) {
      return error;
    }
  },
};
