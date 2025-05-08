import React from 'react';
import CustomTable from './CustomTable';
import '../index.css'

const App: React.FC = () => {
  return (
    <>
    <div className='zujian-description'>
    <h3>表格 · Table</h3>
    <p>封装了 Table 组件</p>
    <p> 其他的配置参考 ：<a href="https://ant.design/components/table-cn/">Antd Table</a></p>
    <br/>
    </div>
    <CustomTable />
    </>
  );
};

export default App;