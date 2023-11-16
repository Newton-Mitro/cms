<?php

namespace App\Repositories\Interfaces;

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

interface JobCircularRepositoryInterface
{
    public function all($perPage, $searchText);
    public function getPublicPosts();
    public function show($id);
    public function store($request);
    public function update($request, $id);
    public function destroy($id);
    public function getPostBySlug($slug);
    public function updatePublishStatus($request, $id);
}
