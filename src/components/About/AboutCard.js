import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akmal Muhamad </span>
            from <span className="purple"> Ciamis, Indonesia.</span>
            <br /> I am a student who just graduated from SMKN 1 Ciamis
            <br />
            I also had an internship for 6 months at BBPMPPV BMTI
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Try New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "money is not everything, but everything needs money"{" "}
          </p>
          <footer className="blockquote-footer">Akmal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
