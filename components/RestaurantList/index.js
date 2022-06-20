import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'

const query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const RestaurantList = () => {
  const { loading, error, data } = useQuery(query)
  console.log(data)

  return (
    <Row>
      <Col xs="6" sm="4">
        {/* <Card style={{ margin: '0 0.5rem 20px 0.5rem' }}> */}
        <Card>
          <CardImg
            src="http://localhost:1337/uploads/restaurant1_3898533423.jpeg"
            top={true}
            style={{ height: 250 }}
          />
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

      <style jsx>
        {`
          a {
            color: white;
          }
          a: link {
            text-decoration: none;
            color: white;
          }
          a:hover {
            color: white;
          }
          .card-columns {
              column-cont: 3;
            }
          }
        `}
      </style>
    </Row>
  )
}

export default RestaurantList
