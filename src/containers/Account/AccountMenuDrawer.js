/**
 * 账户 - 菜单
 */
import React from 'react';
import { NavLink } from 'dva/router';
import { Icon, Drawer } from 'antd';
import styles from './AccountMenuDrawer.less';

export default class AccountMenuDrawer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  toggle = () => {
    let visible = !this.state.visible;
    this.setState({
      visible,
    });
  }

  render(){

    const { routes, title } = this.props;
    const { visible } = this.state;

    return(
      <div className={styles.drawer}>

        <div
          className={styles.btn + ' ' + (visible ? styles.close : styles.show)}
          onClick={this.toggle}
        >
          {
            visible ?
              <Icon type="close" />
              :
              <Icon type="menu" />
          }
        </div>

        <Drawer
          title={title}
          placement="left"
          closable={false}
          visible={visible}
          className={styles.settingsDrawer}
          onClose={this.toggle}
        >
          <ul>
            {
              routes.children.map(item => (
                item.isHide ?
                  null
                  :
                  <li
                    key={item.path}
                    onClick={this.toggle}
                  >
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
        </Drawer>

      </div>
    )
  }

};
