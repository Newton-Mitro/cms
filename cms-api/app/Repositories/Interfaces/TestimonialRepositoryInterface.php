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

interface TestimonialRepositoryInterface
{
    public function all($perPage, $searchText);
    public function store($request);
    public function update($request, $id);
    public function destroy($id);
    public function show($id);
    public function updatePublishStatus($request, $id);
    public function getPostBySlug($slug);
}
