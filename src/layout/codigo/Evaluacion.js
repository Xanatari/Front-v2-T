import React, { useState, useEffect } from 'react';
import './evaluacion.css';
import { Divider, CardHeader, Button, Image, Card, CardBody } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';


export default function EvaluacionEstudiante() {
    const navigate = useNavigate();

    const StudentProfile = () => {
        return (


            <Card className="text-center" style={{ width: '28rem', height: '230px', margin: 'auto' }}>
                <CardHeader className="overflow-visible py-2">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">nextui.org</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Nombre del Estudiante</p>
                    <p>Ingeniería de Sistemas</p>
                </CardBody>

            </Card>

        );
    };



    const EvaluacionEstudianteCodigo = () => {
        const [resultado, setResultado] = useState('');
        const [isLoading, setIsLoading] = useState(true);
      
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);
      
        const tecnologia = searchParams.get('tecnologia');
        const habilidad = searchParams.get('habilidad');
        const user = searchParams.get('user');
      
        const handleRedirect = () => {
          navigate(`/codigoEstudiante?user=${user}&prueba=${pruebaId}`);
        };
      
        useEffect(() => {
          if (!resultado && isLoading) {
            const handleGetRequest = async () => {
              const headers = {
                'Content-Type': 'application/json',
              };
      
              try {
                const response = await fetch(`http://localhost:8080/pruebas/prueba/${user}?habilitie=${tecnologia}&tech=${habilidad}`, {
                  method: 'GET',
                  headers: headers
                });
      
                if (response.ok) {
                  const body = await response.json();
                  setResultado(body);
                  setIsLoading(false);
                  console.log('Solicitud GET exitosa', body);
                } else {
                  console.error('Error en la solicitud GET');
                  setIsLoading(false);
                }
              } catch (error) {
                console.error('Error en la solicitud GET:', error);
                setIsLoading(false);
              }
            };
      
            handleGetRequest();
          }
        }, [resultado, isLoading, user, tecnologia, habilidad]);
      
        if (isLoading) {
          return <p>Cargando...</p>;
        }
      
        if (!resultado) {
          return <p>Error al cargar la información.</p>;
        }
      
        const pruebaId = resultado.data.pruebaId;
        const pruebaTecnica = resultado.data.pruebaTecnica;
      
        return (
          <>
            <h2 style={{ marginBottom: '20px' }}>Combina las habilidades a Evaluar</h2>
            <Card style={{ marginBottom: '20px', marginRight: '20px' }}>
              <CardBody>
                <p style={{ whiteSpace: 'pre-line' }}>{pruebaTecnica}</p>
              </CardBody>
            </Card>
            <div style={{ textAlign: 'right' }}>
              <Button
                size="lg"
                component={Link}
                onClick={handleRedirect}
              >
                Solucionar el desafío
              </Button>
            </div>
          </>
        );
      };
    // Componente para las habilidades a evaluar
    const SkillsToEvaluate = () => {
        return (
            <Card className="text-center" style={{ width: '28rem', height: '230px', margin: 'auto' }}>
                <CardHeader>
                    <h4 className="text-material-navbar">Especialidad del Estudiante</h4>
                    <h4 className="text-material-navbar">Habilidades a Evaluar</h4>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Button color="secondary" radius="sm">Java</Button>
                    <Button color="secondary" radius="sm">SQL</Button>
                    <Button color="secondary" radius="sm">AWS</Button>
                    <Button color="secondary" radius="sm">Algoritmia</Button>
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

                        <EvaluacionEstudianteCodigo />

                    </div>
                </div>
            </div>
        </div>
    );
}

