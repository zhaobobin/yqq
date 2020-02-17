import React from 'react';
import styles from './AccountAuth.less'

export default class AccountAuthResult extends React.Component {

  render(){

    return(

      <div className={styles.container}>

        <div className={styles.head}>
          <h1>认证结果</h1>
        </div>

        <div className={styles.body}>
          AccountAuthResult
        </div>

      </div>

    )
  }

}
