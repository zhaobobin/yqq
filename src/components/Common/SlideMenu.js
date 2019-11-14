/**
 * 设置 - 菜单
 */
import React from 'react';
import { NavLink } from 'dva/router';
import { Icon } from 'antd'
import styles from './SlideMenu.less';

export default function SettingsSlideMenu ({ routes }) {

  return(
    <div className={styles.menu}>

      <ul>
        {
          routes.children.map(item => (
            <li key={item.path} >
              <NavLink
                activeClassName={styles.active}
                to={`/${routes.path}/${item.path}`}
              >
                <span>{item.name}</span>
                <Icon type="right" />
              </NavLink>
            </li>
          ))
        }
      </ul>

    </div>
  )

};
