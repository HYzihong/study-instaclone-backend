/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 22:51:52
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { typeDefs, resolvers } from "./schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { getUserByToken, protectResolver } from "./utils/getUser";
import dotenv from "dotenv";
// require("dotenv").config(); // env
dotenv.config();
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
const server = new ApolloServer({
  schema: schema,
  context: async ({ req, res }) => {
    // console.log("req ==>", req.headers);
    // console.log("res ==>", res);
    // return { token: req.headers.authorization };
    const token = req.headers.authorization;
    return {
      userConfig: await getUserByToken(token), //使用token获取用户信息
      protectResolver, // 用户信息获取失败的报错
    };
  },
});
const POST = process.env.POST;
server.listen(POST).then(() => {
  console.log(`Server is running on http://localhost:${POST}/`);
});
