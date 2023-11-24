import { useEffect, useState } from "react";

export function useFetch(){

    const [studentData, setStudentData] = useState(null);

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
  return studentData;
}