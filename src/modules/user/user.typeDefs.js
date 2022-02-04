import { gql } from "apollo-server";

/**
 * @Author: hy
 * @Date: 2022-02-03 15:50:07
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 19:54:22
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
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type DefaultResult {
    ok: Boolean!
    data: User
    error: String
  }
  type Mutation {
    login(userName: String!, password: String!): LoginResult!
    createUser(
      firstName: String!
      lastName: String
      userName: String!
      password: String!
      email: String!
    ): DefaultResult!
    editUser(
      firstName: String!
      lastName: String
      userName: String!
      password: String!
      email: String!
    ): DefaultResult!
    deleteUser(id: String!): DefaultResult!
  }
  type Query {
    seeProfile(userName: String): User
    seeAll: [User]
  }
`;
