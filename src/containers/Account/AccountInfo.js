import React from 'react';
import { connect } from 'dva';
import { Avatar, Icon } from 'antd';
import styles from './AccountInfo.less'

import { Confirm } from '@/components/Dialog/Dialog'

@connect(state => ({
  global: state.global
}))
export default class AccountInfo extends React.Component{

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

  render(){

    const { currentUser } = this.props;

    return(
      <div className={styles.container}>

        <a onClick={this.logout} className={styles.logout}>
          <Icon type="export" />
          <span>退出登录</span>
        </a>

        <p className={styles.avatar}>
          {
            currentUser.avatar_url ?
              <Avatar src={currentUser.avatar_url + '?x-oss-process=style/thumb_s'} size={84} />
              :
              <Avatar icon="user" size={84} />
          }
        </p>

        <p className={styles.name}>
          {currentUser.nickname || '用户名'}
        </p>

        <p className={styles.info}>
          学习了：<span>23个小时</span>
        </p>
        <p className={styles.info}>
          余额：<span>¥3234.5</span>
        </p>

      </div>
    )
  }

}
