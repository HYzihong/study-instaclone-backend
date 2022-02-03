/**
 * @Author: hy
 * @Date: 2022-02-02 12:59:59
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 13:51:55
 * @FilePath: /instaclone-backend/src/db/movie/movie.typeDefs.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

import { gql } from "apollo-server";

export default gql`
  type Movie {
    id: Int
    title: String
    year: Int
    genre: String
    createAt: String
    updateAt: String
  }
  # 查询
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }
  # 变更
  type Mutation {
    creatMovie(title: String!, year: Int!, genre: String!): Movie
    deleteMovie(id: Int!): Movie
    updateMovie(id: Int!, year: Int!): Movie
  }
`;
