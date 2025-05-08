import React from 'react';
import CustomModal from './CustomModal';
import '../index.css'

const App: React.FC = () => {
  return (
    <>
    <div className='zujian-description'>
    <h3>弹窗对话框 · Modal</h3>
    <p>封装了 Card 组件，增加了 nsextra 属性，集成了复制到剪切板的功能</p>
    <p> 其他的配置参考 ：<a href="https://ant.design/components/card-cn/">Antd Card</a></p>
    <br/>
    </div>
    <CustomModal />
    </>
  );
};

export default App;