import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Avatar, Button, Icon, Menu, Dropdown } from 'antd';
import styles from './GlobalHeaderSign.less';

import { Confirm } from '@/components/Dialog/Dialog'
import UserSignModal from '@/blocks/User/UserSignModal';

@connect(state => ({
  global: state.global
}))
export default class UserSign extends React.Component {

  constructor(props){
    super(props);
    this.ajaxFlag = true;
    this.state = {
      visible: ''
    }
  }

  // 切换登录注册modal状态
  setUserModal(value, key){
    this.props.dispatch({
      type: 'global/changeSignModal',
      payload: {
        signModalVisible: value,
        signTabKey: key,
      }
    });
  }

  // 退出登录
  logout = () => {
    Confirm({
      title: '退出登录?',
      callback: (res) => {
        if(res === 1) {
          this.props.dispatch({
            type: 'global/logout',
          });
        }
      }
    });
  };

  onVisibleChange = (visible) => {
    this.setState({
      visible
    })
  }

  render() {

    const { visible } = this.state;
    const { isAuth, currentUser } = this.props.global;

    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/account">
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a onClick={this.logout}>
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    )

    return(
      <div className={styles.container}>

        {
          isAuth ?
            <Dropdown
              overlay={menu}
              overlayClassName={styles.userDropdown}
              onVisibleChange={this.onVisibleChange}
            >
              <Link to="/account" className={styles.user}>
                <span className={styles.username}>{currentUser.uname || ''}</span>
                {
                  currentUser.avatar_url ?
                    <Avatar className={styles.avatar} src={currentUser.avatar_url + '?x-oss-process=style/thumb_s'} size={30} />
                    :
                    <Avatar className={styles.avatar} icon="user" size={30}  style={{ color: '#FFC010', backgroundColor: '#FFF5DA' }} />
                }
                <span className={styles.arrow + " " + (visible ? styles.up : '')}>
                  <Icon type="down"/>
                </span>
              </Link>
            </Dropdown>
            :
            <a className={styles.sign}>
              <span onClick={ () => this.setUserModal(true, '1') }>登录</span>
              <span>/</span>
              <span onClick={ () => this.setUserModal(true, '2') }>注册</span>
              <i/>
            </a>
        }

        <UserSignModal/>

      </div>
    )

  }

}
