<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DemoResource;
use App\Models\demo;
use Illuminate\Http\Request;

class DemoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $demos = Demo::all();

        return DemoResource::collection($demos);
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
            
        ]);

        $demo = Demo::create($validatedData);
    
        
        return new DemoResource($demo);
    }

    /**
     * Display the specified resource.
     */
    public function show(Demo $demo)
    {

        return new DemoResource($demo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Demo $demo)
    {
        $validatedData = $request->validate([
            "name" => ["nullable", "string"],
            "lesson_for" => ["nullable", "string", "in:myself,child,other"],
            "mobile" => ["nullable", "string"],
            "email" => ["nullable", "email"],
            "goals" => ["nullable", "string"],
            
        ]);

        $demo->update($validatedData);


        return new DemoResource($demo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Demo $demo)
    {
        $demo->delete();

        return response()->noContent();
    }
}
