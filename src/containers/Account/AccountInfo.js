import React from 'react';
import { Avatar, Button } from 'antd';
import styles from './AccountInfo.less'

export default function AccountInfo ({ currentUser }) {

  return(
    <div className={styles.container}>

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
