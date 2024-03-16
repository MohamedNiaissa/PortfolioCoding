import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous. Je suis <span className="purple">Mohamed Niaissa</span>.
            <br />
            Je suis actuellement en fin de 3eme année à la <span className="purple"> Coding Factory</span>.
            <br />
            Je suis en préparation du diplôme <span className="purple">Bachelor Développeur de solutions numériques sécurisée</span>.
            <br/>
            Je travaille actuellement chez Humelab en tant que <span className="purple">développeur web</span> depuis 2 ans.
            <br/>
            <br />
            Mes autres activitées
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sciences Religieuse
            </li>
            <li className="about-activity">
              <ImPointRight /> Jeux-vidéos
            </li>

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
