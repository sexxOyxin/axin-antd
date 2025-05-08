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

const HomePage = () => <div>首页内容</div>;
const ModalPage = () => <div>弹窗组件内容</div>;
const DemoPage = () => <div>组件Demo内容</div>;

const items: MenuProps['items'] = [
  {key: 'shouye', icon: React.createElement(AppstoreOutlined), label: '首页'},
  {key: 'zujian', icon: React.createElement(UserOutlined), label: '组件', children: [
    {key: 'zujian/card', label: '卡片 · Card'},
    {key: 'zujian/modal', label: '弹窗 · Modal'},
  ]},
  {key: 'zjdemo', icon: React.createElement(CloudOutlined), label: '组件demo'}
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
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/shouye" element={<HomePage />} />
              <Route path="/zujian/card" element={<AxinCard />} />
              <Route path="/zujian/modal" element={<ModalPage />} />
              <Route path="/zjdemo" element={<DemoPage />} />
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