/**
 * 二级导航菜单 - 自动吸顶
 */
import React from 'react';
import { NavLink } from 'dva/router';
import styles from './SubMenu.less';

export default function SubMenu({ routes }) {

  return(
    <ul className={styles.container}>
      {
        routes.children.map((item, index) => (
          <li key={index} className={styles.item}>
            {
              item.isHide ?
                null
                :
                <NavLink
                  activeClassName={styles.active}
                  to={`/${routes.key}/${item.path}`}
                >
                  <span>{item.name}</span>
                </NavLink>
            }
          </li>
        ))
      }
    </ul>
  )

}
