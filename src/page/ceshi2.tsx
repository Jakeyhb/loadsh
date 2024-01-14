import React from 'react';
import { Row, Col, Divider, Table, Tag } from 'antd';
// import 'antd/dist/antd.css';

interface BasicInfo {
  label: string;
  value: string;
}

interface PackageInfo {
  length: string;
  width: string;
  height: string;
  weight: string;
  quality: string;
}

interface Props {
  basicInfo: BasicInfo[];
  looseCargo: {
    title: string;
    remainingQuotes: number;
    quotedCount: number;
  };
  goodsInfo: BasicInfo[];
  packageInfo: PackageInfo[];
  otherRequirements: string[];
  attachments: string[];
}

const RFQDetailsComponent: React.FC<Props> = ({ basicInfo, looseCargo, goodsInfo, packageInfo, otherRequirements, attachments }) => {
  const basicInfoContent = (
    <Row gutter={[16, 16]}>
      {basicInfo.map((info, index) => (
        <Col span={12} key={index}>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{info.label}</div>
            <div>{info.value}</div>
          </div>
        </Col>
      ))}
    </Row>
  );

  const goodsInfoContent = (
    <div>
      <Divider />
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{looseCargo.title}
      剩余报价数：<Tag color="green">{looseCargo.remainingQuotes}</Tag>
        已报价数：<Tag color="blue">{looseCargo.quotedCount}</Tag></div>
      
      {basicInfoContent}
    </div>
  );

  const packageColumns = [
    {
      title: '长度',
      dataIndex: 'length',
      key: 'length',
    },
    {
      title: '宽度',
      dataIndex: 'width',
      key: 'width',
    },
    {
      title: '高度',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: '重量',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: '质量',
      dataIndex: 'quality',
      key: 'quality',
    },
  ];

  const packageInfoContent = (
    <div>
      <Divider />
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>包装信息</div>
      <Table dataSource={packageInfo} columns={packageColumns} pagination={false} />
    </div>
  );

  const otherRequirementsContent = (
    <div>
      <Divider />
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>其他要求</div>
      <ul>
        {otherRequirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
    </div>
  );

  const attachmentsContent = (
    <div>
      <Divider />
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>附件</div>
      <div style={{ display: 'flex' }}>
        {attachments.map((attachment, index) => (
          <div key={index} style={{ marginRight: '10px' }}>
            <Tag color="blue">{attachment}</Tag>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>RFQ 详情</div>
      {basicInfoContent}
      {goodsInfoContent}
      {packageInfoContent}
      {otherRequirementsContent}
      {attachmentsContent}
    </div>
  );
};

export default RFQDetailsComponent;
