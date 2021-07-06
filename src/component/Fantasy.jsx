
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import cards from "../Data/fantasy.json"

const Fantasy = () => (
    <Container>
        <Row>          
                    {
                     cards.map(card => (
                    <Col sm={12} md={3} className="d-flex mb-3 " >  
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.img} className="img-thumbnail"/>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                {card.category} 
                                </Card.Text>
                                <Button variant="primary">{card.price}</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        ))
                    }
        </Row>
    </Container>
)
export default Fantasy




/* <div class="row px-3 manual-query"></div> */
//  <div class="col pl-0">
//  <div class="card h-100">
//    <div class="position-relative">
//      <img
//        src="./img/1517966385artwork.jpg"
//        class="card-img-top img-fluid rounded py-3 px-2"
//        alt="..."
//      />

//      <div class="play"></div>
//    </div>

//    <div class="card-body px-2 pt-0">
//      <h5 class="card-title mb-1 text-white">
//        Impaulsive with Logan pau
//      </h5>
//      <p class="card-text text-white-50">Logan Paul</p>
//    </div>
//  </div>
// </div>