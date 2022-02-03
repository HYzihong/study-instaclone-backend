/**
 * @Author: hy
 * @Date: 2022-02-02 13:00:14
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 14:44:34
 * @FilePath: /instaclone-backend/src/db/movie/movie.queries.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import client from "../../client";

export default {
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
};
