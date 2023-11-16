<?php

namespace App\Repositories\Interfaces;

/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  israfil@gmail.com
 * @repo           :
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *------------------------------------------------------------------------**/

interface MenuRepositoryInterface
{
    public function all();
    public function publicRootMenus();
    public function adminRootMenus();
    public function store($request);
    public function update($request, $id);
    public function show($id);
    public function destroy($id);
}
