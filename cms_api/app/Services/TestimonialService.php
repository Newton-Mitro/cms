<?php

namespace App\Services;

use App\Repositories\Interfaces\TestimonialRepositoryInterface;

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

class TestimonialService
{
    private $_testimonialRepository;

    public function __construct(TestimonialRepositoryInterface $testimonialRepository)
    {
        $this->_testimonialRepository = $testimonialRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_testimonialRepository->all($perPage, $searchText);
    }

    public function store($request)
    {
        return $this->_testimonialRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_testimonialRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_testimonialRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_testimonialRepository->destroy($id);
    }

    public function getPostBySlug($slug)
    {
        return $this->_testimonialRepository->getPostBySlug($slug);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_testimonialRepository->updatePublishStatus($request, $id);
    }
}
