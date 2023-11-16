<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\UserRegistrationRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    private $_userService;
    public function __construct(UserService $userService)
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->_userService = $userService;
    }

    public function register(UserRegistrationRequest $request)
    {
        try {
            $user = $this->_userService->store($request);
            return response()->json([
                'data' => new UserResource($user),
                'message' => 'You are successfully register',
                'errors' => null,
            ]);
        } catch (QueryException $exception) {
            return response()->json([
                'data' => $request->all(),
                'message' => $exception->errorInfo[2],
                'errors' => null,
            ]);
        }
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();


        if ($user && $user->status === 0) {
            return response()->json([
                'message' => 'Inactive account',
                'errors' => 'Inactive account',
            ], Response::HTTP_UNAUTHORIZED);
        } else {
            if ($token = $this->guard()->attempt($credentials)) {
                return $this->respondWithToken($token);
            }

            return response()->json([
                'data' => $request->all(),
                'message' => 'Invalid email or password',
                'errors' => null,
            ], Response::HTTP_UNAUTHORIZED);
        }
    }

    public function respondWithToken($token)
    {

        return response()->json([
            "data" => [
                'user' => new UserResource($this->guard()->user()),
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => $this->guard()->factory()->getTTL() * 60,
            ],
            "message" => 'Login success',
            'errors' => null
        ], Response::HTTP_OK);
    }

    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    public function logout()
    {
        return response()->json([
            'data' => $this->guard()->logout(),
            'message' => 'Successfully logged out.',
            'errors' => null,
        ], 200);
    }

    public function guard()
    {
        return Auth::guard();
    }
}
