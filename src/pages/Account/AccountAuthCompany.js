import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Button, Checkbox } from 'antd';
import { Toast } from 'antd-mobile';
import { ENV, Storage, Validator, Encrypt } from '@/utils';
import styles from './AccountAuth.less'

import InputText from '@/components/Form/InputText'
import InputMobile from '@/components/Form/InputMobile'

const FormItem = Form.Item;

@connect(state => ({
  global: state.global
}))
@Form.create()
export default class AccountAuthCompany extends React.Component {

  constructor(props){
    super(props);
    this.ajaxFlag = true;
    this.state = {

    }
  }

  // 姓名
  nameCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'name': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'name': value});
    }
  };

  // 手机号
  mobileCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'mobile': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'mobile': value});
    }
  };

  // 地址
  addressCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'address': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'address': value});
    }
  };

  // idcard
  idcardCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'idcard': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'idcard': value});
    }
  };

  // 确定
  submit = (e) => {
    e.preventDefault();

    if(!this.ajaxFlag) return;
    this.ajaxFlag = false;

    this.props.form.validateFields('', (err, values) => {
      if (!err) {
        this.save(values);
      }
      setTimeout(() => { this.ajaxFlag = true }, 500);
    });
  };

  // 提交
  save = (values) => {
    this.props.dispatch({
      type: 'global/login',
      payload: values,
      callback: (res) => {
        if(res.code === '0') {
          this.props.callback();
        }else{
          Toast.info(res.msg, 2);
          // this.props.form.setFields({
          //   [res.error_key]: {
          //     value: '',
          //     errors: [new Error(res.message)]
          //   }
          // });
        }
      }
    });
  };

  reset = () => {
    // this.props.form.resetFields();
    window.history.go(-1);
  }

  render(){

    const { getFieldDecorator, getFieldValue, getFieldsError } = this.props.form;

    return(

      <div className={styles.container + " " + styles.form}>

        <div className={styles.head}>
          <h1>申请个人认证</h1>
        </div>

        <div className={styles.body}>

          <Form onSubmit={this.submit} onReset={this.reset}>

            <FormItem label="企业名称">
              {getFieldDecorator('name', {
                rules: [
                  { required: true, message: '请输入企业名称' },
                ],
              })(
                <InputText
                  callback={this.nameCallback}
                />
              )}
            </FormItem>

            <FormItem label="企业联系人">
              {getFieldDecorator('name', {
                rules: [
                  { required: true, message: '请输入企业联系人' },
                ],
              })(
                <InputText
                  callback={this.nameCallback}
                />
              )}
            </FormItem>

            <FormItem label="联系电话">
              {getFieldDecorator('mobile', {
                rules: [
                  { required: true, message: '请输入手机号' },
                ],
              })(
                <InputMobile
                  callback={this.mobileCallback}
                />
              )}
            </FormItem>

            <FormItem label="联系地址">
              {getFieldDecorator('address', {
                rules: [
                  { required: true, message: '请输入地址' },
                ],
              })(
                <InputText
                  callback={this.addressCallback}
                />
              )}
            </FormItem>

            <FormItem label="纳税识别号">
              {getFieldDecorator('idcard', {
                rules: [
                  { required: true, message: '请输入纳税识别号' },
                ],
              })(
                <InputText
                  callback={this.addressCallback}
                />
              )}
            </FormItem>

            <div className={styles.btns}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className={styles.btn}
              >
                提交
              </Button>

              <Button
                size="large"
                htmlType="reset"
                className={styles.btn}
              >
                取消
              </Button>
            </div>


          </Form>

        </div>

      </div>

    )
  }

}
