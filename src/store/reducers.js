/*
 * @Author: y2029
 * @Description: reducers.js
 * @Date: 2021-08-13 10:44:32
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 10:52:36
 */

import { combineReducers } from 'redux';
import initState from './state';

// 存放真正的数据
function count(state = initState.count, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'REDUCE':
      return state - 1;
    default:
      return state;
  }
}
export default combineReducers({
  count,
});
