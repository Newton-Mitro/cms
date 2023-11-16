<?php

namespace App\Services;

use App\Repositories\Interfaces\PageRepositoryInterface;

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

class PageService
{
    private $_pageRepository;

    public function __construct(PageRepositoryInterface $pageRepository)
    {
        $this->_pageRepository = $pageRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_pageRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_pageRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_pageRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_pageRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_pageRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_pageRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_pageRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_pageRepository->updatePublishStatus($request, $id);
    }
}
