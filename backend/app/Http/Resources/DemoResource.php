<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DemoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            "id" => $this->id,
            "name" => $this->name,
            "lesson_for" => $this->lesson_for,
            "mobile"=> $this->mobile,
            "email" => $this->email,
            "goals"=> $this->goals,
        ];
    }
}
