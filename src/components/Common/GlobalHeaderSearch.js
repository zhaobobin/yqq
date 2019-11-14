/**
 * 导航 - 搜索
 */
import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Input, Icon } from 'antd';
import styles from './GlobalHeaderSearch.less'

const { Search } = Input;

@connect(state => ({
  global: state.global
}))
export default class GlobalHeaderSearch extends React.Component {

  constructor(props){
    super(props);
    this.value = '';
    this.state = {
      value: '',
    }
  }

  onCHange = (e) => {
    let value = e.target.value;
    this.value = value.replace(/(^\s*)|(\s*$)/g, ""); // 去除两端空格
  }

  onSearch = (value) => {
    if(!this.value) return;
    // value = value.replace(/(^\s*)|(\s*$)/g, ""); // 去除两端空格
    const keyword = encodeURIComponent(this.value);
    this.props.dispatch(routerRedux.push(`/search?type=content&q=${keyword}`));
  }

  render(){

    return(
      <div className={styles.container}>
        <Search
          placeholder=""
          onChange={this.onCHange}
          onSearch={this.onSearch}
        />
      </div>
    )
  }

}
