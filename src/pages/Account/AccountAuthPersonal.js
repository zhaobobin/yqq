import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Button, Upload } from 'antd';
import { Toast } from 'antd-mobile';
import { ENV, Storage, Validator, Encrypt } from '@/utils';
import styles from './AccountAuth.less'

import InputText from '@/components/Form/InputText'
import InputMobile from '@/components/Form/InputMobile'
import UploadIdcard from '@/components/Form/UploadIdcard'

const FormItem = Form.Item;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    Toast.info('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    Toast.info('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

@connect(state => ({
  global: state.global
}))
@Form.create()
export default class AccountAuthPersonal extends React.Component {

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

  handleUploadChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  uploadIdcardCallback = (data) => {
    console.log(data)
  }

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

    const { imageUrl } = this.state;
    const { getFieldDecorator, getFieldValue, getFieldsError } = this.props.form;

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传</div>
      </div>
    );

    return(

      <div className={styles.container + " " + styles.form}>

        <div className={styles.head}>
          <h1>申请个人认证</h1>
        </div>

        <div className={styles.body}>

          <Form onSubmit={this.submit} onReset={this.reset}>

            <FormItem label="姓名">
              {getFieldDecorator('name', {
                rules: [
                  { required: true, message: '请输入姓名' },
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

            <FormItem label="身份证号码">
              {getFieldDecorator('idcard', {
                rules: [
                  { required: true, message: '请输入身份证号码' },
                ],
              })(
                <InputText
                  callback={this.addressCallback}
                />
              )}
            </FormItem>

            <FormItem label="法人身份证（人像面）">
              {getFieldDecorator('positive', {
                rules: [
                  { required: true, message: '请上传法人身份证（人像面）' },
                ],
              })(
                <UploadIdcard
                  key="positive"
                  type="1"
                  callback={this.uploadIdcardCallback}
                />
              )}
            </FormItem>

            <FormItem label="上传身份证（国徽面）">
              {getFieldDecorator('positive', {
                rules: [
                  { required: true, message: '请上传法人身份证（国徽面）' },
                ],
              })(
                <UploadIdcard
                  key="positive"
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
