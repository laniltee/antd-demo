import React, { useState } from 'react'
import { Button, Drawer, Select, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const OrganizationSelector = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      <Tooltip title="search">
        <Button
          onClick={showDrawer}
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
        />
      </Tooltip>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default OrganizationSelector
