/**
 * @Author: hy
 * @Date: 2022-02-03 15:50:21
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-03 18:35:56
 * @FilePath: /instaclone-backend/src/modules/user/user.mutations.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
import clint from '../../client'
export default {
  async createUser:(_,{
    firstName,
    lastName,
    userName,email
  })=>{
    const isHaveUser = await clint.user.findFirst({where:{OR:[{userName},{email}]}})
    if(isHaveUser){
      throw new Error("This username/password is already taken.");
    }
    // password -> MD5 -（后端）->MD5->db
    const uglyPassword = await bcrypt.hash(password, 10);
    const user = await client.user.create({
      data: {
        username,
        email,
        firstName,
        lastName,
        password: uglyPassword,
      },
    });
    return user
  }
};
