import React from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Icon, Button, Upload } from 'antd';
import { Toast } from 'antd-mobile';
import { ENV, Storage, Validator, Encrypt } from '@/utils';
import styles from './AccountAuth.less'

import InputText from '@/components/Form/InputText'
import InputMobile from '@/components/Form/InputMobile'
import UploadIdcard from '@/components/Form/UploadIdcard'

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
      idcard_position: '', // 身份证人像面
      idcard_back: '', // 身份证国徽面
    }
  }

  // 企业名称
  companyCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'company_name': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'company_name': value});
    }
  };

  // 姓名
  nameCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'real_name': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'real_name': value});
    }
  };

  // 手机号
  mobileCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'contact': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'contact': value});
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

    this.props.form.validateFields(['company_name', 'real_name', 'contact', 'address', 'idcard'], (err, values) => {
      if (!err) {
        const { uid } = this.props.global.currentUser;
        values.uid = uid;
        this.save(values);
      }
      setTimeout(() => { this.ajaxFlag = true }, 500);
    });
  };

  // 提交
  save = (values) => {
    this.props.dispatch({
      type: 'global/request',
      url: '/user/enterprise',
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

    const { idcard_position, idcard_back } = this.state;
    const { getFieldDecorator, getFieldValue, getFieldsError } = this.props.form;

    return(

      <div className={styles.container + " " + styles.form}>

        <div className={styles.head}>
          <h1>申请个人认证</h1>
        </div>

        <div className={styles.body}>

          <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
              <Form onSubmit={this.submit} onReset={this.reset}>

                <FormItem label="企业名称">
                  {getFieldDecorator('company_name', {
                    rules: [
                      { required: true, message: '请输入企业名称' },
                    ],
                  })(
                    <InputText
                      callback={this.companyCallback}
                    />
                  )}
                </FormItem>

                <FormItem label="企业联系人">
                  {getFieldDecorator('real_name', {
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
                  {getFieldDecorator('contact', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请输入手机号' },
                      { pattern: /^1[0-9]{10}$/, message: '请输入正确手机号' },
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
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请输入纳税识别号' },
                    ],
                  })(
                    <InputText
                      callback={this.addressCallback}
                    />
                  )}
                </FormItem>

                <FormItem label="法人身份证（人像面）" style={{ marginBottom: '20px' }}>
                  {getFieldDecorator('idcard_position', {
                    rules: [
                      { required: true, message: '请上传法人身份证（人像面）' },
                    ],
                  })(
                    <UploadIdcard
                      field="idcard_position"
                      type="1"
                      callback={this.uploadIdcardCallback}
                    />
                  )}
                </FormItem>

                <FormItem label="上传身份证（国徽面）">
                  {getFieldDecorator('idcard_back', {
                    rules: [
                      { required: true, message: '请上传法人身份证（国徽面）' },
                    ],
                  })(
                    <UploadIdcard
                      field="idcard_back"
                      type="2"
                      callback={this.uploadIdcardCallback}
                    />
                  )}
                </FormItem>

                <div className={styles.btns}>
                  <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className={styles.btn}
                    disabled={
                      Validator.hasErrors(getFieldsError()) ||
                      !getFieldValue('company_name') ||
                      !getFieldValue('real_name') ||
                      !getFieldValue('contact') ||
                      !getFieldValue('address') ||
                      !getFieldValue('idcard') ||
                      !idcard_position ||
                      !idcard_back
                    }
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
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}/>
          </Row>

        </div>

      </div>

    )
  }

}
