<?php

namespace App\Services;

use App\Repositories\Interfaces\StaffRepositoryInterface;

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

class StaffService
{
    private $_staffRepository;

    public function __construct(StaffRepositoryInterface $staffRepository)
    {
        $this->_staffRepository = $staffRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_staffRepository->all($perPage, $searchText);
    }

    public function getStaffsByType($staffType)
    {
        return $this->_staffRepository->getStaffsByType($staffType);
    }

    public function store($request)
    {
        return $this->_staffRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_staffRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_staffRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_staffRepository->destroy($id);
    }

    public function getPostBySlug($slug)
    {
        return $this->_staffRepository->getPostBySlug($slug);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_staffRepository->updatePublishStatus($request, $id);
    }
}
