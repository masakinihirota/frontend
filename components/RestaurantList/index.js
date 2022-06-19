import Link from 'next/link'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'

const RestaurantList = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImg src="" />
          <CardBody>
            <CardTitle>Italian restaurant</CardTitle>
            <CardTitle>イタリアンのレストランです。</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurants?id=62ac5bb300e72e53f0df1258"
              as="/restaurants/62ac5bb300e72e53f0df1258"
            >
              <a className="btn btn-primary">もっと見る</a>
              {/* <a>もっと見る</a> */}
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default RestaurantList
