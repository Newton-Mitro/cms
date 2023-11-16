<?php

namespace App\Services;

use App\Repositories\Interfaces\EventRepositoryInterface;

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

class EventService
{
    private $_eventRepository;

    public function __construct(EventRepositoryInterface $eventRepository)
    {
        $this->_eventRepository = $eventRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_eventRepository->all($perPage, $searchText);
    }

    public function store($request)
    {
        return $this->_eventRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_eventRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_eventRepository->show($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_eventRepository->updatePublishStatus($request, $id);
    }
}
