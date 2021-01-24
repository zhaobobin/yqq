/**
 * 教师管理
 */
import React from 'react';
import { connect } from 'dva';
import moment from 'moment'
import { Link } from 'dva/router'

import FormInit from '@/components/Form/FormInit'
import TableInit from '@/components/Table/TableInit'

@connect(state => ({
  global: state.global
}))
export default class TeacherManage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      apiList: '/teacher/getTeacherList',
      queryParams: {},                //查询参数
    }
  }

  //表单回调
  formCallback = (values) => {
    this.setState({
      queryParams: values
    })
  };

  // 查看
  edit = (item) => {

  };

  render(){

    const { apiList, queryParams } = this.state;

    const searchParams = [
      [
        {
          key: 'name',
          label: '教师姓名',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'tel',
          label: '教师电话',
          type: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'btn',
          type: 'BtnGroup',
          btns: [
            {
              name: '查询',
              type: 'primary',
              htmlType: 'submit',
            },
            {
              name: '重置',
              type: 'default',
              htmlType: 'reset',
            },
          ]
        },
      ]
    ];

    const columns = [
      {
        title: '头像',
        dataIndex: 'head_img',
        key: 'head_img',
        align: 'center',
        render: (head_img) => (
          <span><img src={head_img} alt="avatar"/></span>
        )
      },
      {
        title: '教师姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '教师年龄',
        dataIndex: 'teacher_age',
        key: 'teacher_age',
        align: 'center',
      },
      {
        title: '授课类型',
        dataIndex: 'teach_way',
        key: 'teach_way',
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text, item) => (
          <span>
            <a onClick={() => this.edit(item)}>编辑</a>
          </span>
        )
      },
    ];

    return(

      <div>
        <FormInit layout="horizontal" params={searchParams} callback={this.formCallback}/>
        <Link to="/account/teacher/add">添加教师</Link>
        <TableInit
          onRef={ref => this.tableInit = ref}
          params={{
            api: apiList,
            columns,
            queryParams,
          }}
        />
      </div>

    )
  }

}
