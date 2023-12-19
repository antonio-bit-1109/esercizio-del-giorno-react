import { Component } from "react";
/* import fantasyBooks from "../data/fantasy.json";
import horrorBook from "../data/horror.json"; */
/* import RomanceBook from "../data/romance.json";
import HistoryBook from "../data/history.json"; */
import sciFiBook from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class AllTheBooks extends Component {
    state = { currentType: null };
    render() {
        return (
            <Container>
                <Row>
                    {sciFiBook.map((book, index) => (
                        <Col key={`book-${book.asin}`} xs={3} className="my-2 p-3">
                            <Card className="h-100">
                                <Card.Img variant="top" src={book.img} className="img-format" />
                                <Card.Body className="h-auto d-flex flex-column justify-content-center">
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
