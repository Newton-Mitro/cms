<?php

namespace App\Services;

use App\Repositories\Interfaces\LoanProductRepositoryInterface;

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

class LoanProductService
{
    private $_loanProductRepository;

    public function __construct(LoanProductRepositoryInterface $loanProductRepository)
    {
        $this->_loanProductRepository = $loanProductRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_loanProductRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_loanProductRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_loanProductRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_loanProductRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_loanProductRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_loanProductRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_loanProductRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_loanProductRepository->updatePublishStatus($request, $id);
    }
}
