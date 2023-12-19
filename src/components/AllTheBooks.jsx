import React, { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import historyBooks from "../data/history.json";
import sciFiBooks from "../data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonComponent from "./ButtonComponent";

class AllTheBooks extends Component {
    state = {
        books: fantasyBooks,
    };

    render() {
        return (
            <Container>
                <Row>
                    <div>
                        <ButtonComponent
                            theme="danger"
                            Btncontent="Fantasy"
                            onClick={() => {
                                this.setState({ books: fantasyBooks });
                            }}
                        />
                        <ButtonComponent
                            theme="info"
                            Btncontent="Horror"
                            onClick={() => {
                                this.setState({ books: horrorBooks });
                            }}
                        />
                        <ButtonComponent
                            theme="success"
                            Btncontent="History"
                            onClick={() => {
                                this.setState({ books: historyBooks });
                            }}
                        />
                        <ButtonComponent
                            theme="primary"
                            Btncontent="Romance"
                            onClick={() => {
                                this.setState({ books: romanceBooks });
                            }}
                        />
                        <ButtonComponent
                            theme="warning"
                            Btncontent="Sci-fi"
                            onClick={() => {
                                this.setState({ books: sciFiBooks });
                            }}
                        />
                    </div>

                    {this.state.books.map((book) => (
                        <Col key={`book-${book.asin}`} xs={12} md={6} lg={4} className="my-2 p-3">
                            <Card className="h-100">
                                <div className="h-100">
                                    {" "}
                                    <Card.Img variant="top" src={book.img} className="img-format" />
                                </div>

                                <Card.Body className="h-auto d-flex flex-column justify-content-center">
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className="fs-3 text-primary">{book.price}$</Card.Text>
                                    <ButtonComponent theme="success" Btncontent="Add To Cart" />
                                    <ButtonComponent theme="danger" Btncontent="Eliminate" />
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
