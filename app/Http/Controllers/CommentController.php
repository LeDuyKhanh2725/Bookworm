<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Review;
use Illuminate\Support\Facades\App;
use App\Models\Book;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function Sort_comment_newest($id)
    {
//        $comment = DB::table('book')->get();
        $sort_comment = DB::table('review')
            ->join('book', 'review.book_id', '=', 'book.id')
            ->where('book.id', $id)
            ->select('book.id', 'review.review_date', 'review.rating_start')
            ->orderByDesc('review.review_date')
            ->get();
        return $sort_comment;
    }

    public function Sort_comment_oldest($id)
    {
//        $comment = DB::table('book')->get();
        $sort_comment = DB::table('review')
            ->join('book', 'review.book_id', '=', 'book.id')
            ->where('book.id', $id)
            ->select('book.id', 'review.review_date', 'review.rating_start')
            ->orderBy('review.review_date')
            ->get();
        return $sort_comment;
    }

//    public function Show_comment_per_page($id){
//        $comment_perpage = DB::table(book)
//            ->join('review','book.id','=','review.book_id')
//            ->where('book.id',$id)
//            ->select('book.id','review.review_date','review.rating_start')
//            ->orderBy('review.review_date')
//            ->paginate(20)
//            ->get();
//
//        return $comment_perpage;
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
