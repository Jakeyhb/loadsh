import React from 'react';
import RFQDetailsComponent from './ceshi2';  // 假设组件文件放在同一目录下

const Demo: React.FC = () => {
  // 模拟数据
  const basicInfo = [
    { label: '公司名称', value: 'ABC 公司' },
    { label: '联系人', value: '张三' },
    // 其他基本信息...
  ];

  const looseCargo = {
    title: 'looseCargo',
    remainingQuotes: 5,
    quotedCount: 3,
  };

  const goodsInfo = [
    { label: '品名', value: '货物1' },
    { label: '期望运输时间', value: '2023-01-01' },
    // 其他货物信息...
  ];

  const packageInfo = [
    { length: '10m', width: '5m', height: '3m', weight: '500kg', quality: 'High' },
    // 其他包装信息...
  ];

  const otherRequirements = ['要求快速交付', '需要特殊处理'];

  const attachments = ['附件1.pdf', '附件2.docx'];

  return (
    <div>
      <RFQDetailsComponent
        basicInfo={basicInfo}
        looseCargo={looseCargo}
        goodsInfo={goodsInfo}
        packageInfo={packageInfo}
        otherRequirements={otherRequirements}
        attachments={attachments}
      />
    </div>
  );
};

export default Demo;
