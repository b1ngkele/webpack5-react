/*
 * @Author: y2029
 * @Description:
 * @Date: 2021-08-10 16:17:49
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 10:07:59
 */
import React, { useCallback } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { Props, MenuItem } from '../components';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SilderMenu = (props: Props) => {
  const { location, menuList } = props;
  const { pathname } = location;
  const getMenuNodes = useCallback((list: MenuItem[]) => {
    return list.map((item: MenuItem) => {
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

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={[`/${pathname.split('/')[1]}`]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {getMenuNodes(menuList)}
      </Menu>
    </Sider>
  );
};

const mapStateToProps = (state: any) => {
  const { global: { menuList } } = state;
  return {
    menuList,
  };
};

export default withRouter(connect(mapStateToProps)(SilderMenu));
