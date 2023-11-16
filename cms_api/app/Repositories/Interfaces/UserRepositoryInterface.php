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

interface UserRepositoryInterface
{
    public function all($perPage, $searchText);
    public function updateUserActiveStatus($request, $id);
    public function store($request);
    public function update($request, $id);

    public function updateProfile($request, $id);
    public function changePassword($request, $id);
    public function destroy($id);
    public function show($id);
}
