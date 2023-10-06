import React from 'react'
import './dashboar.css' // Asegúrate de tener el archivo CSS para los estilos
import { Button, Row, Card, Container, Image, Col } from 'react-bootstrap'



export default function DashBoard(props) {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Navbar */}
        <div className="navbar col-3 bg-dark text-light p-3">
        <Card className="text-center" style={{ width: '28rem',height: '230px', margin: 'auto' }}>
        <Container className="h-100">
        <Row className="h-100">
          <Col xs={6} md={4} className="d-flex align-items-center justify-content-center">
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
        </Row>
      </Container>
          <Card.Body>
              <Card.Title className="mb-0">Nombre del Estudiante</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Ingeniería de Sistemas</Card.Subtitle>
            </Card.Body>
        </Card>
          <div className="caja-botones">
            <h2 className="text-primary">Estudiante de Ingenieria de Sitemas</h2>
            <h2 className="text-primary">Habilidades a Evaluar</h2>
            <button className="btn btn-link">Java</button>
            <button className="btn btn-link">SQL</button>
          </div>
          <div className="caja-generar-portafolio">
            <h2 className="text-info">Generar Portafolio</h2>
            <button className="btn btn-info">
              Generar
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Contenedor a la derecha */}
        <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center">
          <div className="cajas-izquierda">
            <div className="caja-botones">
              <h2 className="text-primary">Título de la Caja 1</h2>
              <button className="btn btn-primary">Acción 1</button>
              <button className="btn btn-secondary">Acción 2</button>
            </div>
          </div>
          <div className="cajas-derecha">
            <div className="caja-titulo-boton">
              <h2 className="text-info">Título Caja 1</h2>
              <button className="btn btn-info">Botón 1</button>
              <button className="btn btn-info">Botón 2</button>
            </div>
            <div className="caja-titulo-boton">
              <h2 className="text-warning">Título Caja 2</h2>
              <button className="btn btn-warning">Botón 1</button>
              <button className="btn btn-warning">Botón 2</button>
            </div>
            <div className="caja-titulo-texto">
              <h2 className="text-danger">Título Caja 3</h2>
              <input type="text" className="form-control" placeholder="Texto 1" />
              <input type="text" className="form-control" placeholder="Texto 2" />
              <input type="text" className="form-control" placeholder="Texto 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}