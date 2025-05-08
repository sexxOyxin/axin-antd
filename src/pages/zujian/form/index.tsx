import React from 'react';
import CustomForm from './CustomForm';
import '../index.css'

const App: React.FC = () => {
  return (
    <>
    <div className='zujian-description'>
    <h3>表单 · Form</h3>
    <p>封装了 Form 组件</p>
    <p> 其他的配置参考 ：<a href="https://ant.design/components/form-cn/">Antd Form</a></p>
    <br/>
    </div>
    <CustomForm />
    </>
  );
};

export default App;