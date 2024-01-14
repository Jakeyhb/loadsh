import React from 'react';
import { Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  originDestination: string;
  detailedRequirement: string;
  status: string;
  quotationNo: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Origin/Destination',
    dataIndex: 'originDestination',
    key: 'originDestination',
  },
  {
    title: 'Detailed requirement',
    dataIndex: 'detailedRequirement',
    key: 'detailedRequirement',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        <Tag color={status === 'Approved' ? 'green' : 'volcano'}>
          {status}
        </Tag>
      </>
    ),
  },
  {
    title: 'Quotation no.',
    dataIndex: 'quotationNo',
    key: 'quotationNo',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Button type="link">View RFQ details</Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    originDestination: 'Loose cargo\nRFQ ID: 1028779179\nCreate time: Jun 26, 2023 09:53\nTotal: 3cm, 3kg, 40 boxes\n\nShanghai\nMccomb-Mississippi',
    detailedRequirement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit am...',
    status: 'Approved',
    quotationNo: '10 Quotes received\n5 new quotations',
  },
  // ...更多数据项
];

const CustomTable: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;
