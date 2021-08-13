/*
 * @Author: y2029
 * @Description: global
 * @Date: 2021-08-12 17:14:36
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 10:07:42
 */
import menuList from '../mock/menu';

export default {
  namespace: 'global',
  state: {
    menuList,
  },
  effects: {
    * getMenuList(_, { put }) {
      yield put({
        type: 'setMenuList',
        payload: menuList,
      });
    },
  },
  reducers: {
    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    },
  },

};
