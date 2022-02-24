<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Author;
use App\Models\Category;
use DB;


class BookControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     //Shop page
    public function index()
    {
        $booklist = Book::all();

        return $booklist ;
    }

    public function show_20_per_page()
    {
        $booklist = Book::orderby('id','DESC')->paginate(20);

        return $booklist ;
    }
    public function show_30_per_page()
    {
        $booklist = Book::orderby('id','DESC')->paginate(30);

        return $booklist ;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $bookdetail = Book::find($id);
        // return $bookdetail;


        $bookdetail = Book::find($id)
        ->join('author','author.id','=','book.author_id')
        ->join('categoty','categoty.id','=','book.categoty_id')
        ->select(['book.*','author.author_name','categoty.categoty_name'])->get();

        return $bookdetail;

        // $bookdetail = DB::table('book')
        // ->john('author','book.author_id','=','author.id')
        // ->john('categoty','book.categoty_id','=','categoty.id')
        // ->where('author.id','=',$id)->get();
        // return Response::json($bookdetail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
