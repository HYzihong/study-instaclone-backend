/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 18:37:23
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { typeDefs, resolvers } from "./schema";
import { makeExecutableSchema } from "graphql-tools";
import dotenv from "dotenv";
// require("dotenv").config(); // env
dotenv.config();
import { ApolloServer } from "apollo-server";
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
const server = new ApolloServer({ schema: schema });
const POST = process.env.POST;
server.listen(POST).then(() => {
  console.log(`Server is running on http://localhost:${POST}/`);
});
