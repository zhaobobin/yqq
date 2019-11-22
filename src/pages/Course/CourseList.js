/**
 * 课程列表
 */
import React from 'react';
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import styles from './CourseList.less'

import LoadLazy from '@/components/Common/LoadLazy'
import CategoryBanner from '@/containers/Category/CategoryBanner'

const list = [
  {
    id: '1234567',
    title: '小小发明家物理科学系列课程',
    desc: '该课程涵盖光学、声学、电子学、电磁学、能最转换等5大中学物理模块知识点。为7-12岁青少年开发，以动手制作为核心，每节课制作一个科技作品，穿插物理实验，通过自我探索走入神奇的科学殿堂。',
    thumb: require('@/assets/category/course01.png'),
  },
  {
    id: '1234567',
    title: '小小发明家物理科学系列课程',
    desc: '该课程涵盖光学、声学、电子学、电磁学、能最转换等5大中学物理模块知识点。为7-12岁青少年开发，以动手制作为核心，每节课制作一个科技作品，穿插物理实验，通过自我探索走入神奇的科学殿堂。',
    thumb: require('@/assets/category/course02.png'),
  },
  {
    id: '1234567',
    title: '小小发明家物理科学系列课程',
    desc: '该课程涵盖光学、声学、电子学、电磁学、能最转换等5大中学物理模块知识点。为7-12岁青少年开发，以动手制作为核心，每节课制作一个科技作品，穿插物理实验，通过自我探索走入神奇的科学殿堂。',
    thumb: require('@/assets/category/course03.png'),
  },
  {
    id: '1234567',
    title: '小小发明家物理科学系列课程',
    desc: '该课程涵盖光学、声学、电子学、电磁学、能最转换等5大中学物理模块知识点。为7-12岁青少年开发，以动手制作为核心，每节课制作一个科技作品，穿插物理实验，通过自我探索走入神奇的科学殿堂。',
    thumb: require('@/assets/category/course01.png'),
  },
]

export default class CourseList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tag: this.props.match.params.tag
    }
  }

  componentDidMount(){
    window.scroll(0, 0)
  }

  render(){

    const { tag } = this.state;

    return(

      <div className={styles.container}>

        <LoadLazy height="300">
          <CategoryBanner/>
        </LoadLazy>

        <Row>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.head}>
              <h1>Java学习指南系列</h1>
            </div>

            <div className={styles.body}>
              {
                list.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <Link to={`/category/course/${tag}/${item.id}`}>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
                          <img src={item.thumb} alt="thumb" className={styles.thumb}/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
                          <p className={styles.title}>{item.title}</p>
                          <p className={styles.desc}>{item.desc}</p>
                        </Col>
                      </Row>
                    </Link>
                  </div>
                ))
              }
            </div>

          </Col>

          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>

        </Row>

      </div>

    )
  }

}
