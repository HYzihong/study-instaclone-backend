/**
 * @Author: hy
 * @Date: 2022-02-02 12:34:12
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 12:36:19
 * @FilePath: /instaclone-backend/src/client.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default client;
