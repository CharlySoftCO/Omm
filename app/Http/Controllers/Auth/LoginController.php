<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Redirección después del inicio de sesión.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Crea una nueva instancia del controlador.
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Sobrescribir el método de login para devolver JSON.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            // Login exitoso
            return response()->json(['message' => 'Login exitoso', 'redirectTo' => $this->redirectTo], 200);
        }

        // Si las credenciales no son correctas, devolver error en JSON
        return response()->json([
            'errors' => [
                'email' => [trans('auth.failed')],
            ],
        ], 422);
    }

    /**
     * Sobrescribir el método de logout.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout exitoso']);
    }
}
