import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CardLayout from "../components/CardLayout";
import Navigation from "../components/Navigation";
import FeedbackFormS from "../components/FeedbackFormS";

const DashboardS = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col sm={3} md={2} className="sidebar">
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col sm={9} md={10} className="main-content">
            <h2>Welcome to the Dashboard</h2>
            <CardLayout toggleFeedbackForm={toggleFeedbackForm} />
            {showFeedbackForm && <FeedbackFormS />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardS;
