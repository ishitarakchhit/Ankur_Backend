import React, { useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import CardLayoutE from "../components/CardLayoutE";
import Navigation from "../components/Navigation";
import FeedbackForm from "../components/FeedbackForm";

const DashboardE = () => {
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
            <SearchBar />
            <CardLayoutE toggleFeedbackForm={toggleFeedbackForm} />
            {showFeedbackForm && <FeedbackForm />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardE;