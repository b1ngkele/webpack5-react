/*
 * @Author: y2029
 * @Description: 常用的方法
 * @Date: 2021-08-12 11:08:37
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-12 11:32:50
 */

function flatArr(arr) {
  const result = [];
  const cloneData = JSON.parse(JSON.stringify(arr));
  cloneData.forEach((item) => {
    result.push(item);
    if (Array.isArray(item.children) && item.children.length > 0) {
      result.push(...flatArr(item.children));
    }
  });
  return result;
}

export { flatArr };
