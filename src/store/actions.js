/*
 * @Author: y2029
 * @Description: actions
 * @Date: 2021-08-13 10:49:43
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 10:53:16
 */

// 存放触发数据更新的方法
function increaseCount(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREASE', data });
  };
}
function reduceCount(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'REDUCE', data });
  };
}

module.exports = {
  increaseCount,
  reduceCount,
};
