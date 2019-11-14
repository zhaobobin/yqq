import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Avatar, Button, Icon, Menu, Dropdown } from 'antd';
import styles from './GlobalHeaderSign.less';

import { Confirm } from '@/components/Dialog/Dialog'

@connect(state => ({
  global: state.global
}))
export default class UserSign extends React.Component {

  constructor(props){
    super(props);
    this.ajaxFlag = true;
    this.state = {

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

  render() {

    return(
      <div className={styles.container}>

        <Link to="/user/login">
          <span>登录/注册</span>
          <i/>
        </Link>

      </div>
    )

  }

}
