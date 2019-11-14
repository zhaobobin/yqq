import React from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import { Layout } from 'antd';
import { ENV } from '@/utils';
import DocumentTitle from 'react-document-title';
import NotFound from "@/pages/Other/404";

import GlobalHeader from '@/components/Common/GlobalHeader';
import GlobalFooter from '@/components/Common/GlobalFooter';
import GlobalContent from '@/components/Common/GlobalContent';

class UserLayout extends React.Component {

  getPageTitle() {
    const { location, getRouteData } = this.props;
    const { pathname } = location;
    const appname = ENV.info.appname;

    let title = appname;
    getRouteData('UserLayout').forEach((item) => {
      if (item.path !== pathname) return;
      let routeName = item.name;   //路径名称
      title = routeName + ' - ' + appname;
    });
    return title;
  }

  render(){

    const { getRouteData, navData, location } = this.props;

    const layout = (
      <Layout>
        <GlobalHeader navData={navData[0].children} location={location}/>

        <GlobalContent>

          <Switch>
            {
              getRouteData('UserLayout').map(item =>
                (
                  <Route
                    exact={item.exact}
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                )
              )
            }
            <Redirect exact from="/user" to="/user/login" />
            <Redirect exact from="/user/reset" to="/user/reset/index" />
            <Route component={NotFound} />
          </Switch>

        </GlobalContent>

        <GlobalFooter/>

      </Layout>
    );

    return(
      <DocumentTitle title={this.getPageTitle()}>
        {layout}
      </DocumentTitle>
    )
  }

}

export default UserLayout;
