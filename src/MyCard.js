import React from 'react'
import { Card, Col } from 'antd'

const MyCard = () => {
  return (
    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card
        title="Card title"
        bordered={false}
        className="rounded-lg shadow-md"
      >
        <div className="text-center">Card content</div>
      </Card>
    </Col>
  )
}

export default MyCard
