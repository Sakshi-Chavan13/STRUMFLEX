<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "lesson_for" => $this->lesson_for,
            "mobile"=> $this->mobile,
            "email" => $this->email,
            "goals"=> $this->goals,
            "want_pdf"=> $this->want_pdf,
            "status"=> $this->status,
            "guitar_available"=> $this->guitar_available,
            "guitar_played_before"=> $this->guitar_played_before,
            "days"=> $this->days,
            "learning_method"=> $this->learning_methods,
            "hidden_field" => $this->hidden_field,
            "token"=> $this->token
            
        ];
    }
}
