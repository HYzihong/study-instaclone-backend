/**
 * @Author: hy
 * @Date: 2022-02-02 12:37:32
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 14:47:23
 * @FilePath: /instaclone-backend/src/schema.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import {
  // makeExecutableSchema,
  loadFilesSync,
  mergeTypeDefs,
  mergeResolvers,
} from "graphql-tools";
// import {
//   loadFilesSync,
//   mergeTypeDefs,
//   mergeResolvers,
// } from "@graphql-tools/schema";
// const typesArray = loadFilesSync(path.join(__dirname, "."), { recurive: true });
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedMutation = loadFilesSync(`${__dirname}/**/*.{mutation,queries}.js`);
export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedMutation);
// export const schema = makeExecutableSchema({ typeDefs, resolvers });
