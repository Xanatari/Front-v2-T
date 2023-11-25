import React, { useState, useEffect } from 'react';
import './dashboar.css';
import { Divider, CardHeader, Button, Image, Card, CardBody } from "@nextui-org/react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function DashBoardEstudiante() {

  const [studentData, setStudentData] = useState('');

  const [tech, setTechData] = useState([]);

  const [habilidades, setHabilidades] = useState([]);

  const [resusltados, setResultados] = useState([]);

  useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json', // Puedes especificar los headers si es necesario
      };

      try {
        const response = await fetch('http://localhost:8080/especialidades/estudent-info/4', {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const body = await response.json();
          setStudentData(body)
          // Maneja la respuesta de la solicitud GET aquí
          console.log('Solicitud GET exitosa', body);
          // Puedes realizar operaciones con 'data' aquí según tus necesidades
        } else {
          // Manejar errores si la solicitud falla
          console.error('Error en la solicitud GET');
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    handleGetRequest();
  }, []);

  useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json', // Puedes especificar los headers si es necesario
      };

      try {
        const response = await fetch('http://localhost:8080/especialidades/2', {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const body = await response.json();
          setTechData(body.data || []);
          // Maneja la respuesta de la solicitud GET aquí
          console.log('Solicitud GET exitosa', body);
          // Puedes realizar operaciones con 'data' aquí según tus necesidades
        } else {
          // Manejar errores si la solicitud falla
          console.error('Error en la solicitud GET');
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    handleGetRequest();
  }, []);

  useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json', // Puedes especificar los headers si es necesario
      };

      try {
        const response = await fetch('http://localhost:8080/especialidades/1', {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const body = await response.json();
          setHabilidades(body.data || []);
          // Maneja la respuesta de la solicitud GET aquí
          console.log('Solicitud GET exitosa', body);
          // Puedes realizar operaciones con 'data' aquí según tus necesidades
        } else {
          // Manejar errores si la solicitud falla
          console.error('Error en la solicitud GET');
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    handleGetRequest();
  }, []);

  useEffect(() => {
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json', // Puedes especificar los headers si es necesario
      };

      try {
        const response = await fetch('http://localhost:8080/resusltados/resultados/4', {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const body = await response.json();
          setResultados(body.data || []);
          // Maneja la respuesta de la solicitud GET aquí
          console.log('Solicitud GET exitosa', body);
          // Puedes realizar operaciones con 'data' aquí según tus necesidades
        } else {
          // Manejar errores si la solicitud falla
          console.error('Error en la solicitud GET');
        }
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
      }
    };
    handleGetRequest();
  }, []);

  const StudentProfile = () => {
    // Llamar a la función para hacer la solicitud GET


    if (!studentData) {
      return <p>Cargando...</p>;
    }
    const { nameLastName, facultad, especialidad } = studentData.data;

    return (

      <Card className="text-center" style={{ width: '28rem', height: '230px', margin: 'auto' }}>
        <CardHeader className="overflow-visible py-2">
        <Image
      width={200}
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{nameLastName}</p>
          <p>{facultad}</p>
          <p>{especialidad}</p>
        </CardBody>

      </Card>

    );
  };
  // Componente para las habilidades a evaluar
  const SkillsToEvaluate = () => {
    return (
      <Card className="text-center" style={{ width: '28rem', height: 'auto', margin: 'auto' }}>
        <CardHeader>
          <h4 className="text-material-navbar">Especialidad del Estudiante</h4>
        </CardHeader>
        <Divider />
        <CardBody>
        {tech.map((item) => (
                <Button
                  key={item.id}
                  className="custom-button"
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="sm"
                >
                  {item.nombre}
                </Button>
              ))}
        </CardBody>
      </Card>

    );
  };

  // Componente para generar el portafolio del estudiante
  const PortfolioGenerator = () => {
    return (
      <div className="caja-generar-portafolio text-center">
        <h1 className="text-material">Generar Portafolio Estudiante</h1>
        <div>
          <Button className="custom-button"
                  style={{ marginRight: '15px', marginBottom: '15px' }}
                  size="sm">
            Generate PDF
         </Button>
        </div>
      </div>
    );
  };


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
        <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center" >
            <div className="p-5" style={{ maxWidth: 'auto' }}>
            <Box>
            <h2 className="text-material" style={{ marginBottom: '20px' }}>Tecnologías o Lenguajes que quieres Evaluar</h2>
              {tech.map((item) => (
                <Button
                  key={item.id}
                  className="custom-button"
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="lg"
                >
                  {item.nombre}
                </Button>
              ))}
            </Box>
            <Divider className="my-5" />

            <Box>
            <h2 className="text-material" style={{ marginBottom: '20px' }}>Combina las habilidadeas a Evaluar</h2>
              {habilidades.map((item) => (
                <Button
                  key={item.id}
                  className="custom-button"
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="lg"
                >
                  {item.nombre}
                </Button>
              ))}
            </Box>


            <Divider className="my-5" />


          
            <Box>
            <h2 className="text-material" style={{ marginBottom: '20px' }}>Resultados de tus pruebas anteriores </h2>
            {resusltados.map((item) => (
                 <Card>
                 <CardBody>
                   <p>{item.resultado}</p>
                 </CardBody>
               </Card>
              ))}
            </Box>

          </div>

        </div>
      </div>
    </div>
  )


}



