/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 23:29:38
 * @FilePath: /instaclone-backend/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      "world";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const part = 3333;
server.listen(part).then(() => {
  console.log(`Server is running on http://localhost:${part}/`);
});
