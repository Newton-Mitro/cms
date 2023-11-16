<?php

namespace App\Services;

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

class VisitorLogService
{
    private $_visitorLogRepository;

    public function __construct(VisitorLogRepositoryInterface $visitorLogRepository)
    {
        $this->_visitorLogRepository = $visitorLogRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_visitorLogRepository->all($perPage, $searchText);
    }

    public function store($request)
    {
        return $this->_visitorLogRepository->store($request);
    }

    public function todaysVisitorCount()
    {
        return $this->_visitorLogRepository->todaysVisitorCount();
    }

    public function totalVisitorCount()
    {
        return $this->_visitorLogRepository->totalVisitorCount();
    }

    public function show($id)
    {
        return $this->_visitorLogRepository->show($id);
    }

}
