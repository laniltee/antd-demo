import React from 'react'
import { Select } from 'antd'
import { Option } from 'antd/es/mentions'

const OrganizationSelector = () => {
  return (
    <Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  )
}

export default OrganizationSelector
