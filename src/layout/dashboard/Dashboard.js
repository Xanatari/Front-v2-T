import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


import './dashboar.css';
import { Divider, CardHeader, Button, Image, Card, CardBody } from "@nextui-org/react";
import Box from '@mui/material/Box';


export default function DashBoardEstudiante() {

  const navigate = useNavigate();

  const [studentData, setStudentData] = useState('');

  const [tech, setTechData] = useState([]);

  const [habilidades, setHabilidades] = useState([]);

  const [resusltados, setResultados] = useState([]);

  const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState('');
  const [habilidadSeleccionada, setHabilidadSeleccionada] = useState('');

  const location = useLocation();
  const userData = location.state?.userData;

  const handleRedirect = () => {
    // Aquí maneja la lógica de redirección con los valores seleccionados
    // Puedes ajustar esto según tus necesidades
    if (tecnologiaSeleccionada && habilidadSeleccionada) {
      navigate(`/evaluacion?tecnologia=${tecnologiaSeleccionada}&habilidad=${habilidadSeleccionada}&user=${userData.userId}`);
    } else {
      // Muestra algún mensaje de error si es necesario
    }
  };

  useEffect(() => {

   
    const handleGetRequest = async () => {
      const headers = {
        'Content-Type': 'application/json', // Puedes especificar los headers si es necesario
      };

      try {
        if (userData && userData.userId) {
          console.log(userData.userId);
          const response = await fetch(`http://localhost:8080/especialidades/estudent-info/${userData.userId}`, {
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
        const response = await fetch('http://localhost:8080/especialidades/1', {
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
          <p className='font-sans-serif'>{nameLastName}</p>
          <p className='font-sans-serif'>{facultad}</p>
          <p className='font-csans-serif' >{especialidad}</p>
        </CardBody>

      </Card>

    );
  };
  // Componente para las habilidades a evaluar
  const SkillsToEvaluate = () => {
    return (
      <Card className="text-center" style={{ width: '28rem', height: 'auto', margin: 'auto' }}>
        <CardHeader>
          <p className='font-sans-serif text-lg'>Especialidad del Estudiante</p>
        </CardHeader>
        <Divider />
        <CardBody>
        {tech.map((t) => (
                <Button
                  key={t.id}
                  className="custom-button"
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="sm"
                >
                  {t.nombre}
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
        <p className="font-sans-serif text-lg">Generar Portafolio Estudiante</p>
        <div>
          <Button radius="full" className="bg-gradient-to-tr from-red-400 to-red-600 text-white shadow-lg font-sans-serif"
                  style={{ marginRight: '15px', marginBottom: '15px' }}
                  size="sm">
            Generate PDF
         </Button>
        </div>
      </div>
    );
  };


  return (
    <div className="container-fluid h-100diegog">
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
            <p className="font-sans-serif font-bold text-lg text-violet-500 uppercase" style={{ marginBottom: '20px' }}>Tecnologías o Lenguajes que quieres Evaluar</p>
              {tech.map((item) => (
                <Button
                  key={item.id}
                  className={`custom-button font-sans-serif ${tecnologiaSeleccionada === item.nombre ? 'selected' : ''}`}
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="lg"
                  onClick={() => setTecnologiaSeleccionada(item.nombre)}
                >
                  {item.nombre}
                </Button>
              ))}
            </Box>
            <Divider className="my-5" />

            <Box>
            <p className=" font-bold text-lg text-violet-500 uppercase"  style={{ marginBottom: '20px' }}>Combina las habilidadeas a Evaluar</p>
              {habilidades.map((item) => (
                <Button
                  key={item.id}
                  className={`custom-button ${habilidadSeleccionada === item.nombre ? 'selected' : ''}`}
                  style={{ marginRight: '10px', marginBottom: '10px' }}
                  size="lg"
                  onClick={() => setHabilidadSeleccionada(item.nombre)}
                >
                  {item.nombre}
                </Button>
              ))}
            </Box>
            <Divider className="my-5" />
            <Box>
            <p className="font-sans-serif font-bold text-lg text-violet-500 uppercase"  style={{ marginBottom: '20px' }}>Resultados de tus pruebas anteriores </p>
            {resusltados.map((r) => (
                 <Card>
                 <CardBody>
                   <p>{r.resultado}</p>
                 </CardBody>
               </Card>
              ))}
            </Box>
            <div className="my-5">
        <Button className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg " onClick={handleRedirect}>
          Ir a Evaluación
        </Button>
      </div>

          </div>

        </div>
      </div>
    </div>
  )


}



