import React, { useState } from 'react';
import { Layout } from 'antd';
import HeaderWrapper from '../Header';
import SilderMenu from '../SilderMenu';
import Content from '../Content';
import Breadcrumb from '../Breadcrumb';

const BasicLayout = () => {
  const [menu, setMeun] = useState();
  return (
    <Layout style={{ height: '100%' }}>
      <HeaderWrapper />
      <Layout>
        <SilderMenu />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb />
          <Content />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
