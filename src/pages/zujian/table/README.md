封装了 Card 组件，增加了 nsextra 属性，集成了复制到剪切板的功能

content: string; // 卡片中的内容 也是默认复制的内容
copyText?: string; // 指定复制的内容
isVisualCopy?: boolean | null; // null为普通card、true显示复制文字、false隐藏复制文字