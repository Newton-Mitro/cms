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

interface VisitorLogRepositoryInterface
{
    public function all($perPage, $searchText);
    public function show($id);
    public function store($request);
    public function todaysVisitorCount();
    public function totalVisitorCount();
}
