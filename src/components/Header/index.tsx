/*
 * @Author: y2029
 * @Description: 头部导航栏
 * @Date: 2021-08-10 10:26:15
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-13 09:48:17
 */
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'dva';

const { Header } = Layout;

const HeaderWrapprer = (props: any) => {
  const { dispatch } = props;
  const handleMenuClick = (item: any) => {
    dispatch({
      type: 'global/getMenuList',
    });
  };
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} onClick={(item) => handleMenuClick(item)}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default connect()(HeaderWrapprer);
