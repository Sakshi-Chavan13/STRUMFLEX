<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            "name" => ["nullable", "string"],
            "lesson_for" => ["nullable", "string", "in:myself,child,other"],
            "mobile" => ["nullable", "string"],
            "email" => ["nullable", "email"],
            "goals" => ["nullable", "string"],
            "want_pdf" => ["nullable", "boolean"],
            "status" => ["nullable", "string"],
            "guitar_available" => ["nullable", "boolean"],
            "guitar_played_before" => ["nullable", "boolean"],
            "days" => ["nullable", "string"],
            "learning_method" => ["nullable", "string"],
            "hidden_field" => ["nullable", "string"],
            "shift"=> ["nullable","string"],
            "token" => ["nullable", "string"]

        ]);

        $user = User::create($validatedData);
       

        
        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validatedData = $request->validate([
            "name" => ["nullable", "string"],
            "lesson_for" => ["nullable", "string", "in:myself,child,other"],
            "mobile" => ["nullable", "string"],
            "email" => ["nullable", "email"],
            "goals" => ["nullable", "string"],
            "want_pdf" => ["nullable", "boolean"],
            "status" => ["nullable", "string"],
            "guitar_available" => ["nullable", "boolean"],
            "guitar_played_before" => ["nullable", "boolean"],
            "days" => ["nullable", "string"],
            "learning_method" => ["nullable", "string"],
            "hidden_field" => ["nullable", "string"],
            "token" => ["nullable", "string"]
        ]);

        $user->update($validatedData);


        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->noContent();
    }
}
