/**
 * 用户登录 - 模块
 */
import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Icon, Button, Checkbox } from 'antd';
import { Toast } from 'antd-mobile';
import { ENV, Storage, Validator, Encrypt } from '@/utils';
import styles from './UserSign.less';

import InputMobile from '@/components/Form/InputMobile'
import InputPassword from '@/components/Form/InputPassword'
import InputSmscode from '@/components/Form/InputSmscode'

const FormItem = Form.Item;
const keys1 = ['tel', 'pwd'];
const keys2 = ['tel', 'code'];

@connect(state => ({
  global: state.global
}))
@Form.create()
export default class UserLogin extends React.Component {

  constructor(props){
    super(props);
    this.ajaxFlag = true;
    this.state = {
      loginType: 'psd',                               //登录方式

      remember: Storage.get(ENV.storage.remenber) !== null ? Storage.get(ENV.storage.remenber) : true,

      errorCount: 0,                                  //表单输入错误次数
    }
  }

  componentDidMount(){

  }

  //重置表单
  resetForm = () => {
    this.props.form.resetFields();
  };

  // 切换登录方式
  changeLoginType = (loginType) => {
    this.resetForm();
    this.setState({
      loginType
    })
  };

  //手机号
  mobileCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'tel': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'tel': value});
    }
  };

  //密码
  passwordCallback = (value, err) => {
    if(err){
      this.props.form.setFields({
        'pwd': {
          value: value,
          errors: [new Error(err)]
        }
      });
    }else{
      this.props.form.setFieldsValue({'pwd': value});
      // this.props.form.validateFields(['pwd'], (err, values) => {});
    }
  };

  //短信验证码回调
  smscodeCallback = (value, err) => {
    //清空错误提示
    if(err === 'telError'){
      this.props.form.setFields({
        'tel': {
          value: '',
          errors: [new Error('请输入手机号')]
        }
      });
      this.setState({smscodeSended: true});
    }
    else if(err === 'clearError'){
      this.props.form.setFields({
        'code': {
          value: '',
          errors: ''
        }
      });
      this.setState({smscodeSended: true});
    }
    else if(err === 'smscodeError'){
      this.props.form.setFields({
        'code': {
          value: '',
          errors: [new Error(!value ? '请输入短信验证码' : '短信验证码格式有误')]
        }
      });
    }
    else{
      this.props.form.setFieldsValue({'smscode': value});
      // this.props.form.validateFields(['smscode'], (err, values) => {});
    }
  };

  //记住账号
  rememberChange = () => {
    let rememberState = !this.state.remember;
    Storage.set(ENV.storage.remenber, rememberState);
    this.setState({remember: rememberState});
  };

  //确定
  submit = (e) => {
    e.preventDefault();

    if(!this.ajaxFlag) return;
    this.ajaxFlag = false;

    let { loginType } = this.state;
    let keys = loginType === 'psd' ? keys1 : keys2;

    this.props.form.validateFields(keys, (err, values) => {

      if (!err) {
        if(values.remember){
          Storage.set(ENV.storage.lastTel, values.tel)
        }else{
          Storage.set(ENV.storageLastTel, '')
        }
        // if(values.pwd) values.pwd = Encrypt(values.tel, values.pwd);
        // if(values.smscode) values.smscode = Encrypt(values.tel, values.smscode);
        values.loginType = loginType;
        this.login(values);
      }
      setTimeout(() => { this.ajaxFlag = true }, 500);
    });
  };

  //登录
  login = (values) => {
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

  setInputError = (status, msg) => {
    let key;
    switch(status){
      case 10001: key = 'tel'; break;
      case 10002: key = 'pwd'; break;
      case 10003: key = 'tel'; break;
      case 10004: key = 'smscode'; break;
      default: break;
    }
    this.props.form.setFields({
      [key]: {
        value: '',
        errors: [new Error(msg)]
      }
    });
  };

  toRegister = () => {

    let {showType} = this.props;
    if(showType){
      this.props.dispatch({
        type: 'global/changeSignModal',
        payload: {
          signModalVisible: true,
          signTabKey: '2',
        }
      });
    }else{
      this.props.dispatch(routerRedux.push('/user/register'));
    }

  };

  toPsdReset = () => {

    let {showType} = this.props;
    if(showType){
      this.props.dispatch({
        type: 'global/changeSignModal',
        payload: {
          signModalVisible: false,
          signTabKey: '1',
        }
      });
    }

    this.props.dispatch(routerRedux.push('/user/reset'));
  };

  render(){

    const { loginType } = this.state;
    const { lastTel } = this.props.global;
    const { getFieldDecorator, getFieldValue, getFieldsError } = this.props.form;

    return(
      <div className={styles.sign}>

        <div className={styles.form}>

          <h4>登录</h4>

          {/*<p className={styles.loginType}>*/}
            {/*<a>*/}
              {/*{*/}
                {/*loginType === 'psd' ?*/}
                  {/*<span onClick={() => this.changeLoginType('sms')}>短信快速登录</span>*/}
                  {/*:*/}
                  {/*<span onClick={() => this.changeLoginType('psd')}>账号密码登录</span>*/}
              {/*}*/}
            {/*</a>*/}
          {/*</p>*/}

          <Form onSubmit={this.submit}>

            <FormItem>
              {getFieldDecorator('tel', {
                initialValue: lastTel,
                rules: [
                  { required: true, message: '请输入手机号' },
                ],
              })(
                <InputMobile
                  autoFocus={true}
                  default={lastTel}
                  prefix={<Icon type="user" style={{ color: '#FFC010' }} />}
                  callback={this.mobileCallback}
                />
              )}
            </FormItem>

            {
              loginType === 'psd' ?
                <FormItem>
                  {getFieldDecorator('pwd', {
                    validateFirst: true,
                    rules: [
                      { required: true, message: '请输入密码' },
                    ],
                  })(
                    <InputPassword
                      hidePsdLevel={true}
                      prefix={<Icon type="lock" style={{ color: '#FFC010' }} />}
                      callback={this.passwordCallback}
                    />
                  )}
                </FormItem>
                :
                <FormItem>
                  {getFieldDecorator('smscode', {
                    rules: [
                      { required: true, message: '请输入验证码' },
                    ]
                  })(
                    <InputSmscode
                      isrepeat="3"
                      tel={Validator.hasErrors(getFieldsError(['tel'])) ? '' : getFieldValue('tel')}
                      callback={this.smscodeCallback}
                    />
                  )}
                </FormItem>
            }

            <p className={styles.forgotPsd}>
              <a onClick={this.toPsdReset}>忘记密码</a>
            </p>

            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.btn}
              style={{marginBottom: '20px'}}
              disabled={
                Validator.hasErrors(getFieldsError()) ||
                !getFieldValue('tel') ||
                !getFieldValue(loginType === 'psd' ? 'pwd' : 'smscode')
              }
            >
              登录
            </Button>


          </Form>

        </div>

        <div className={styles.foot}>
          <span>没有账号？</span><a onClick={this.toRegister}>立即注册</a>
        </div>

      </div>
    )
  }

}
