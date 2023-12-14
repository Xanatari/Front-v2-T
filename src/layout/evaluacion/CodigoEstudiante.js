import React, { useState, useEffect} from 'react';
import './codigo.css';
import { Divider, CardHeader, Button, Image, Card, CardBody } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';




export default function CodigoEstudianteLayer() {

    const StudentProfile = () => {
        return (

            <Card className="text-center" style={{ width: '28rem', height: '230px', margin: 'auto' }}>
                <CardHeader className="overflow-visible py-2">
                    <Image
                        alt="nextui logo"
                        height={80}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={80}
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



    // Componente para las habilidades a evaluar
    const SkillsToEvaluate = () => {

        const [tech, setTechData] = useState([]);

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
        return (
            <Card className="text-center" style={{ width: '28rem', height: 'auto', margin: 'auto' }}>
                <CardHeader>
                    <h4 className="text-material-navbar">Especialidad del Estudiante</h4>
                    <h4 className="text-material-navbar">Habilidades a Evaluar</h4>
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




    const EvaluacionEstudiante = () => {

        const [codigo, setCodigo] = useState('');
       
        const [resultado, setResultado] = useState(null);
        const [showAdditionalCard, setShowAdditionalCard] = useState(false); // New state

        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);

        const user = searchParams.get('user');
        const prueba = searchParams.get('prueba');
       
        const handleSubmit = async (e) => {
            e.preventDefault();
            


            const newUsers = { codigo, prueba };

            const headers = {
                'Content-Type': 'application/json', // Especifica el tipo de contenido si es necesario,
            };

            console.log("Cuerpo del JSON:", JSON.stringify(newUsers));
            console.log("Cabeceras:", headers);
            try {
                const response = await fetch(`http://localhost:8080/pruebas/prueba/${user}/codigo`, {
                    method: 'POST',
                    body: JSON.stringify(newUsers),
                    headers: headers
                })

                if (response.ok) {
                    // La solicitud fue exitosa, puedes manejar la respuesta aquí
                    console.log('Solicitud POST exitosa');
                    const body = await response.json();
                    setResultado(body)
                    setShowAdditionalCard(true);
    
                } else {
                    // Manejar errores si la solicitud falla
                    console.error('Error en la solicitud POST');
                }
            } catch (error) {
                console.error('Error en la solicitud POST:', error);
            }
        };

      console.log(resultado);

        return (

            
            <><p style={{ marginBottom: '20px' }} className="font-sans-serif text-lg">Ingresa la solucion que creas pertiente al desafio</p>

                <form onSubmit={(e) => handleSubmit(e)} style={{ marginBottom: '20px' }}>
                    <textarea value={codigo} onChange={(e) => setCodigo(e.target.value)} name="content" rows={20} cols={200} />

                    <div style={{ textAlign: 'right' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg" type="submit"size="lg">Enviar Solución</Button>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg"  size="lg" >Volver al DashBoard</Button>
                    </div>
                </form>

                {showAdditionalCard && (
                    <Card style={{ marginBottom: '20px', marginRight: '20px' }}>
                        <CardBody>
                            {/* Assuming `pruebaTecnica` is a variable you have */}
                            <p style={{ whiteSpace: 'pre-line' }}>{resultado.data.resultadoEvaluacion}</p>
                        </CardBody>
                    </Card>
                )}

                
            </>

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

                        <EvaluacionEstudiante />

                    </div>
                </div>
            </div>
        </div>
    );

}


