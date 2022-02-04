/**
 * @Author: hy
 * @Date: 2022-02-04 18:55:12
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-04 18:55:15
 * @FilePath: /instaclone-backend/src/utils/returnResult.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

/*******
 * @description: fail result
 * @param {*} msg
 * @return {*}
 */
export function defaultFailResult(msg, error) {
  console.log("<== defaultFailResult ==>");
  // log
  console.log(msg, error);
  return {
    ok: false,
    error: msg,
  };
}

/*******
 * @description: successful result
 * @param {*} data
 * @return {*}
 */
export function defaultSuccessfulResult(data) {
  console.log("<== defaultSuccessfulResult ==>");
  return {
    ok: true,
    data,
  };
}
