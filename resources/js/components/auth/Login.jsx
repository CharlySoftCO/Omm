import React, { useState } from 'react';

const Login = ({ csrfToken, authRoutes }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({}); // Limpiar errores anteriores

    // Validación del lado del cliente
    let newErrors = {};
    if (!email) newErrors.email = 'El campo correo electrónico es obligatorio.';
    if (!password) newErrors.password = 'El campo contraseña es obligatorio.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(authRoutes.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({
          email,
          password,
          remember,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.redirectTo;
      } else if (response.status === 422) {
        // Manejar errores de validación del servidor
        const errorData = await response.json();
        setErrors(errorData.errors || {});
      } else {
        setErrors({ general: 'Login fallido. Inténtelo de nuevo.' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrors({ general: 'Ocurrió un error al iniciar sesión. Inténtelo más tarde.' });
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
            <h3 className="fw-bold text-primary mt-3">Iniciar Sesión</h3>
          </div>
          <form onSubmit={handleLogin}>
            {errors.general && (
              <div className="alert alert-danger">
                {errors.general}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email}
                </div>
              )}
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
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password}
                </div>
              )}
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Recuérdame
              </label>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
          </form>

          {authRoutes.passwordRequest && (
            <div className="text-center mt-3">
              <a className="text-decoration-none" href={authRoutes.passwordRequest}>¿Olvidaste tu contraseña?</a>
            </div>
          )}

          {authRoutes.register && (
            <div className="text-center mt-2">
              <a className="text-decoration-none" href={authRoutes.register}>¿No tienes una cuenta? Registrarse</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
