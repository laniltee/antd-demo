import React, { useState } from 'react'
import { Drawer } from 'antd'

const OrganizationDrawer = ({ onClose, visible }) => {
  return (
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
  )
}

export default OrganizationDrawer
