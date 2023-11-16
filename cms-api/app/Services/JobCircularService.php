<?php

namespace App\Services;

use App\Repositories\Interfaces\JobCircularRepositoryInterface;

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

class JobCircularService
{
    private $_jobCircularRepository;

    public function __construct(JobCircularRepositoryInterface $jobCircularRepository)
    {
        $this->_jobCircularRepository = $jobCircularRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_jobCircularRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_jobCircularRepository->getPublicPosts();
    }

    public function store($request)
    {
        return $this->_jobCircularRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_jobCircularRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_jobCircularRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_jobCircularRepository->destroy($id);
    }

    public function getPostBySlug($slug)
    {
        return $this->_jobCircularRepository->getPostBySlug($slug);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_jobCircularRepository->updatePublishStatus($request, $id);
    }
}
