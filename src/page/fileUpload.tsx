import React, { useState } from 'react';
import { Upload, Button, Message, Grid } from '@alifd/next';
import { UploadOutlined } from '@ant-design/icons';

const { Row, Col } = Grid;

const FileUpload = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file, index) => {
    const newFileList = [...fileList];
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const handleUpload = () => {
    // Simulate an API call for file upload
    // Replace this with your actual API call
    Message.success('File uploaded successfully!');
  };

  return (
    <div>
      <Row>
        <Col>
          <Upload
            listType="text"
            action="//jsonplaceholder.typicode.com/posts/"
            beforeUpload={() => false}
            onChange={handleChange}
          >
            <Button icons={<UploadOutlined />}>Select File</Button>
          </Upload>
        </Col>
      </Row>
      {fileList.length > 0 && (
        <div>
          <Row gutter={8}>
            {fileList.map((file, index) => (
              <Col key={index} style={{ marginTop: 8 }}>
                <span>{file.name}</span>
                <Button
                  text
                  type="secondary"
                  onClick={() => handleRemove(file, index)}
                >
                  <UploadOutlined />
                </Button>
              </Col>
            ))}
          </Row>
          <Button type="primary" onClick={handleUpload} style={{ marginTop: 16 }}>
            Start Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
