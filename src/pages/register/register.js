import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function register(props) {
  let [authMode, setAuthMode] = useState("signin")


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [facultad, setFacultad] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('lastname', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('rol', rol);
    formData.append('facultad', facultad);
    formData.append('especialidad', especialidad);

    const headers = {
      'Content-Type': 'application/json', // Especifica el tipo de contenido si es necesario
    };

    try {
      const response = await fetch('http://localhost:8080/users/newUser', {
        method: 'POST',
        body: formData,
        headers: headers
      });
      console.log(formData.values);

      if (response.ok) {
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
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nombres</label>
            <input
              type={"text"}
              name="name"
              value={name}
              className="form-control mt-1"
              placeholder="Pepito Pepo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Apellidos</label>
            <input
              type={"text"}
              name="lastName"
              value={lastName}
              className="form-control mt-1"
              placeholder="Uribe Petro"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type={"text"}
              name="email"
              value={email}
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type={"text"}
              name="password"
              value={password}
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Facultad</label>
            <input
              type={"text"}
              name="facultad"
              value={facultad}
              className="form-control mt-1"
              placeholder="Facultad"
              onChange={(e) => setFacultad(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Rol</label>
            <input
              type={"text"}
              name="rol"
              value={rol}
              className="form-control mt-1"
              placeholder="Rol"
              onChange={(e) => setRol(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Especialidad</label>
            <input
              type={"text"}
              name="especialidad"
              value={especialidad}
              className="form-control mt-1"
              placeholder="Especialidad"
              onChange={(e) => setEspecialidad(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
