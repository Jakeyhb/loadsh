import React from 'react';
import { Table, Row, Col } from 'antd';
// import 'antd/dist/antd.css';

interface BasicInfo {
  label: string;
  value: string;
}

interface CostItem {
  itemName: string;
  chargingUnit: string;
  priceUnit: string;
  price: number;
  singleCostTotal: number;
}

interface Props {
  basicInfo: BasicInfo[];
  costItems: CostItem[];
  totalCost: number;
  otherInfo: string;
}

const QuotationComponent: React.FC<Props> = ({ basicInfo, costItems, totalCost, otherInfo }) => {
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

  const costColumns = [
    {
      title: '费用项',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: '计费单位',
      dataIndex: 'chargingUnit',
      key: 'chargingUnit',
    },
    {
      title: '价格单位',
      dataIndex: 'priceUnit',
      key: 'priceUnit',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '单费用总价',
      dataIndex: 'singleCostTotal',
      key: 'singleCostTotal',
    },
  ];

  const otherInfoContent = (
    <div style={{ marginTop: '20px' }}>
      <div style={{ fontWeight: 'bold' }}>其他信息：</div>
      <div>{otherInfo}</div>
    </div>
  );

  return (
    <div>
      <div style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>报价信息</div>
      <div style={{ marginBottom: '20px' }}>{basicInfoContent}</div>
      {costItems.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <Table dataSource={costItems} columns={costColumns} pagination={false} />
          <div style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '10px' }}>总价: {totalCost}</div>
        </div>
      )}
      {otherInfoContent}
    </div>
  );
};

export default QuotationComponent;
