import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Battle from "../../Assets/Projects/Battle.png";
import CDL from "../../Assets/Projects/CDL.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import JavaFx from "../../Assets/Projects/JavaFx.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import SpaceInvaders from "../../Assets/Projects/SpaceInvaders.png";
import theatromatic from "../../Assets/Projects/theatromatic.png";
import weathr from "../../Assets/Projects/weather.png";
import OR from "../../Assets/Projects/ObjectRecognition.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certains de mes <strong className="purple"> projets </strong>
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              isGithub={true}
              title="Pokemon"
              description="Vous êtes un chasseur de Pokémon ayant la possibilité de capturer des Pokémon à travers un quiz (incluant cris, taille, poids, type). Vous pouvez également retrouver vos Pokémon capturés dans la section Pokédex."
              ghLink="https://github.com/MohamedNiaissa/PokeApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weathr}
              isBlog={false}
              isGithub={true}
              title="Weather"
              description="Cette application vous permet de regarder la météo ainsi que les mesures astronomiques actuel provenant de plusieurs ville dans le monde. Vous avez également à votre disposition la liste des villes consultées. "
              ghLink="https://github.com/MohamedNiaissa/weathr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theatromatic}
              isBlog={false}
              isGithub={true}
              title="Theatromatic"
              description="Theatromatic est une application de génération de pièce de théâtre. Votre pièce de théâtre se base sur votre scénario et les personnages que vous avez crée."
              ghLink="https://github.com/LeoJeanjean/Theatromatic"
            />
          </Col>
          </Row>
          <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OR}
              isBlog={false}
              isGithub={false}
              title="Reconnaisseur d'objet"
              description="Le but de cette application est de reconnaitre les objets pris en photo. Le but de ce projet est de surtout apprendre à améliorer l'architecture de notre code et de nos fichiers. "
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpaceInvaders}
              isBlog={false}
              isGithub={true}
              title="SpaceInvaders et Memory Cards"
              description="Cette application regroupe les deux jeux populaires: Space Invaders et le Memory Game. Le temps pris pour chaque partie de Memory est visible et classé."
              ghLink="https://github.com/MohamedNiaissa/ProjetJsAvancee"
              demoLink="https://mohamedniaissa.github.io/ProjetJsAvancee/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CDL}
              isBlog={false}
              isGithub={true}
              title="Chiffres et des lettres"
              description="Il s'agit du jeu classique des chiffres et des lettres. Vous pouvez jouez à deux ou contre la machine."
              ghLink="https://github.com/MohamedNiaissa/chiffrelettres-dcedl-david-mohamed-angel-kevin"
            />
          </Col>
          </Row>
          <Row>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JavaFx}
              isBlog={false}
              isGithub={true}
              title="Multi-Applications"
              description="Plusieurs applications sont regroupé dans ce projet: gestionnaire de librairie; gestionnaire d'une armée; calculateur IMC; convertisseur de decimal vers hexadecimal, binaire, romain"
              ghLink="https://github.com/MohamedNiaissa/ProjetJavaAv"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Battle}
              isBlog={false}
              isGithub={true}
              title="Battle simulation"
              description="Il s'agit d'un simulateur de combat tour par tour. PLusieurs types de combattant sont disponible tel que paysan, archer, fou, magicien..."
              ghLink="https://github.com/MohamedNiaissa/Projet_java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              isGithub={true}
              title="Clone Portfolio"
              description="C'est un clone d'un portfolio basé sur une maquette qui nous a été fournis."
              ghLink="https://github.com/MohamedNiaissa/portfolioclone"
              demoLink="https://mohamedniaissa.github.io/portfolioclone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
