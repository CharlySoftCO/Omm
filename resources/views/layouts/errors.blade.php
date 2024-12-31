<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Página no encontrada</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(120deg, #6a11cb, #2575fc);
            color: white;
            font-family: 'Arial', sans-serif;
            overflow: hidden;
        }
        .error-container {
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
        }
        .error-title {
            font-size: 8rem;
            font-weight: bold;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        .error-subtitle {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        .error-button {
            margin-top: 20px;
        }
        .floating-icon {
            font-size: 5rem;
            position: absolute;
            animation: float 4s infinite ease-in-out;
        }
        .icon-1 {
            top: 10%;
            left: 20%;
        }
        .icon-2 {
            bottom: 15%;
            right: 25%;
        }
        .icon-3 {
            top: 30%;
            right: 10%;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    @yield('content')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
