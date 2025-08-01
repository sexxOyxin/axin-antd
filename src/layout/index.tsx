import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CloudOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import './index.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import AxinCard from '@/pages/zujian/card';
import AxinModal from '@/pages/zujian/modal'
import AxinForm from '@/pages/zujian/form'
import AxinTable from '@/pages/zujian/table'
import StartPage from '@/pages/shouye'
import BigUpload from '@/pages/file/bigupload'

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const DemoPage = () => <div>组件Demo内容</div>;

const items: MenuProps['items'] = [
  {key: 'shouye', icon: React.createElement(AppstoreOutlined), label: '首页'},
  {key: 'zujian', icon: React.createElement(UserOutlined), label: '组件', children: [
    {key: 'zujian/card', label: '卡片 · Card'},
    {key: 'zujian/modal', label: '弹窗 · Modal'},
    {key: 'zujian/form', label: '表单 · Form'},
    {key: 'zujian/table', label: '表格 · Table'},
  ]},
  {key: 'zjdemo', icon: React.createElement(CloudOutlined), label: '组件demo'},
  {key: 'file', icon: React.createElement(CloudOutlined), label: '文件处理', children: [
    {key: 'file/bigupload', label: '大文件上传'},
    {key: 'file/export', label: '表格导出'},
  ]},
  {key: 'optimization', icon: React.createElement(CloudOutlined), label: '性能优化', children: [
    {key: 'optimization/debounce', label: '防抖'},
    {key: 'optimization/virtual', label: '虚拟列表'},
    {key: 'optimization/flex', label: 'amfe-flexible'},
    {key: 'optimization/bridge', label: 'JS Bridge'},
  ]},
];

const App: React.FC = () => {
  const [collpased, setCollpased] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle} collapsible collapsed={collpased} onCollapse={(value) => setCollpased(value)}>
        <div className="demo-logo">Axin</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={handleMenuClick}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/shouye" element={<StartPage />} />
              <Route path="/zujian/card" element={<AxinCard />} />
              <Route path="/zujian/modal" element={<AxinModal />} />
              <Route path="/zujian/form" element={<AxinForm />} />
              <Route path="/zujian/table" element={<AxinTable />} />
              <Route path="/zjdemo" element={<DemoPage />} />
              <Route path="/file/bigupload" element={<BigUpload />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          axin-antd ©{new Date().getFullYear()} Created by axin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;