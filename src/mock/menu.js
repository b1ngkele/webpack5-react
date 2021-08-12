/*
 * @Author: y2029
 * @Description:
 * @Date: 2021-08-10 15:21:26
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-11 16:49:28
 */
const menuList = [
  {
    title: '首页', // 菜单标题名称
    path: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '商品',
    path: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        path: '/products/category',
        icon: 'bars',
      },
    ],
  },
];

export default menuList;
