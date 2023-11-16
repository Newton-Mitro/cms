<?php

namespace App\Services;

use App\Repositories\Interfaces\OurServiceRepositoryInterface;

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

class OurServiceService
{
    private $_ourServiceRepository;

    public function __construct(OurServiceRepositoryInterface $ourServiceRepository)
    {
        $this->_ourServiceRepository = $ourServiceRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_ourServiceRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_ourServiceRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_ourServiceRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_ourServiceRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_ourServiceRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_ourServiceRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_ourServiceRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_ourServiceRepository->updatePublishStatus($request, $id);
    }
}
