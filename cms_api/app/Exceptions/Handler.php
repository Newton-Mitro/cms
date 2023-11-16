<?php

namespace App\Exceptions;

use ErrorException;
use Exception;
use Illuminate\Database\Eloquent\JsonEncodingException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Support\ItemNotFoundException;
use ParseError;
use PDOException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    protected $levels = [
        //
    ];

    protected $dontReport = [
        //
    ];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register()
    {
        $this->renderable(function (Exception $exception, $request) {

            if ($request->expectsJson()) {

                if ($exception instanceof ModelNotFoundException) {
                    return response()->json([
                        "data" => null,
                        "message" => 'Model not found',
                        'errors' => null,
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof NotFoundHttpException) {
                    return response()->json([
                        "data" => null,
                        "message" => $exception->getMessage(),
                        'errors' => null,
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof AccessDeniedHttpException) {
                    return response()->json([
                        "data" => null,
                        "message" => 'You do not have enough permission',
                        'errors' => null,
                    ], Response::HTTP_UNAUTHORIZED);
                }

                if ($exception instanceof PDOException) {
                    return response()->json([
                        "data" => null,
                        "message" => $exception->errorInfo[2],
                        'errors' => null
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof JsonEncodingException) {
                    return response()->json([
                        "data" => null,
                        "message" => $exception->getMessage(),
                        'errors' => null,
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof ErrorException) {
                    return response()->json([
                        "data" => null,
                        "message" => $exception->getMessage(),
                        'errors' => null,
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof ParseError) {
                    return response()->json([
                        "data" => null,
                        "message" => $exception->getMessage(),
                        'errors' => null,
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }

                if ($exception instanceof ItemNotFoundException) {
                    return response()->json([
                        "data" => null,
                        "message" => "Content not found",
                        'errors' => null,
                    ], Response::HTTP_NOT_FOUND);
                }

            }
        });
    }
}
