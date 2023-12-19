import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class AllTheBooks extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {fantasyBooks.map((book, index) => (
                        <Col xs={3} className="my-2 p-3">
                            <Card className="h-100">
                                <Card.Img variant="top" src={book.img} className="img-format" />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className="fs-3 text-primary">{book.price}$</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default AllTheBooks;
