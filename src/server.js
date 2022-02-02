/**
 * @Author: hy
 * @Date: 2022-02-01 22:49:24
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 12:12:17
 * @FilePath: /instaclone-backend/src/server.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    year: Int
    genre: String
    createAt: String
    updateAt: String
  }
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }
  type Mutation {
    creatMovie(title: String!, year: Int!, genre: String!): Movie
    deleteMovie(id: Int!): Movie
    updateMovie(id: Int!, year: Int!): Movie
  }
`;

const resolvers = {
  Query: {
    // movies: () => [
    //   {
    //     id: 1,
    //     title: "hello",
    //     year: 2021,
    //   },
    //   {
    //     id: 2,
    //     title: "world",
    //     year: 2021,
    //   },
    // ],
    movies: () => client.movie.findMany(),
    movie: (_, { id }) => client.movie.findUnique({ where: { id } }),
    // movie: () => client.movie.findFirst(),
    // ({
    //   id: 1,
    //   title: "hello",
    //   year: 2021,
    // }),
  },
  Mutation: {
    // creatMovie: (root, args, context, info) => {
    //   // console.log("root ==> ", root);
    //   console.log("args ==> ", args);
    //   // console.log("context ==> ", context);
    //   // console.log("info ==> ", info);
    //   return true;
    // },
    // creatMovie: (_, { title }) => {
    //   console.log("title ==> ", title);
    //   // client.movie.update()
    //   return true;
    // },
    creatMovie: (_, { title, year, genre }) =>
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      }),
    // deleteMovie: (root, args, context, info) => {
    //   // console.log(root, args, context, info);
    //   // console.log("root ==> ", root);
    //   console.log("args ==> ", args);
    //   // console.log("context ==> ", context);
    //   // console.log("info ==> ", info);
    //   return true;
    // },
    deleteMovie: (_, { id }) => client.movie.delete({ where: { id } }),
    updateMovie: (_, { id, year }) =>
      client.movie.update({ where: { id }, data: { year } }),
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

/*

model Movie {
  id       Int      @id @default(autoincrement())
  title    String
  year     Int
  genre    String
  createAt DateTime @default(now())
  updateAt DateTime @updatedAt
}


*/
