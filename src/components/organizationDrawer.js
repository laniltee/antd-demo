import React, { useState } from 'react'
import { Drawer } from 'antd'
import { useGetUserByIdQuery } from '../api/users'

const OrganizationDrawer = ({ onClose, visible, selectedOrganization }) => {
  const { data, error, isLoading } = useGetUserByIdQuery(selectedOrganization)

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <p>Owner Name: {data?.name}</p>
      <p>Company Name: {data?.company?.name}</p>
      <p>Catch Phrase: {data?.company?.catchPhrase}</p>
      <p>BS: {data?.company?.bs}</p>
    </Drawer>
  )
}

export default OrganizationDrawer
