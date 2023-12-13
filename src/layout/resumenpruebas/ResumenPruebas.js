
import React, { useState, useEffect} from 'react';
import './resumenpruebas.css';
import { Divider, CardHeader, Button, Image, Card, CardBody } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function CodigoEstudianteLayer() {


    
    const EvaluacionEstudiante = () => {
           return (

            
            <><p style={{ marginBottom: '20px' }} className="font-sans-serif text-lg">Ingresa la solucion que creas pertiente al desafio</p>

                <form  style={{ marginBottom: '20px' }}>
                <Box>
            
        
                 <Card>
                 <CardBody>
                   <p>XD Resultados</p>
                 </CardBody>
               </Card>
          
            </Box>

                    <div style={{ textAlign: 'right' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg"  size="lg">Enviar Solución</Button>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <Button tradius="full" className="bg-gradient-to-tr from-blue-300 to-violet-800 text-white shadow-lg"  size="lg">Volver al DashBoard</Button>
                    </div>
                </form>
            </>

        );
    };

    return (

        <div className="container-fluid h-100">
            <div className="row h-100">
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


