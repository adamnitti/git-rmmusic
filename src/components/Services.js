import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import '../App.css';

function Services() {

  return (
    <React.Fragment>

      <div>
        <img className="banner-img" src="../img/services.png"></img>
      </div>

      <Row className="card-columns flex-container2 justify-content-center align-items-top" >
        <Col sm="3">
          <CardTitle tag="h2">Custom Music</CardTitle>
          <CardImg top width="100%" src="../img/studiopic1-resize.jpg" alt="Card image cap" />
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle tag="h5">Crafting custom music, sound design, and soundscape solutions for business, broadcast, and production needs.

</CardTitle>
            <CardTitle tag="h5">FILM - PODCAST - TELEVISION - ADVERTISING - EVENTS - AUDIO BRANDING - THEMES - PRESENTATIONS</CardTitle>
            <CardText tag="h5">Over 25 years of composition and entertainment industry experience, with a long list of artist credits including: Kenny Loggins, Carrie Underwood, London Symphony Orchestra, Michael McDonald, Christopher Cross, Susan Tedeschi, and Grammy-winners Heather Headley, Casting Crowns, and Steven Curtis Chapman.

</CardText>

          </Card>
        </Col>
        <Col sm="3">
          <CardTitle tag="h2">Audio/Production</CardTitle>
          <CardImg top width="100%" src="../img/led-resize.png" alt="Card image cap" />
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle tag="h5">Pre and post production music services for your custom project, including:</CardTitle>
            <CardText tag="h5">
              <ul>
                <li>Mixing</li>
                <li>Mastering</li>
                <li>Audio Editing</li>
                <li>Music Strategy</li>
                <li>Producing/Consulting</li>
                <li>Arranging</li>
                <li>Scoring</li>
                <li>Full-Service Recording Studio</li>
              </ul>
            </CardText>

          </Card>

        </Col>
        <Col sm="3">
          <CardTitle tag="h2">Remote Recording</CardTitle>
          <CardImg top width="100%" src="../img/italystudio-resize.png" alt="Card image cap" />
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle tag="h5">World class audio tracks for your custom project, recorded by some of Nashville's finest and most celebrated session players and singers.</CardTitle>
            <CardTitle tag="h5">Meeting genre-specific needs for your recordings, recorded remotely from our network of studios in Nashville.</CardTitle>
            <CardText tag="h5">Professional audio tracks delivered at a mere fraction of the cost of what you would pay to book a recording studio, audio engineer, and group of session musicians.</CardText>

          </Card>
        </Col>
      </Row>

    </React.Fragment>

  );
}

export default Services;