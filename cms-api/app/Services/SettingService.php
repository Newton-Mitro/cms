<?php

namespace App\Services;

use App\Repositories\Interfaces\SettingRepositoryInterface;

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

class SettingService
{
    private $_settingRepository;

    public function __construct(SettingRepositoryInterface $settingRepository)
    {
        $this->_settingRepository = $settingRepository;
    }

    public function all()
    {
        return $this->_settingRepository->all();
    }

    public function update($request, $id)
    {
        return $this->_settingRepository->update($request, $id);
    }

    public function show($id)
    {
        return $this->_settingRepository->show($id);
    }

}
