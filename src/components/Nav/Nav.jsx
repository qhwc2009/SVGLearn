import React, { useMemo } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Menu } from 'antd';

const pages = [
  {
    key: '1',
    link: '/',
    title: 'Home',
  },
  {
    key: '2',
    link: '/circle',
    title: 'Shape',
  },
  {
    key: '3',
    link: '/SVGEditor',
    title: 'SVGEditor',
  },
];

function Nav({ location }) {
  const defaultKey = useMemo(() => {
    if (location.pathname === '/') {
      return '1';
    } else {
      return _.get(pages
        .slice(1)
        .find(page => location.pathname.indexOf(page.link) !== -1), 'key', '1');
    }
  }, [location.pathname]);
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[defaultKey]}
      mode="inline"
      style={{ marginTop: '60px', height: '100%', borderRight: 0 }}
    >
      {pages.map(page => (
        <Menu.Item key={page.key}>
          <Link to={page.link}>{page.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default withRouter(Nav);
