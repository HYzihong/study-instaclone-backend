/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 12:39:58
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const part = 3333;
server.listen(part).then(() => {
  console.log(`Server is running on http://localhost:${part}/`);
});
