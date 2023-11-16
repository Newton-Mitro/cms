<?php

namespace App\Http\Middleware;

use App\Repositories\Interfaces\VisitorLogRepositoryInterface;
use Closure;
use Illuminate\Http\Request;

class VisitorLogger
{
    private $_visitorLogRepository;

    public function __construct(VisitorLogRepositoryInterface $visitorLogRepository)
    {
        $this->_visitorLogRepository = $visitorLogRepository;
    }

    public function handle(Request $request, Closure $next)
    {
        try {
            $this->_visitorLogRepository->store($request);
        } catch (\Throwable $th) {
            // throw $th;
        }

        return $next($request);
    }
}