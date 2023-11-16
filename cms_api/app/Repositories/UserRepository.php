<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;


/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         :  Newton Mitro
 * @email          :  newtonmitro@gmail.com
 * @createdOn      :  08 Oct 2023
 * @updatedBy      :  Newton Mitro
 * @updatedAt      :  08 Oct 2023
 * @description     :
 *------------------------------------------------------------------------**/

class UserRepository implements UserRepositoryInterface
{

    public function all($perPage, $searchText)
    {
        return User::where('name', 'like', '%' . $searchText . '%')->orWhere('email', 'like', '%' . $searchText . '%')->orderBy('name', 'ASC')->paginate($perPage);
    }

    public function updateUserActiveStatus($request, $id)
    {
        $post = User::findOrFail($id);
        $post->status = $request->publishStatus;
        $post->update();
        return $post;
    }

    public function store($request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function update($request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        if ($request->role) {
            $user->role = $request->role;
        }

        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/users/' . $id . '.jpg';
            ;
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $user->photo = Storage::url($originalFilePath);
        } else {
            $user->photo = $request->photo;
        }

        $user->update();
        return $user;
    }

    public function updateProfile($request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        if ($request->base64Attachment) {
            $originalFilePath = 'public/images/users/' . $id . '.jpg';
            Storage::disk('local')->put($originalFilePath, base64_decode($request->base64Attachment, false));
            $user->photo = Storage::url($originalFilePath);
        } else {
            $user->photo = $request->photo;
        }
        $user->update();
        return $user;
    }

    public function changePassword($request, $id)
    {
        $user = User::findOrFail($id);
        if (Hash::check($request->old_password, $user->password)) {
            $user->password = Hash::make($request->password);
            $user->update();
            return $user;
        } else {
            throw ValidationException::withMessages(['old_password' => 'Incorrect password.']);
        }

    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $user;
    }
}
