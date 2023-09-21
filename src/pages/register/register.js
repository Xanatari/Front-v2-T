import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function register(props) {
  let [authMode, setAuthMode] = useState("signin")

  let navigate = useNavigate()

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    facultad: "",
    rol: "",
    especialidad: "",
  })

  const { name, lastName, email, password, facultad, rol, especialidad, } = student;

  const onInputChange = (e) => {
    setStudent({ ...user, [e.target.name]: e.target.value });
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hacer la solicitud POST al endpoint
      const response = await axios.post('http://localhost:8080/users/newUser', student);

      // Manejar la respuesta del servidor aquí, si es necesario
      console.log('Respuesta del servidor:', response.data);

      // Restablecer los campos del formulario después de enviarlos, si es necesario
      e.target.reset();
    } catch (error) {
      // Manejar errores de la solicitud aquí, si es necesario
      console.error('Error al enviar la solicitud:', error);
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
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
