import React from 'react'
import { Link, NavLink } from 'dva/router'
import { Breadcrumb } from 'antd';
import styles from './AccountBreadcrumb.less'

function getCurrentRoute (routes, item) {
  let name = '个人中心';
  for(let i in routes){
    if(routes[i].path === item) {
      name = routes[i].name
    }
  }
  return name
}

export default function AccountBreadcrumb ({ routes }) {

  const pathSnippets = window.location.pathname.split('/').filter(i => i);

  const extraBreadcrumbItems = pathSnippets.map((item, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <NavLink to={url} activeClassName={styles.active}>
          {/*{breadcrumbNameMap[url]}*/}
          {getCurrentRoute(routes.children, item)}
        </NavLink>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return(
    <div className={styles.container}>
      <Breadcrumb separator=">">
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  )
}
