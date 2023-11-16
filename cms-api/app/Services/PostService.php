<?php

namespace App\Services;

use App\Repositories\Interfaces\PostRepositoryInterface;

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

class PostService
{
    private $_postRepository;

    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->_postRepository = $postRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_postRepository->all($perPage, $searchText);
    }

    public function getPublicPosts()
    {
        return $this->_postRepository->getPublicPosts();
    }

    public function getPostBySlug($slug)
    {
        return $this->_postRepository->getPostBySlug($slug);
    }

    public function store($request)
    {
        return $this->_postRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_postRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_postRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_postRepository->destroy($id);
    }

    public function updatePublishStatus($request, $id)
    {
        return $this->_postRepository->updatePublishStatus($request, $id);
    }
}
