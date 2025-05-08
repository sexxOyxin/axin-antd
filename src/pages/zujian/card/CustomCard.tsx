import React, { useState } from 'react';
import { Card, Button, Tooltip, Typography, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import './Card.css';


const { Paragraph } = Typography;

interface CustomCardProps {
  title: string;
  content: string; // 默认复制的内容
  copyText?: string; // 指定复制的内容
  isVisualCopy?: boolean | null; // null为普通card、true显示复制文字、false隐藏复制文字
  style?: {},
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content, isVisualCopy = true, style, copyText = null }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText || content);
      setCopied(true);
      message.success('复制成功');
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      message.error('复制失败');
    }
  };

  return (
    <Card
      className='custom-head-title'
      title={title}
      style={style}
      extra={isVisualCopy === null ? null :
      (isVisualCopy ? (<Paragraph copyable className='copyPara'>{copyText || content}</Paragraph>) :
      <Tooltip title={copied ? '已复制' : '复制'}>
        <Button type='text' icon={<CopyOutlined />} onClick={handleCopy}></Button>
      </Tooltip>)}
      >
      <p className='customCard-content'>{content}</p>
    </Card>
  );
};

export default CustomCard;