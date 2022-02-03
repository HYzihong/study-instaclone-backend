import { gql } from "apollo-server";

/**
 * @Author: hy
 * @Date: 2022-02-03 15:50:07
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 21:02:24
 * @FilePath: /instaclone-backend/src/modules/user/user.typeDefs.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
export default gql`
  type User {
    id: String!
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    createAt: String!
    updateAt: String!
  }
  type Mutation {
    createUser(
      firstName: String!
      lastName: String
      userName: String!
      password: String!
      email: String!
    ): User
  }
  type Query {
    seeProfile(userName: String): User
  }
`;
