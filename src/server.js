/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 15:17:15
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { typeDefs, resolvers } from "./schema";
import { makeExecutableSchema } from "graphql-tools";
require("dotenv").config(); // env
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
