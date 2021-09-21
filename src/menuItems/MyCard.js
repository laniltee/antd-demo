import { useContext } from 'react'
import { Card, Col } from 'antd'
import LocaleContext from '../contexts/localeContext'

const MyCard = () => {
  const locale = useContext(LocaleContext)

  return (
    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card
        title="Card title"
        bordered={false}
        className="rounded-lg shadow-md"
      >
        <div className="text-center">Card content {locale}</div>
      </Card>
    </Col>
  )
}

export default MyCard
