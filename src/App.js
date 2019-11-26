import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SetlistView } from "./components/setlist-view/SetlistView";
import { BandsView } from "./components/bands-view/BandsView";
import "./App.scss";

export const App = () => {
    return (
        <div className="App">
            <Container>
                <h1>Setlist Creator</h1>
                <Row>
                    <Col md={8}>
                        <SetlistView />
                    </Col>
                    <Col md={4}>
                        <BandsView />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
