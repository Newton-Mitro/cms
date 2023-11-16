<?php

namespace App\Services;

use App\Repositories\Interfaces\SliderImageRepositoryInterface;

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

class SliderImageService
{
    private $_sliderImageRepository;

    public function __construct(SliderImageRepositoryInterface $sliderImageRepository)
    {
        $this->_sliderImageRepository = $sliderImageRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_sliderImageRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_sliderImageRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_sliderImageRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_sliderImageRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_sliderImageRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_sliderImageRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_sliderImageRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_sliderImageRepository->updatePublishStatus($request, $id);
    }
}
