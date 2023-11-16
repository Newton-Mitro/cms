<?php

namespace App\Repositories;

use App\Models\VisitorLog;
use App\Repositories\Interfaces\VisitorLogRepositoryInterface;

/**========================================================================
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *========================================================================**/

class VisitorLogRepository implements VisitorLogRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return VisitorLog::where('title', 'like', '%' . $searchText . '%')->orderBy('order', 'ASC')->paginate($perPage);
    }

    public function store($request)
    {
        $log = new VisitorLog();
        $log->ip = $request->getClientIp();
        $log->app = $request->header('user-agent');
        $log->device = $request->header('sec-ch-ua-platform');
        $log->url = $request->getRequestUri();
        $log->locale = $request->getLocale();
        $log->method = $request->getMethod();
        $log->save();

        return $log;
    }

    public function todaysVisitorCount()
    {
        return VisitorLog::distinct()->whereDate('created_at', \Carbon\Carbon::today())->count('ip');
    }

    public function totalVisitorCount()
    {
        return VisitorLog::distinct()->count('ip');
    }

    public function show($id)
    {
        return VisitorLog::findOrFail($id);
    }
}
