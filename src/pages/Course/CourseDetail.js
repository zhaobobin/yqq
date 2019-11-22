/**
 * 课程详情
 */
import React from 'react';
import { Link, NavLink, Route, Redirect, Switch } from 'dva/router'
import { Row, Col, Tabs } from 'antd'
import { getUrlParams } from "@/utils/utils"
import NotFound from "@/pages/Other/404";
import styles from './CourseDetail.less'

import LoadLazy from '@/components/Common/LoadLazy'
import CourseBanner from '@/containers/Course/CourseBanner'
import CourseTeacher from '@/containers/Course/CourseTeacher'

import CourseIntroduce from '@/pages/Course/CourseDetailIntroduce'
import CourseDirectory from '@/pages/Course/CourseDetailDirectory'
import CourseRoutes from '@/pages/Course/CourseDetailRoutes'

import RouteExtend from '@/components/Common/RouteExtend'

const Routes = RouteExtend('category').children[2];
const { TabPane } = Tabs;
const params = getUrlParams()

export default class CourseDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tag: this.props.match.params.tag,
      id: this.props.match.params.id,
      tab: getUrlParams().tab || '1'
    }
  }

  componentDidMount(){
    window.scroll(0, 0)
  }

  render(){

    const { tag, id, tab } = this.state;

    return(

      <div className={styles.container}>

        <LoadLazy height="300">
          <CourseBanner/>
        </LoadLazy>

        <Row>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <LoadLazy height="150">
              <CourseTeacher/>
            </LoadLazy>

            {/*<ul className={styles.menu}>*/}
              {/*{*/}
                {/*Routes.children.map((item, index) => (*/}
                  {/*<li key={index} className={styles.item}>*/}
                    {/*{*/}
                      {/*item.isHide ?*/}
                        {/*null*/}
                        {/*:*/}
                        {/*<NavLink*/}
                          {/*activeClassName={styles.active}*/}
                          {/*to={`/category/course/${tag}/${id}/${item.path}`}*/}
                        {/*>*/}
                          {/*<span>{item.name}</span>*/}
                        {/*</NavLink>*/}
                    {/*}*/}
                  {/*</li>*/}
                {/*))*/}
              {/*}*/}
            {/*</ul>*/}

            {/*<Switch>*/}
              {/*{*/}
                {/*Routes.children.map(item => (*/}
                  {/*<Route*/}
                    {/*exact={item.exact}*/}
                    {/*key={item.path}*/}
                    {/*path={`/category/course/${tag}/${id}/${item.path}`}*/}
                    {/*component={item.component}*/}
                  {/*/>*/}
                {/*))*/}
              {/*}*/}
              {/*<Redirect exact from={`/category/course/${tag}/${id}`} to={`/category/course/${tag}/${id}/introduce`}/>*/}
              {/*<Route component={NotFound} />*/}
            {/*</Switch>*/}

            <Tabs
              defaultActiveKey={tab}
              animated={false}
              size="large"
            >

              <TabPane tab="课程介绍" key="1">
                <CourseIntroduce/>
              </TabPane>

              <TabPane tab="课程目录" key="2">
                <CourseDirectory/>
              </TabPane>

              <TabPane tab="课程笔记" key="3">
                <CourseRoutes/>
              </TabPane>

            </Tabs>

          </Col>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        </Row>

      </div>

    )
  }

}
