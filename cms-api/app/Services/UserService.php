<?php

namespace App\Services;

use App\Repositories\Interfaces\UserRepositoryInterface;

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

class UserService
{
    private $_userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->_userRepository = $userRepository;
    }

    public function all($perPage, $searchText)
    {
        return $this->_userRepository->all($perPage, $searchText);
    }

    public function store($request)
    {
        return $this->_userRepository->store($request);
    }

    public function update($request, $id)
    {
        return $this->_userRepository->update($request, $id);
    }

    public function updateProfile($request, $id)
    {
        return $this->_userRepository->updateProfile($request, $id);
    }

    public function changePassword($request, $id)
    {
        return $this->_userRepository->changePassword($request, $id);
    }

    public function show($id)
    {
        return $this->_userRepository->show($id);
    }

    public function destroy($id)
    {
        return $this->_userRepository->destroy($id);
    }

    public function updateUserActiveStatus($request, $id)
    {
        return $this->_userRepository->updateUserActiveStatus($request, $id);
    }
}
