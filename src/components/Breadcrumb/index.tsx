/*
 * @Author: y2029
 * @Description: Breadcrumb
 * @Date: 2021-08-12 10:38:21
 * @LastEditors: y2029
 * @LastEditTime: 2021-08-12 14:16:36
 */

import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { flatArr } from '@utils/common';
import { Props } from '../components';
import menuList from '../../mock/menu';

const BreadcrumbComponent = (props: Props) => {
  const { location } = props;
  const [breadList, setBreadList] = useState<any[]>([]);
  useEffect(() => {
    const newArr = flatArr(menuList);
    const breadcrumbList = newArr.filter((item) => (location.pathname.indexOf(item.path) === 0));
    setBreadList(breadcrumbList);
  }, [location.pathname]);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadList.map((item, index) => {
          return (
            <Breadcrumb.Item key={item.path}>
              {index === 0 ? item.title : (
                <Link to={item.path}>
                  {item.title}
                </Link>
              )}
            </Breadcrumb.Item>
          );
        })
      }
    </Breadcrumb>
  );
};

export default withRouter(BreadcrumbComponent);
