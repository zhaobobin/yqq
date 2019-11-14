import React from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import { Layout, BackTop } from 'antd';
import { ENV, Storage } from '@/utils';
import DocumentTitle from 'react-document-title';
import NotFound from "@/pages/Other/404";

import LoadingBg from '@/components/Common/LoadingBg';
import GlobalHeader from '@/components/Common/GlobalHeader';
import GlobalFooter from '@/components/Common/GlobalFooter';
import GlobalContent from '@/components/Common/GlobalContent';

@connect(state => ({
  global: state.global
}))
class BaseLayout extends React.Component {

  componentDidMount(){
    Storage.remove(ENV.storage.history)
    this.token();
  }

  token() {
    this.props.dispatch({
      type: 'global/token',
      payload: {}
    });
  }

  //监控路由变化
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname !== this.props.location.pathname){
      //返回页面顶部
      // window.scrollTo(0, 0);
      //添加路由历史
      let routerHistory = Storage.get(ENV.storage.routerHistory, 3600*24) || [];
      routerHistory.push(nextProps.location.pathname);
      Storage.set(ENV.storage.routerHistory, routerHistory);
    }
  }

  //获取页面标题
  getPageTitle() {
    const { location, getRouteData } = this.props;
    const { pathname } = location;
    const routeData = getRouteData('BaseLayout');

    let title = '';
    if(pathname === '/'){
      title = ENV.info.hometitle;
    }else{
      const pageTitle = this.foreachTitle(routeData, pathname).slice(3)
      title = pageTitle ?
        pageTitle + ' - ' + ENV.info.appname
        :
        ENV.info.appname;
    }

    return title;
  }

  //循环标题
  foreachTitle(routeData, pathname){
    let title = '';
    for(let i in routeData){
      if (pathname.indexOf(routeData[i].key) > -1) {
        title = this.foreachTitle(routeData[i].children, pathname) + ' - ' + routeData[i].name;
      }
    }
    return title;
  }

  render(){

    const { getRouteData, navData, location } = this.props;
    const { loading } = this.props.global;

    const RootLayout = loading ?
      <LoadingBg
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
      :
      <DocumentTitle title={this.getPageTitle()}>
        <Layout style={{minHeight: '100vh', background: '#fff'}}>

          <GlobalHeader navData={navData[0].children} location={location}/>

          <GlobalContent style={{marginBottom: '100px'}}>

            <Switch>
              {
                getRouteData('BaseLayout').map(item =>(
                  <Route
                    exact={item.exact}
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                ))
              }
              <Route component={NotFound} />
            </Switch>

            <BackTop />
          </GlobalContent>

          <GlobalFooter/>

        </Layout>
      </DocumentTitle>


    return(
      <>
        {RootLayout}
      </>
    )
  }

}

export default BaseLayout;
