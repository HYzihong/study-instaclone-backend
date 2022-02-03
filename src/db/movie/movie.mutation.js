/**
 * @Author: hy
 * @Date: 2022-02-02 12:59:35
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 14:44:30
 * @FilePath: /instaclone-backend/src/db/movie/movie.mutation.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

import client from "../../client";

export default {
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
