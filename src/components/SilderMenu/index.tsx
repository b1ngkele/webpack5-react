/*
 * @Author: y2029
 * @Description:
 * @Date: 2021-08-10 16:17:49
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-12 14:20:11
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import menuList from '../../mock/menu';
import { Props } from '../components';

const { Sider } = Layout;
const { SubMenu } = Menu;
let openKey = '/products';
const SilderMenu = (props: Props) => {
  const { location } = props;
  const { pathname } = location;
  const [key, setKey] = useState<string>('');
  const getMenuNodes = useCallback((list: any) => {
    return list.map((item: any) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path} icon={<UserOutlined />}>
            <Link to={{
              pathname: item.path,
              state: item.title,
            }}
            >
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      }
      // 查找一个与当前请求路径匹配的子Item
      const cItem = item.children.find((cItem: any) => {
        return pathname.indexOf(cItem.path) === 0;
      });

      // 如果存在, 说明当前item的子列表需要打开
      if (cItem) {
        openKey = item.path;
      }
      return (
        <SubMenu
          icon={<UserOutlined />}
          key={item.path}
          title={(
            <span>{item.title}</span>
          )}
        >
          {getMenuNodes(item.children)}
        </SubMenu>
      );
    });
  }, []);

  useEffect(() => {
    setKey(openKey);
  }, [openKey]);

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={[key]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {getMenuNodes(menuList)}
      </Menu>
    </Sider>
  );
};

export default withRouter(SilderMenu);
