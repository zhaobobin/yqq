import React from 'react';
import { Link } from 'dva/router'
import styles from './AccountAuth.less'

export default class AccountAuth extends React.Component {

  render(){

    return(

      <div className={styles.container + " " + styles.index}>

        <div className={styles.head}>
          <h1>用户认证</h1>
        </div>

        <div className={styles.body}>

          <div className={styles.section}>
            <h2>个人认证</h2>
            <div className={styles.con}>
              <p>核验个人姓名、身份证信息，确保是您本人发起的业务操作</p>
              <Link to="/account/auth/personal">申请个人认证</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h2>企业认证</h2>
            <div className={styles.con}>
              <p>个人实名认证基础上，提交企业营业执照等经营许可信息，证明此账号为企业行为操作</p>
              <Link to="/account/auth/company">申请企业认证</Link>
            </div>
          </div>

        </div>

      </div>

    )
  }

}
