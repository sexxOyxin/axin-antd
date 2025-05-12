import React, { useState } from 'react';
import { Col, Row } from 'antd';
import CustomUploadModal from './CustomUploadModal';
import '../index.css'

const App: React.FC = () => {
  const props1 = {
    btnText: '上传excel',
    modalTitle: '标题可修改',
    acceptType: '.xlsx,.xls',
    uploadText: '单击或拖拽文件到此区域上传&&&&控制用户只能选择.xlsx或.xls结尾的文件',
  };
  const props2 = {
    btnText: '上传任意文件',
    acceptType: '',
    uploadText: '不限制上传类型',
  };
  const props3 = {
    btnText: '多文件上传'
  };
  const props4 = {
    btnText: '单文件上传',
    multiple: false,
    uploadText: 'Click or drag file to this area to upload&&&&Support for a single upload. Strictly prohibited from uploading company data or other banned files.',
  };

  return (
    <div className='zujian-description'>
      <h3>弹窗对话框 · Modal</h3>
      <p>封装了 Card 组件，增加了 nsextra 属性，集成了复制到剪切板的功能</p>
      <p> 其他的配置参考 ：<a href="https://ant.design/components/modal-cn/">Antd Modal</a></p>
      <br />

      <Row gutter={32}>
        <Col span={12}>
          <h4>上传不同类别</h4>
          <Row gutter={16}>
            <Col span={6}>
              <CustomUploadModal props={props1} />
            </Col>
            <Col span={6}>
              <CustomUploadModal props={props2} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <h4>上传单个多个</h4>
          <Row gutter={16}>
            <Col span={6}>
              <CustomUploadModal props={props3} />
            </Col>
            <Col span={6}>
              <CustomUploadModal props={props4} />
            </Col>
          </Row>
        </Col>
      </Row>

      <br />
    </div>
  );
};

export default App;