/**
 *	上传身份证
 *	type: 1：正面，2：反面
 *  callback: 父组件处理上传后的url
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Upload, Modal } from 'antd';
import { Toast } from 'antd-mobile';
import { file2base64 } from '@/utils/utils'
import styles from './UploadIdcard.less'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

@connect(state => ({
  global: state.global,
  oss: state.oss
}))
export default class UploadIdcard extends React.Component {

  constructor(props){
    super(props);
    this.ajaxFlag = true;
    this.state = {
      loading: false,
      type: props.type,
      imgUrl: '',
      modalVisible: false
    };
  }

  componentDidMount(){

  }

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  //上传限制，文件类型只能是jpg、png，文件大小不能超过2mb.
  beforeUpload = (file) => {

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      Toast.info('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Toast.info('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;

  };

  // 上传
  handleUpload = ({ file }) => {

    if(!this.ajaxFlag) return;
    this.ajaxFlag = false;

    this.setState({ loading: true, url: '' });

    file2base64(file, data => {
      this.upload(data.url)
    });
    setInterval(() => { this.ajaxFlag = true }, 500);
  };

  upload = (base64) => {
    const { uid } = this.props.global.currentUser;
    const { field, type, callback } = this.props;

    this.props.dispatch({
      type: 'global/request',
      url: '/user/identity',
      payload: {
        uid,
        type,
        image: base64
      },
      callback: (res) => {
        if(res.code === '0') {
          callback({ field, data: res.data });                   // 给父组件传值
          this.setState({
            loading: true,
            url: res.data,
            imgUrl: base64,
          });
        }
      }
    });
  }

  render(){

    const { loading, type, imgUrl, modalVisible } = this.state;

    const idcardImg = type === '1' ?
      require('@/assets/account/idcard02.jpeg')
      :
      require('@/assets/account/idcard02.jpeg')

    return (
      <Row>
        <Col span={10}>
          <Upload
            accept=".jpg,.png"
            listType="picture-card"
            className={styles.thumb}
            showUploadList={false}
            beforeUpload={this.beforeUpload}
            customRequest={this.handleUpload}
          >
            {
              imgUrl ?
                <img src={imgUrl} width="auto" height="102px" />
                :
                <div>
                  <Icon type={loading ? 'loading' : 'plus'} />
                  <div className="ant-upload-text">上传</div>
                </div>
            }
          </Upload>
        </Col>
        <Col span={10}>
          <p className={styles.example} onClick={this.showModal}>
            <img src={idcardImg} alt="example"/>
            <span>示例图</span>
          </p>
          <Modal
            title="身份证示例"
            visible={modalVisible}
            centered={true}
            footer={null}
            onCancel={this.hideModal}
          >
            <img src={idcardImg} width="100%" height="auto" alt="example"/>
          </Modal>
        </Col>
      </Row>


    )

  }

}
