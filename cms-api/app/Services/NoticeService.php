<?php

namespace App\Services;

use App\Repositories\Interfaces\NoticeRepositoryInterface;

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

class NoticeService
{
    private $_noticeRepository;

    public function __construct(NoticeRepositoryInterface $noticeRepository)
    {
        $this->_noticeRepository = $noticeRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_noticeRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_noticeRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_noticeRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_noticeRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_noticeRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_noticeRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_noticeRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_noticeRepository->updatePublishStatus($request, $id);
    }
}
