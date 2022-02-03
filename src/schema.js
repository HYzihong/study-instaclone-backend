/**
 * @Author: hy
 * @Date: 2022-02-02 12:37:32
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 15:17:22
 * @FilePath: /instaclone-backend/src/schema.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from "graphql-tools";
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedMutation = loadFilesSync(`${__dirname}/**/*.{mutation,queries}.js`);
export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedMutation);
