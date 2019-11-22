import React from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import NotFound from "@/pages/Other/404";

import RouteExtend from '@/components/Common/RouteExtend'
const Routes = RouteExtend('category');

export default class _layout extends React.Component {

  render(){

    return(

      <Switch>
        {
          Routes.children.map(item => (
            <Route
              exact={item.exact}
              key={item.path}
              path={`/${Routes.path}/${item.path}`}
              component={item.component}
            />
          ))
        }
        <Redirect exact from='/category' to='/category/index' />
        <Route component={NotFound} />
      </Switch>

    )
  }

}
