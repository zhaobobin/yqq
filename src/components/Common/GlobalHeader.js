import React from 'react';
import { Link } from 'dva/router'
import { Row, Col } from 'antd';
import styles from './GlobalHeader.less';

import logo from '@/assets/com/logo.png'
import GlobalHeaderMenu from '@/components/Common/GlobalHeaderMenu'
import GlobalHeaderSearch from '@/components/Common/GlobalHeaderSearch'
import GlobalHeaderSign from '@/components/Common/GlobalHeaderSign'

function headerIsOpacity(pathname){
  let path = pathname.split('/')[1];
  return (path === '' || path === 'category' || path === 'users')
}

export default class GlobalHeader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pathname: props.location.pathname,
      headerOpacity: headerIsOpacity(props.location.pathname) ? styles.opacity : '',	  //导航默认样式
      headerFixed: props.location.pathname === '/' || props.location.pathname.split('/')[1] === 'category' ? styles.abso : ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname !== this.state.pathname){
      this.hashChange(nextProps.location.pathname)
    }
  }

  //监控路由变化
  hashChange(pathname){
    // window.scrollTo(0, 0);                                  //重置滚动
    const path = pathname.split('/')[1];
    switch(path){
      case '':
        // window.addEventListener('scroll', this.handleScroll, false);
        this.setState({pathname: pathname, headerOpacity: styles.opacity, headerFixed: styles.fixed});
        break;
      case 'category':
        window.removeEventListener('scroll', this.handleScroll, false);
        this.setState({pathname: pathname, headerOpacity: styles.opacity, headerFixed: styles.fixed});
        break;
      case 'users':
        window.removeEventListener('scroll', this.handleScroll, false);
        this.setState({pathname: pathname, headerOpacity: styles.opacity, headerFixed: ''});
        break;
      default:
        window.removeEventListener('scroll', this.handleScroll, false);
        this.setState({ pathname: pathname, headerOpacity: '', headerFixed: '' });
        break;
    }
  }

  //监控滚动
  handleScroll = () => {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if(scrollY > 0){
      this.setState({headerFixed: styles.fixed})
    }else{
      this.setState({headerFixed: ''})
    }
  }

  render(){

    const { navData, location } = this.props;
    const { headerFixed, headerOpacity } = this.state;

    return(
      <div className={styles.header+" "+headerFixed+" "+headerOpacity}>

        <Row>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.con}>
              <Row>
                <Col xs={6} sm={6} md={4} lg={4}>
                  <div className={styles.logo}>
                    <Link to="/">
                      <img src={logo} alt="logo"/>
                    </Link>
                  </div>
                </Col>

                <Col xs={7} sm={7} md={9} lg={9}>

                  <GlobalHeaderMenu navData={navData} location={location}/>

                </Col>

                <Col xs={5} sm={5} md={7} lg={7}>
                  <GlobalHeaderSearch/>
                </Col>

                <Col xs={6} sm={6} md={4} lg={4}>
                  <GlobalHeaderSign/>
                </Col>
              </Row>
            </div>

          </Col>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

        </Row>

      </div>
    )
  }

}
