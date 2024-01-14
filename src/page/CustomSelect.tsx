import React, { useState, useRef } from 'react';
import { Select, Modal, Button } from 'antd';

interface Option {
  label: string;
  value: string;
}

const CustomSelect: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);  // 使用div的ref

  const options: Option[] = [
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' },
    { label: '选项3', value: '3' },
    { label: '选项4', value: '4' },
  ];

  const handleSelectClick = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = (value: string) => {
    setSelectedValue(value);
    setIsModalVisible(false);
  };

  const getModalStyle = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      return {
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: '50%',
      };
    }
  };

  return (
    <div ref={wrapperRef}> {/* 包裹Select的div */}
      <Select
        onClick={handleSelectClick}
        value={selectedValue}
        style={{ width: '50%' }}
      >
        {/* ... */}
      </Select>
      <Modal
        title="请选择"
        visible={isModalVisible}
        footer={null}
        style={getModalStyle()}
        bodyStyle={{ maxHeight: '300px', overflowY: 'auto' }}
      >
        {/* 弹出框内容 */}
        {options.map(option => (
          <div key={option.value}>
            <Button onClick={() => handleConfirm(option.value)}>{option.label}</Button>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default CustomSelect;
