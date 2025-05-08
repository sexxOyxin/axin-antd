import React from 'react';
import CustomCard from './CustomCard';
import { Col, Row } from 'antd';

const App: React.FC = () => {
  const content1 = `
  宽300px
  默认card
  `;
  const content2 = `
  宽300px
  复制当前的card内容
  `;
  const content3 = `
  指定复制内容
  复制后 粘贴试试吧
  `;
  const content4 = `
  默认宽高
  显式复制文字
  显示当前内容
  `;
  const content5 = `
  默认宽高
  显式复制文字
  `;
  return (
    <>
    <div style={{textAlign: 'left', marginTop: -18}}>
    <h3>卡片 · Card</h3>
    <p>封装了 Card 组件，增加了 nsextra 属性，集成了复制到剪切板的功能</p>
    <p> 其他的配置参考 ：<a href="https://ant.design/components/card-cn/">Antd Card</a></p>
    <br/>
    </div>
    <Row>
      <Col span={8}>
    <CustomCard
    title='normal-card'
    content={content1}
    isVisualCopy={null}
    style={{ width: 300 }}
    />
      </Col>
      <Col span={8}>
    <CustomCard
    title='copy-card'
    content={content2}
    isVisualCopy={false}
    style={{ width: 300 }}
    />
      </Col>
      <Col span={8}>
    <CustomCard
    title='copy-card'
    content={content3}
    copyText='哈哈哈复制成功啦'
    isVisualCopy={false}
    style={{ width: 300 }}
    />
      </Col>
    </Row>
    <br/>
    <br/>
    <CustomCard
    title='normal - card'
    content={content4}
    isVisualCopy={true} />
    <br/>
    <br/>
    <CustomCard
    title='normal - card'
    content={content5}
    copyText='复制的是这里的文字'
    isVisualCopy={true} />
    </>
  );
};

export default App;