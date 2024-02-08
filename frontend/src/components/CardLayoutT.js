import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPhone, faUsers, faChartBar, faGamepad, faBook } from "@fortawesome/free-solid-svg-icons";

const CardLayoutT = () => {
  return (
    <div>
          <Row className="card-container">
              {/* Chat */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faComment} size="3x" />
              <Card.Title>Chat</Card.Title>
              <Card.Text>Start a chat session</Card.Text>
              {/* Add onClick handler to redirect to chat page */}
              <Card.Link href="/chat">Start Chat</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Call/Video */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faPhone} size="3x" />
              <Card.Title>Call/Video</Card.Title>
              <Card.Text>Initiate a call or video session</Card.Text>
              {/* Add onClick handler to redirect to call/video page */}
              <Card.Link href="/videocall">Initiate Call</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Feedback by Therapist */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <Card.Title>Feedback Form</Card.Title>
              <Card.Text>Submit student feedback weekly</Card.Text>
              {/* Add onClick handler to redirect to feedback page */}
              <Card.Link href="/feedback">Submit Feedback</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardLayoutT;
