import React from 'react';
import { Link } from 'dva/router'
import { Row, Col, Carousel } from 'antd'
import styles from './HomeCase.less'

const list = [
  {
    title: '学员获得xxx大赛 优秀奖',
    img: require('@/assets/home/Bitmap@2x.png'),
    url: '/',
  },
  {
    title: '学员获得xxx大赛 优秀奖',
    img: require('@/assets/home/Bitmap@2x(1).png'),
    url: '/',
  },
  {
    title: '给孩子的第一堂宇宙课',
    img: require('@/assets/home/Bitmap@2x(2).png'),
    url: '/',
  }
]

export default class HomeCase extends React.Component {

  handlePrev = () => {
    this.slider.prev(); //ref = img
  }

  handleNext = () => {
    this.slider.next();
  }

  render(){
    return(

      <div className={styles.container}>
        <Row>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
          <Col xs={24} sm={20} md={20} lg={20} xl={16}>

            <div className={styles.head}>
              <i/>
              <h2>学员案例</h2>
            </div>

            <div className={styles.body}>
              <Carousel
                ref={slider => (this.slider = slider)}
                dots={false}
                effect="fade"
              >
                {
                  list.map((item, index) => (
                    <div key={index}>
                      <Link to={item.url} className={styles.item}>
                        <img src={item.img} alt="bg"/>
                        <span className={styles.bg}/>
                        <p className={styles.title}>{item.title}</p>
                      </Link>
                    </div>
                  ))
                }
              </Carousel>

              <span className={styles.arrow + " " + styles.left} onClick={this.handlePrev}>
                <img src={require('@/assets/com/arrow_left@2x.png')} alt="arrow"/>
              </span>
              <span className={styles.arrow + " " + styles.right} onClick={this.handleNext}>
                <img src={require('@/assets/com/arrow_right@2x.png')} alt="arrow"/>
              </span>

            </div>

          </Col>
          <Col xs={0} sm={2} md={2} lg={2} xl={4}/>
        </Row>
      </div>


    )
  }

}
