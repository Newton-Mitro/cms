<?php

namespace App\Services;

use App\Repositories\Interfaces\MenuRepositoryInterface;

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

class MenuService
{
    private $_menuRepository;

    public function __construct(MenuRepositoryInterface $menuRepository)
    {
        $this->_menuRepository = $menuRepository;
    }

    public function all()
    {
        return $this->_menuRepository->all();
    }

    public function store($request)
    {
        return $this->_menuRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_menuRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_menuRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_menuRepository->destroy($id);
    }

    public function publicRootMenus()
    {
        return $this->_menuRepository->publicRootMenus();
    }

    public function adminRootMenus()
    {
        return $this->_menuRepository->adminRootMenus();
    }
}
