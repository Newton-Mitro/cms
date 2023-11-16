<?php

namespace App\Http\Resources\User;

use App\Utilities\LinkObject;
use Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    private function getActiveLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin') {
            return new LinkObject("inactive", "Activate User", route('users.updateUserActiveStatus', $this->id), "PATCH", 'fa-solid fa-face-smile');
        } else {
            return null;
        }
    }

    private function getInactiveLink()
    {
        if (Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin') {
            return new LinkObject("active", "Deactivate User", route('users.updateUserActiveStatus', $this->id), "PATCH", 'fa-solid fa-skull');
        } else {
            return null;
        }
    }

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'photo' => $this->photo ? asset($this->photo) : null,
            'role' => $this->role,
            'status' => $this->status,
            'links' => [
                new LinkObject("index", "Users", route('users.index'), "GET", 'fa-solid fa-list-ul'),
                $this->status ? $this->getInactiveLink() : $this->getActiveLink(),
                Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' ? new LinkObject("update", "Edit User", route('users.update', $this->id), "PUT", 'fa-solid fa-pen-to-square') : null,
                Auth::user()?->role === 'Super Admin' || Auth::user()?->role === 'Admin' ? new LinkObject("destroy", "Delete User", route('users.destroy', $this->id), "DELETE", 'fa-solid fa-trash-can') : null,
            ],
        ];
    }
}
