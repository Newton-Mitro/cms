<?php

namespace App\Services;

use App\Repositories\Interfaces\GalleryImageRepositoryInterface;


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

class GalleryImageService
{
    private $_galleryImageRepository;

    public function __construct(GalleryImageRepositoryInterface $galleryImageRepository)
    {
        $this->_galleryImageRepository = $galleryImageRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_galleryImageRepository->all($perPage, $searchText);
    }

    public function store($request)
    {
        return $this->_galleryImageRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_galleryImageRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_galleryImageRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_galleryImageRepository->destroy($id);
    }

    public function getPublicPosts()
    {
        return $this->_galleryImageRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_galleryImageRepository->getPostBySlug($slug);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_galleryImageRepository->updatePublishStatus($request, $id);
    }
}
