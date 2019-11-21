import React from 'react';
import { Link } from 'dva/router'
import styles from './AccountRoutes.less'

const list = [
  {
    username: '用户名',
    date: '2019-06-30 09:41',
    content: '1.传统学习英方法的误区 刻苦不等于有效 大多数人采用的方法不等于正确的方法 违背自然规律导致吃力不讨好（先视听说，在读写） 出国不等于学好英语（我觉得，就相当于你去外地，听别人方言，也是需要很久的学习才可以学到手） 学英语不等于枯燥乏味 2.课程定位 适合任何一位英语爱好者 着眼能力提升+兼顾应试现实 我们的目标：将英语变成母语。1.传统学习英方法的误区 刻苦不等于有效 大多数人采用的方法不等于正确的方法 违背自然规律导致吃力不讨好（先视听说，在读写） 出国不等于学好英语（我觉得，就相当于你去外地，听别人方言，也是需要很久的学习才可以学到手） 学英语不等于枯燥乏味 2.课程定位 适合任何一位英语爱好者 着眼能力提升+兼顾应试现实 我们的目标：将英语变成母语',
    like: 22,
    courseName: '第一章：第一课《公开课只能试听几次，系统学习推荐购买整套精品课》',
    courseTime: '09:40',
    show: false,
  },
  {
    username: '用户名',
    date: '2019-06-30 09:41',
    content: '1.传统学习英方法的误区 刻苦不等于有效 大多数人采用的方法不等于正确的方法 违背自然规律导致吃力不讨好（先视听说，在读写） 出国不等于学好英语（我觉得，就相当于你去外地，听别人方言，也是需要很久的学习才可以学到手） 学英语不等于枯燥乏味 2.课程定位 适合任何一位英语爱好者 着眼能力提升+兼顾应试现实 我们的目标：将英语变成母语',
    like: 22,
    courseName: '第一章：第一课《公开课只能试听几次，系统学习推荐购买整套精品课》',
    courseTime: '09:40',
    show: false,
  },
]

export default class AccountRoutes extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: list,
    }
  }

  toggleShow = (index) => {
    let { list } = this.state;
    list[index].show = !list[index].show;
    this.setState({
      list
    })
  }

  render(){

    const { list } = this.state;

    return(

      <div className={styles.container}>

        <ul>
          {
            list.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.head}>
                  <strong>{item.username}</strong>
                  <span>{item.date}</span>
                </div>
                <div className={styles.body}>
                  <p className={item.show ? styles.show : styles.hide}>{item.content}</p>
                </div>
                <div className={styles.foot}>
                  <div className={styles.action}>
                    <a className={styles.toggle} onClick={() => this.toggleShow(index)}>
                      {item.show ? '收起' : '展开'}
                    </a>
                    <a>已顶</a>
                    <a>分享</a>
                    <a>收藏</a>
                  </div>
                  <div className={styles.course}>
                    <Link to={'/'}>
                    <span className={styles.name}>{item.courseName}</span>
                    <span className={styles.time}>{item.courseTime}</span>
                    </Link>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>

      </div>

    )
  }

}
