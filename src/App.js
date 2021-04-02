import React from 'react';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.scss';

const onButtonClick = () => {
  alert("Hello There !!!");
}

const App = () => (
    <div className="App">
      <Button type="primary" onClick={onButtonClick}>Button</Button>
      <Space>
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </div>
);

export default App;
