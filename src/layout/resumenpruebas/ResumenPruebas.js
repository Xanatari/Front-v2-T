import React, { useState, useEffect } from 'react';
import './resumenpruebas.css';
import { Divider, CardHeader, Button, Image, Card, CardBody, CardFooter, Modal } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CodigoEstudianteLayer() {
  const [resumeData, setResumeData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };

      try {
        const response = await fetch('http://localhost:8080/resusltados/resultados/7/resume', {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const body = await response.json();
          setResumeData(body.data || []);
          console.log('Solicitud GET exitosa', body);
        } else {
          console.error('Error en la solicitud GET');
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    handleGetRequest();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <>
        <p style={{ marginBottom: '20px' }} className="font-sans-serif text-lg">Ingresa la solucion que creas pertinente al desafio</p>
        {resumeData.map((item) => (
          <Card key={item.id} className="cursor-pointer">
            <CardHeader>
              <p>{item.prueba}</p>
            </CardHeader>
            <Divider />
            <CardBody>
  {/* Verificar si item.codigo existe antes de acceder a la propiedad substring */}
  <p>{item.codigo && item.codigo.substring(0, 100)}{item.codigo && item.codigo.length > 100 && '...'}
    {item.codigo && item.codigo.length > 100 && (
      <Button onClick={() => handleCardClick(item)}>Ver más</Button>
    )}
  </p>
</CardBody>
            <CardFooter>
              <p>{item.resultado}</p>
            </CardFooter>
          </Card>
        ))}
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.prueba}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedItem?.codigo}</p>
          </Modal.Body>
          <Modal.Footer>
            <p>{selectedItem?.resultado}</p>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}