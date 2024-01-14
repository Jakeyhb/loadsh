import React, { useState } from 'react';
import { Select, Input, Table, Button, Space, Checkbox } from 'antd';
import {
  PlusOutlined,
  CopyOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

interface Load {
  key: string;
  lwh: string;
  weight: string;
  units: string;
}

const initialLoadData: Load[] = [
  { key: '1', lwh: 'L*W*H', weight: 'Weight', units: 'Units' },
];

const LoadComponent: React.FC = () => {
  const [loadData, setLoadData] = useState<Load[]>(initialLoadData);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedLoad, setSelectedLoad] = useState<Load | null>(null);

  const columns = [
    {
      title: 'L*W*H',
      dataIndex: 'lwh',
      render: (text: string, record: Load) => renderEditableCell(text, record, 'lwh'),
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      render: (text: string, record: Load) => renderEditableCell(text, record, 'weight'),
    },
    {
      title: 'Units',
      dataIndex: 'units',
      render: (text: string, record: Load) => renderEditableCell(text, record, 'units'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: string, record: Load) => (
        <Space>
          <CopyOutlined onClick={() => handleCopyLoad(record.key)} />
          <DeleteOutlined onClick={() => handleDeleteLoad(record.key)} />
        </Space>
      ),
    },
  ];

  const renderEditableCell = (text: string, record: Load, field: keyof Load) => (
    <TextArea
      autoSize={{ minRows: 1, maxRows: 2 }}
      value={text}
      onClick={() => handleCellClick(record)}
      readOnly
    />
  );

  const handleCellClick = (record: Load) => {
    setVisible(true);
    setSelectedLoad(record);
  };

  const handleConfirm = () => {
    if (selectedLoad) {
      const updatedData = loadData.map((load) => {
        if (load.key === selectedLoad.key) {
          return selectedLoad;
        }
        return load;
      });
      setLoadData(updatedData);
    }

    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleAddLoad = () => {
    const newData: Load = {
      key: `${loadData.length + 1}`,
      lwh: '',
      weight: '',
      units: '',
    };
    setLoadData([...loadData, newData]);
  };

  const handleCopyLoad = (key: string) => {
    const copiedLoad = loadData.find((load) => load.key === key);
    if (copiedLoad) {
      const newData = [...loadData, { ...copiedLoad, key: `${loadData.length + 1}` }];
      setLoadData(newData);
    }
  };

  const handleDeleteLoad = (key: string) => {
    const newData = loadData.filter((load) => load.key !== key);
    setLoadData(newData);
  };

  const handleChange = (value: string) => {
    const selectedLoad = loadData.find((load) => load.key === value);
    if (selectedLoad) {
      setSelectedLoad(selectedLoad);
    }
  };

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a load"
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {loadData.map((load) => (
          <Option key={load.key} value={load.key}>
            {load.lwh} - {load.weight} - {load.units}
          </Option>
        ))}
      </Select>
      <div style={{ background: '#e6f7ff', padding: '8px', marginBottom: '16px' }}>
        <Table
          dataSource={loadData}
          columns={columns}
          pagination={false}
          bordered
          size="small"
          showHeader={false}
        />
        <div style={{ marginTop: '8px' }}>
          <Button icon={<PlusOutlined />} onClick={handleAddLoad}>
            + Add Load
          </Button>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Space>
          <Button icon={<CheckOutlined />} type="primary" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button icon={<CloseOutlined />} onClick={handleCancel}>
            Cancel
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default LoadComponent;
