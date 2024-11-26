import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const containerLogin = document.getElementById('login');
const containerRegister = document.getElementById('register');

if (containerLogin) {
  const root = ReactDOM.createRoot(containerLogin);
  root.render(
    <React.StrictMode>
      <Login
        csrfToken={csrfToken}
        authRoutes={{
          login: '/login',
          dashboard: '/dashboard',
          passwordRequest: '/password/reset',
          register: '/register',
        }}
      />
    </React.StrictMode>
  );
}

if (containerRegister) {
  const root = ReactDOM.createRoot(containerRegister);
  root.render(
    <React.StrictMode>
      <Register
        csrfToken={csrfToken}
        authRoutes={{
          register: '/register',
          login: '/login',
        }}
      />
    </React.StrictMode>
  );
}
