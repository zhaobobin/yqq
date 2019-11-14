import React from 'react';
import { NavLink } from 'dva/router';
import styles from './GlobalHeaderMenu.less';

function getMenuList(navData){

  if (!navData) return [];
  return navData.map((item, index) => {
    if (!item.name || item.isHide) return null;
    return(
      <li key={item.key}>
        <NavLink
          exact={item.exact}
          className={styles.link}
          activeClassName={styles.current}
          to={`/${item.path}`}
        >
          {item.name}
        </NavLink>

        {
          item.children ?
            <div className={styles.submenu}>
              {
                item.children.map((topic, i) => (
                  topic.isHide ?
                    null
                    :
                    <p key={i}>
                      <NavLink
                        className={styles.sublink}
                        activeClassName={styles.active}
                        to={`/${item.path}/${topic.path}`}
                      >
                        {topic.name}
                      </NavLink>
                    </p>
                ))
              }
            </div>
            :
            null
        }
      </li>
    )
  })
}

export default function GlobalHeaderMenu ({navData}) {

  return(
    <ul className={styles.menu}>
      {/*{getMenuList(navData)}*/}
      <li>
        <NavLink to="/system" className={styles.link} activeClassName={styles.current}>
          课程体系
        </NavLink>
      </li>
      <li>
        <NavLink to="/category" className={styles.link} activeClassName={styles.current}>
          课程分类
        </NavLink>
      </li>
      <li>
        <NavLink to="/join" className={styles.link} activeClassName={styles.current}>
          机构入驻
        </NavLink>
      </li>
    </ul>
  )

}
