/**
 * @Author: hy
 * @Date: 2022-02-03 15:50:21
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 22:49:58
 * @FilePath: /instaclone-backend/src/modules/user/user.mutations.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import clint from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  defaultFailResult,
  defaultSuccessfulResult,
} from "../../utils/returnResult";

export default {
  Mutation: {
    /*******
     * @description: 创建接口
     * @param {*}  { firstName, lastName, userName, email, password }
     * @return {*} User
     */
    createUser: async (
      _,
      { firstName, lastName, userName, email, password }
    ) => {
      console.log("param ==>", firstName, lastName, userName, email, password);
      try {
        const isHaveUser = await clint.user.findFirst({
          where: { OR: [{ userName }, { email }] },
        });
        console.log("isHaveUser  ==>", isHaveUser);
        if (isHaveUser) {
          return defaultFailResult(
            "This username/password is already taken.",
            "",
            "createUser"
          );
        }
        // create : password -> MD5 -（后端）> MD5 -> db
        // login : password -> MD5 -> MD5 -（后端) -> db
        const uglyPassword = await bcrypt.hash(password, 10);
        // console.log("uglyPassword ==>", uglyPassword);
        let user = await client.user.create({
          data: {
            userName,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
        console.log("createUser ==>", user);
        return defaultSuccessfulResult(user, "createUser");
      } catch (error) {
        console.log(error);
        return defaultFailResult(error, error, "createUser");
      }
    },
    /*

    mutation{
      createUser(firstName: "hou",lastName:"yi", userName: "houyi", password: "123456", email: "email@qq") {
        id,
        userName,

      }
    }

    */
    /*******
     * @description: 登录接口
     * @param {*}
     * @return {*}
     */
    login: async (_, { userName, password }) => {
      try {
        const user = await clint.user.findFirst({ where: { userName } });
        console.log("user ==>", user);
        if (!user) {
          return defaultFailResult("user is not found", "", "login");
          // return {
          //   ok: false,
          //   error: "user is not found",
          // };
        }
        // TEST userName houyi password '123456'
        const tempPasswordBoolean = await bcrypt.compare(
          password,
          user.password
        );
        if (!tempPasswordBoolean) {
          return defaultFailResult("Incorrect password", "", "login");
        }
        const SECRETKEY = process.env.SECRET_KEY;
        // console.log(SECRETKEY);// https://jwt.io/
        const token = jwt.sign({ id: user.id }, SECRETKEY);
        return {
          ok: true,
          token: token,
        };
      } catch (error) {
        return defaultFailResult(`error ==> ${error}`, error, "login");
      }
    },
    /*
    mutation{
      login(userName:"houyi",password:"123456") {
        ok,
        token,
        error
      }
    }
    */
    editUser: async (
      _,
      { firstName, lastName, userName, email, password: newPassword },
      // { token }
      { userConfig, protectResolver }
    ) => {
      try {
        // console.log("token ==> ", token);
        // if (!token) {
        //   return defaultFailResult(
        //     "token is undefined.You need to login",
        //     "",
        //     "deleteUser"
        //   );
        // }
        if (!userConfig) {
          return protectResolver(userConfig, "deleteUser");
        }
        // const SECRETKEY = process.env.SECRET_KEY;
        // const verify_token = jwt.verify(token, SECRETKEY);
        // const { id } = jwt.verify(token, SECRETKEY);
        const { id } = userConfig;

        // console.log(verify_token);
        // return defaultSuccessfulResult(verify_token);
        // { id: 3, iat: 1643974369 }
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10);
        }
        const _user = await clint.user.update({
          where: {
            id,
          },
          data: {
            userName,
            email,
            firstName,
            lastName,
            ...(uglyPassword && { password: uglyPassword }),
          },
        });
        return defaultSuccessfulResult(_user, "editUser");
      } catch (error) {
        return defaultFailResult(error, "", editUser);
      }
    },
    //
    deleteUser: async (_, { id }) => {
      try {
      } catch (error) {
        return defaultFailResult(error, "", "deleteUser");
      }
      const _user = await clint.user.delete({ where: { id } });
      return defaultSuccessfulResult(_user, "deleteUser");
    },
  },
};
