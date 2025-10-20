import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    // Aquí puedes conectar con una API o backend
  };

  return (
    <div
      className="d-flex flex-column  align-items-center justify-content-center vh-100"
      style={{

    minHeight: "100vh",
    background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 13%, rgba(5,88,173,1) 47%, rgba(3,143,209,1) 70%, rgba(0,212,255,1) 100%)",
     }} >
            <h1 className="justify-content-center align-items-center" >Red Social</h1>
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}
      >
         
        <h3 className="text-center text-primary mb-4">Iniciar Sesión</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>

          <div className="text-center mt-3">
            <button href="#" className="text-decoration-none">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
