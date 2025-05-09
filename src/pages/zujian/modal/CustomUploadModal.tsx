import React, { useState } from 'react';
import { Button, Modal, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './Modal.css'
import type { UploadProps } from 'antd';

const { Dragger } = Upload;

interface CustomModalProps {
  btnText: string;
  modalTitle?: string;
  multiple?: boolean;
  typeList?: string[];
  uploadText?: string;
  acceptType?: string;
}

interface WrapperProps {
  props: CustomModalProps;
}


const App: React.FC<WrapperProps> = ({props: {btnText, modalTitle, multiple=true, typeList, uploadText, acceptType}}) => {
  const props: UploadProps = {
    name: 'file',
    multiple,
    accept: acceptType,
    action:"http://localhost:3001/upload",
    onChange(info) {
      console.log('onChangeinfo: ', info);
      const { status, type } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('onDrope: ', e);
      // console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      {btnText}
      </Button>
      <Modal
        // title=''
        title={modalTitle || null}
        // title="Basic Modal"
        className='customUploadModal'
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
  <Dragger {...props} style={{marginTop: 20}}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    {uploadText ? (
      <>
    <p className="ant-upload-text">{uploadText.split('&&&&')?.[0]}</p>
    <p className="ant-upload-hint">
      {uploadText.split('&&&&')?.[1]}
    </p>
      </>
    ) : (
      <>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
      </>
    )}
  </Dragger>
      </Modal>
    </>
  );
};

export default App;