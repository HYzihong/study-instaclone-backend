/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 23:59:28
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    title: String
    year: Int
  }
  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    creatMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => [
      {
        title: "hello",
        year: 2021,
      },
      {
        title: "world",
        year: 2021,
      },
    ],
    movie: () => ({
      title: "hello",
      year: 2021,
    }),
  },
  Mutation: {
    // creatMovie: (root, args, context, info) => {
    //   // console.log("root ==> ", root);
    //   console.log("args ==> ", args);
    //   // console.log("context ==> ", context);
    //   // console.log("info ==> ", info);
    //   return true;
    // },
    creatMovie: (_, { title }) => {
      console.log("title ==> ", title);
      return true;
    },
    deleteMovie: (root, args, context, info) => {
      // console.log(root, args, context, info);
      // console.log("root ==> ", root);
      console.log("args ==> ", args);
      // console.log("context ==> ", context);
      // console.log("info ==> ", info);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const part = 3333;
server.listen(part).then(() => {
  console.log(`Server is running on http://localhost:${part}/`);
});
