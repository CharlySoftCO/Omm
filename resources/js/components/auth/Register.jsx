import React, { useState } from 'react';

const Register = ({ csrfToken, authRoutes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({}); // Limpiar errores anteriores

    // Validación del lado del cliente
    let newErrors = {};
    if (!name) newErrors.name = 'El campo nombre es obligatorio.';
    if (!email) newErrors.email = 'El campo correo electrónico es obligatorio.';
    if (!password) newErrors.password = 'El campo contraseña es obligatorio.';
    if (password !== passwordConfirmation) newErrors.password_confirmation = 'Las contraseñas no coinciden.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(authRoutes.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.redirectTo) {
          window.location.href = data.redirectTo; // Redirigir al dashboard
        }
      } else if (response.status === 422) {
        // Manejar errores de validación del servidor
        const errorData = await response.json();
        setErrors(errorData.errors || {});
      } else {
        setErrors({ general: 'Registro fallido. Inténtelo de nuevo.' });
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrors({ general: 'Ocurrió un error al registrarse. Inténtelo más tarde.' });
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{ background: `url('/images/back_auth.webp') no-repeat center center`, backgroundSize: 'cover' }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: '450px', width: '100%', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '15px' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center">
              <img src="/images/logo.jpg" alt="Logo de la Empresa" width="100" className="rounded mb-3" />
            </div>
            <h3 className="fw-bold text-primary mt-3">Registrarse</h3>
          </div>
          <form onSubmit={handleRegister}>
            {errors.general && (
              <div className="alert alert-danger">
                {errors.general}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                id="name"
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password-confirm" className="form-label">Confirmar Contraseña</label>
              <input
                id="password-confirm"
                type="password"
                className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation}</div>}
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
          </form>

          {authRoutes.login && (
            <div className="text-center mt-3">
              <a className="text-decoration-none" href={authRoutes.login}>¿Ya tienes una cuenta? Iniciar sesión</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
