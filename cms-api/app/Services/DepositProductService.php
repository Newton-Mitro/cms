<?php

namespace App\Services;

use App\Repositories\Interfaces\DepositProductRepositoryInterface;

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

class DepositProductService
{
    private $_depositProductRepository;

    public function __construct(DepositProductRepositoryInterface $depositProductRepository)
    {
        $this->_depositProductRepository = $depositProductRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_depositProductRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_depositProductRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_depositProductRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_depositProductRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_depositProductRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_depositProductRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_depositProductRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_depositProductRepository->updatePublishStatus($request, $id);
    }
}
