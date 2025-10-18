<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Quiz extends Model
{
    //
    
    use HasFactory;
    
    protected $fillable = [
        'course_id',
        'question',
        'options',
        'correct_answer',
    ];

    protected $casts = [
        'options' => 'array'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
