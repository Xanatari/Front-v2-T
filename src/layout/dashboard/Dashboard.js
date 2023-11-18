import React from 'react';
import { Button, Row,  Container, Stack,  Col } from 'react-bootstrap';
import './dashboar.css';
import {Divider} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";


const StudentProfile = () => {
  return (
    <Card className="text-center" style={{ width: '28rem', height: '230px', margin: 'auto' }}>
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={6} md={4} className="d-flex align-items-center justify-content-center">
          <Image
          width={300}
          alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          </Col>
        </Row>
      </Container>
      <Card>
      <CardBody>
        <p>Nombre del Estudiante</p>
        <p>Ingeniería de Sistemas</p>
      </CardBody>
      </Card>
    </Card>
    
  );
};

// Componente para las habilidades a evaluar
const SkillsToEvaluate = () => {
  return (
    <div className="caja-botones text-center" >
      <h3 className="text-material-navbar">Especialidad del Estudiante</h3>
      <h3 className="text-material-navbar">Habilidades a Evaluar</h3>
      <Button className="btn-material btn-material-primary" variant="light">Java</Button>{' '}
      <Button className="btn-material btn-material-primary" variant="light">SQL</Button>{' '}
      <Button className="btn-material btn-material-primary" variant="light">AWS</Button>{' '}
      <Button className="btn-material btn-material-primary" variant="light">Algoritmia</Button>{' '}
    </div>
  );
};

// Componente para generar el portafolio del estudiante
const PortfolioGenerator = () => {
  return (
    <div className="caja-generar-portafolio text-center">
      <h1 className="text-material">Generar Portafolio Estudiante</h1>
      <div>
        <Button variant="primary" size="lg">
          Block level button
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

// Componente principal Dashboard
const Dashboard = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Navbar */}
        <div className="navbar col-3 bg-dark text-light p-3">
          <StudentProfile />
          <SkillsToEvaluate />
          <PortfolioGenerator />
        </div>
      
        {/* Contenedor a la derecha */}
        <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center">

          <Stack gap={3}>
           
              <Container className="border border-primary p-3">
                <h2 className="text-material">Tecnologías o Lenguajes que quieres Evaluar</h2>
                <button className="btn-material btn-material-primary">Acción 1</button>{' '}
                <button className="btn-material btn-material-primary">Acción 2</button>
              </Container>
            
              <Divider className="my-5" />
              <Container className="border border-primary p-3">
                <h2 className="text-material">Con que habilidades quieres evaluar</h2>
                <button className="btn-material btn-material-primary">Botón 1</button>{' '}
                <button className="btn-material btn-material-primary">Botón 2</button>{' '}
              </Container>
           
              <Divider className="my-5" />
              <Container className="border border-primary p-3">
                <h2 className="text-material">Resultados de tus Evaluaciones</h2>
                <Card>
                  <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                </Card>
                <Divider className="my-2" />
                <Card>
                  <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                </Card>
                <Divider className="my-2" />
                <Card>
                  <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                </Card>
              </Container>
           
          </Stack>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;