import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartBar, faBook } from "@fortawesome/free-solid-svg-icons";

const CardLayoutE = ({ toggleFeedbackForm }) => {
  return (
    <div>
      <Row className="card-container">
        {/* Feedback by Educator */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faUsers} size="3x" />
              <Card.Title>Feedback Form</Card.Title>
              <Card.Text>Submit student feedback weekly</Card.Text>
              <Card.Link onClick={toggleFeedbackForm}>Submit Feedback</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Report */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faChartBar} size="3x" />
              <Card.Title>Report</Card.Title>
              <Card.Text>View student reports</Card.Text>
              {/* Add onClick handler to redirect to report page */}
              <Card.Link href="/report">View Reports</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        {/* Academic Results */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faBook} size="3x" />
              <Card.Title>Enter Academics Result</Card.Title>
              <Card.Text>Add student's academic results</Card.Text>
              <Card.Link href="/academicentry">Enter Results</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardLayoutE;
