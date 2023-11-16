<?php

namespace App\Services;

use App\Repositories\Interfaces\DocumentPostRepositoryInterface;

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

class DocumentPostService
{
    private $_documentPostRepository;

    public function __construct(DocumentPostRepositoryInterface $documentPostRepository)
    {
        $this->_documentPostRepository = $documentPostRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_documentPostRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_documentPostRepository->getPublicPosts();
    }

    public function store($request)
    {
        return $this->_documentPostRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_documentPostRepository->update($request, $id);
    }

    public function destroy($id)
    {
        return $this->_documentPostRepository->destroy($id);
    }

    public function show($id)
    {
        return $this->_documentPostRepository->show($id);
    }

    public function getPostBySlug($slug)
    {
        return $this->_documentPostRepository->getPostBySlug($slug);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_documentPostRepository->updatePublishStatus($request, $id);
    }
}
