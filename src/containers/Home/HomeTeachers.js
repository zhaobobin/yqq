import React from 'react';
import { Link } from 'dva/router'
import { Row, Col } from 'antd'
import styles from './HomeTeachers.less'

const list = [
  {
    name: '老师名字',
    school: '北京大学软件与微电子学院硕士',
    desc: '北京大学量子电子学研究所电路系统研究员，曾参与中国"天宫”项目中空间冷原子系统研发。2017年福布斯中国30u30精英，北京大学青年CEO俱乐部副理事长,央视少儿频道《勇敢前行》节目户外科学课程顾问.',
    avatar: require('@/assets/home/avatar01.jpg')
  },
  {
    name: '老师名字',
    school: '北京大学软件与微电子学院硕士',
    desc: '北京大学量子电子学研究所电路系统研究员，曾参与中国"天宫”项目中空间冷原子系统研发。2017年福布斯中国30u30精英，北京大学青年CEO俱乐部副理事长,央视少儿频道《勇敢前行》节目户外科学课程顾问.',
    avatar: require('@/assets/home/avatar02.jpg')
  },
  {
    name: '老师名字',
    school: '北京大学软件与微电子学院硕士',
    desc: '北京大学量子电子学研究所电路系统研究员，曾参与中国"天宫”项目中空间冷原子系统研发。2017年福布斯中国30u30精英，北京大学青年CEO俱乐部副理事长,央视少儿频道《勇敢前行》节目户外科学课程顾问.',
    avatar: require('@/assets/home/avatar01.jpg')
  },
]

export default function HomeTeachers () {

  return(

    <div className={styles.container}>
      <Row>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        <Col xs={24} sm={20} md={20} lg={20} xl={16}>

          <div className={styles.head}>
            <i/>
            <h2>师资介绍</h2>
          </div>

          <div className={styles.body}>
            <ul>
              {
                list.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <Link to="/" className={index%2 === 0 ? styles.odd : styles.even}>
                      <span className={styles.avatar}>
                        <img src={item.avatar} alt="avatar" />
                      </span>
                      <div className={styles.info}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.school}>{item.school}</p>
                        <p className={styles.desc}>{item.desc}</p>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </Col>
        <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
      </Row>
    </div>


  )

}
