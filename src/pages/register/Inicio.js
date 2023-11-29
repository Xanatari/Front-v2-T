import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'
import { Divider,  Button, Input   } from "@nextui-org/react";
import './inicio.css';
import { useNavigate } from 'react-router-dom';


export default function Home(props) {
  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin")

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleSuccess = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // 3000 milisegundos = 3 segundos
  };

  const [showAlert, setShowAlert] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [facultad, setFacultad] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUsers = { name, lastName, email, password, rol, facultad, especialidad };

    const headers = {
      'Content-Type': 'application/json', // Especifica el tipo de contenido si es necesario,
    };

    console.log("Cuerpo del JSON:", JSON.stringify(newUsers));
    console.log("Cabeceras:", headers);

    try {
      const response = await fetch('http://localhost:8080/users/newUser', {
        method: 'POST',
        body: JSON.stringify(newUsers),
        headers: headers
      })

      if (response.ok) {
        // La solicitud fue exitosa, puedes manejar la respuesta aquí
        console.log('Solicitud POST exitosa');
        handleSuccess();
      } else {
        // Manejar errores si la solicitud falla
        console.error('Error en la solicitud POST');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    const credentials = { userName, password };

    const headers = {
      'Content-Type': 'application/json', // Especifica el tipo de contenido si es necesario,
    };

    console.log("Cuerpo del JSON:", JSON.stringify(credentials));
    console.log("Cabeceras:", headers);

    try {
      const response = await fetch('http://localhost:8080/users/credentials', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: headers
      })

      if (response.ok) {
        const body = await response.json();
        console.log('data::::' , body.data)
        navigate('/dashboard', { state: { userData: body.data } });
        // La solicitud fue exitosa, puedes manejar la respuesta aquí
        console.log('Solicitud POST exitosa');
        
      } else {
        // Manejar errores si la solicitud falla
        console.error('Error en la solicitud POST');
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
    }
  };




  if (authMode === "signin") {
    return (
      <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center" >
        <form className="Auth-form bg-light p-4 rounded" onSubmit={(e) => handleLogInSubmit(e)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              No te has registrado aun ?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Registro a la Plataforma
              </span>
            </div>
            <div className="form-group mt-3">
              <Input
                isClearable
                type="email"
                label="Correo Institucional"
                variant="bordered"
                placeholder="Ingresa con tu correo intstitucional"
                defaultValue="usuario-estudiante@unipiloto.edu.co"
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
             <Input
                isClearable
                label="Contraseña"
                variant="bordered"
                type="password"
                className="max-w-xs"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Divider />
            <div className="d-grid gap-2 mt-3">
              <Button type="submit" color="secondary" radius="sm" size="lg">
                Ingreso
              </Button>
            </div>
            <Divider />
            <p className="text-center mt-2">
              Olvidaste tu contraseña <a href="#">Deseas Cambiarla ?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="contenido-derecha col-9 d-flex align-items-center justify-content-center p-3 text-center" >
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type={"text"}
              name="name"
              label="Name"
              value={name}
              className="form-control mt-1"
              placeholder="Ingresa tu nombre "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div >
          
            <Input
              type={"text"}
              name="lastName"
              value={lastName}
              className="form-control mt-1"
              placeholder="Uribe Petro"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div >

            <Input
              type={"text"}
              name="email"
              value={email}
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div >

            <Input
              type={"text"}
              name="password"
              value={password}
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div >

            <Input
              type={"text"}
              name="facultad"
              value={facultad}
              className="form-control mt-1"
              placeholder="Facultad"
              onChange={(e) => setFacultad(e.target.value)}
            />
          </div>
          <div >
       
            <Input
              type={"text"}
              name="rol"
              value={rol}
              className="form-control mt-1"
              placeholder="Rol"
              onChange={(e) => setRol(e.target.value)}
            />
          </div>
          <div >
          
            <Input
              type={"text"}
              name="especialidad"
              value={especialidad}
              className="form-control mt-1"
              placeholder="Especialidad"
              onChange={(e) => setEspecialidad(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" className="btn btn-primary" size="lg">
              Registrar
            </Button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      {showAlert && (
        <Alert variant="success" onClose={handleCloseAlert} dismissible>
          La solicitud de creacion fue exitosa.
        </Alert>
      )}
    </div>
  )
}