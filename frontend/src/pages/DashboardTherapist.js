import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import SearchBarT from "../components/SearchBarT";
import CardLayoutT from "../components/CardLayoutT";
import FeedbackForm from "../components/FeedbackForm";


const DashboardT = () => {
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
            <SearchBarT />
            <CardLayoutT toggleFeedbackForm={toggleFeedbackForm} />
            {showFeedbackForm && <FeedbackForm />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardT;