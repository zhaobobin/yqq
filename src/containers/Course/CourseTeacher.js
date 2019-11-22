import React from 'react'
import { Link } from 'dva/router'
import { Avatar, Row, Col } from 'antd'
import styles from './CourseTeacher.less'

const list = [
  {
    id: '123',
    name: 'Sunny',
    desc: '英语专业毕业，专注英语教育已有十年。擅长雅思托福，成人英语，小初高中英语等..',
    avatar: '',
  },
  {
    id: '234',
    name: 'Patricia Hall',
    desc: '英语专业毕业，专注英语教育已有十年。擅长雅思托福，成人英语，小初高中英语等..',
    avatar: '',
  },
  {
    id: '345',
    name: 'Donna Moore',
    desc: '英语专业毕业，专注英语教育已有十年。擅长雅思托福，成人英语，小初高中英语等..',
    avatar: '',
  },
]

export default class CourseTeacher extends React.Component{

  render(){
    return(
      <div className={styles.container}>

        <div className={styles.head}>
          <h2>讲师介绍</h2>
        </div>

        <div className={styles.body}>
          <Row gutter={38}>
            {
              list.map((item, index) => (
                <Col xs={24} sm={24} md={24} lg={8} key={index}>
                  <Link to={`/teacher/${item.id}`} className={styles.item}>
                    <p className={styles.avatar}>
                      {
                        item.avatar ?
                          <Avatar src={item.avatar} size={96} />
                          :
                          <Avatar icon="user" size={96} />
                      }
                    </p>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.desc}>{item.desc}</p>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </div>

      </div>
    )
  }

}
