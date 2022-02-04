/**
 * @Author: hy
 * @Date: 2022-02-03 15:51:18
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 00:10:29
 * @FilePath: /instaclone-backend/src/modules/user/user.queries.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import clint from "../../client";

export default {
  Query: {
    seeAll: async () => {
      try {
        return await clint.user.findMany();
      } catch (error) {
        return error;
      }
    },
    /*
    
    query{
      seeAll {
        id,
        userName,
        email,
        createAt,
        updateAt
      }
    }

    */
    seeProfile: async (_, { userName }) => {
      try {
        const user = await clint.user.findUnique({ where: { userName } });
        console.log("seeProfile ==>", user);
        return user;
      } catch (error) {
        return error;
      }
    },
    /*

    query  {
      seeProfile(userName:"zhangsan") {
        id
      }
    }
    
    */
  },
};
