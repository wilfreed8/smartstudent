<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
        return response()->json(Quiz::with('course')->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
         $data = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'question' => 'required|string',
            'options' => 'required|array',
            'correct_answer' => 'required|string',
        ]);
        
        $quiz = Quiz::create($data);
        return response()->json($quiz, 201);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'question' => 'required|string',
            'options' => 'required|array',
            'correct_answer' => 'required|string',
        ]);
        
        $quiz = Quiz::create($data);
        return response()->json($quiz, 201);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz)
    {
        //
         return response()->json($quiz->load('course'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quiz $quiz,Request $request)
    {
        //
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Quiz $quiz)
    {
        //
         $quiz->update($request->all());
        return response()->json($quiz);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        //
         $quiz->delete();
        return response()->json(['message' => 'Quiz supprimé avec succès']);
    }
}
