/*
 * @Author: y2029
 * @Description:
 * @Date: 2021-08-11 16:41:18
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 10:01:46
 */
interface Location {
  pathname: string;
}

interface Children {
  title: string;
  path: string;
  icon: string;
  isPublic?: boolean;
}
interface Props {
  location: Location;
  menuList?: any;
}

interface MenuItem {
  title: string;
  path: string;
  icon: string;
  isPublic?: boolean;
  children?: Children[];
}

export { Props, MenuItem };
