import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '@/pages/home';
import Category from '@/pages/products/category';

const { Content } = Layout;

const ContentWrapper = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Switch>
        <Redirect from="/" exact to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/products/category" component={Category} />
      </Switch>
    </Content>
  );
};

export default ContentWrapper;
