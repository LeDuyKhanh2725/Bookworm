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
        // $booklist = Book::all();
        $booklist = DB::table('book')
        ->join('category', 'book.category_id', '=', 'category.id')
        ->join('author','book.author_id','=','author.id')
        ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
        ->select('book.id','book.book_title','book.book_cover_photo','book.book_price',
            'discount.discount_price','author.author_name')
        ->get();

        return $booklist;
    }

    //Filter by category
    public function Filter_by_category($id)
    {
//        $category_book = DB::table('category')->orderby('id', 'desc')->get();
        $bookfiltercate = DB::table('book')
            ->join('category', 'book.category_id', '=', 'category.id')
            ->join('author','book.author_id','=','author.id')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->select('book.id','book.book_title','book.book_cover_photo','book.book_price',
            'discount.discount_price','author.author_name')
            ->where('category.id', $id)
            ->get();
        return $bookfiltercate;
    }

    //Filter by author
    public function Filter_by_author($id)
    {
//        $author_book = DB::table('author')->orderby('id', 'desc')->get();
        $booklistsort = DB::table('book')
            ->join('author', 'book.author_id', '=', 'author.id')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->select('book.id','book.book_title','book.book_cover_photo','book.book_price',
            'discount.discount_price','author.author_name')
            ->where('author.id', $id)
            ->get();
        return $booklistsort;
    }

    //Filter by star
    public function Filter_by_star($id)
    {
//        $author_book = DB::table('book')->orderby('id', 'desc')->get();
//        $booklistsort = DB::table('review')
//            ->join('book', 'review.book_id', '=', 'review.id')
//            ->select('review.book_id')
//            ->selectRaw('avg(review.rating_start) as avg_ratingstar')
//            ->havingRaw('avg_ratingstar','>=',$id)
//            ->groupBy('review.book_id')
//            ->get();
//        return $booklistsort;
    }

    public function Sort_by_onsale()
    {
//        $discount_book = DB::table('discount')->get();
        $book_onsale = DB::table('book')
            ->join('discount', 'book.id', '=', 'discount.book_id')
            ->join('author', 'book.author_id', '=', 'author.id')
            ->select('book.id','book.book_title','book.book_cover_photo',
            'book.book_price','author.author_name','discount.discount_price')
            ->get();
        return $book_onsale;
    }

    public function Sort_by_popular()
    {
        $popularbook = DB::table('book')
        ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
        ->join('review', 'book.id', '=', 'review.book_id')
        ->join('author','book.author_id','=','author.id')
        ->select('review.book_id','book.book_title','book.book_cover_photo','book.book_price',
        'author.author_name','discount.discount_price')
        ->selectRaw('count(review.rating_start) as total_review')
        ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
        ->groupBy('review.book_id','book.book_title','author.author_name','book.book_cover_photo',
        'discount.discount_price', 'book.book_price')
        ->orderByDesc('total_review')
        ->orderBy('final_price')
        ->get();
        return $popularbook;
    }

    public function Sort_lowtohigh_price()
    {
//        $discount = DB::table('discount')->get();
        $sort_low = DB::table('book')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->join('author', 'book.author_id', '=', 'author.id')
            ->select('book.id','book.book_title','book.book_cover_photo','book.book_price',
            'discount.discount_price','author.author_name')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('book.id', 'discount.discount_price', 'book.book_price','author.author_name')
            ->orderBy('final_price')
            ->get();
        return $sort_low;
    }

    public function Sort_hightolow_price()
    {
//        $discount = DB::table('discount')->get();
        $sort_high = DB::table('book')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('book.id','book.book_title','book.book_cover_photo','book.book_price',
            'discount.discount_price','author.author_name')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('book.id', 'discount.discount_price', 'book.book_price','author.author_name')
            ->orderByDesc('final_price')
            ->get();
        return $sort_high;
    }


    public function show_product_per_page(Request $request)
    {
        $size = $request->query('size');
        $booklist = Book::orderby('id', 'DESC')->paginate($size);
        print_r($size);

        return $booklist;
    }

    public function show_30_per_page()
    {
        $booklist = Book::orderby('id', 'DESC')->paginate(30);

        return $booklist;
    }


    public function BookRecomment()
    {
        $recommentbook = DB::table('book')
            ->join('review', 'book.id', '=', 'review.book_id')
            ->join('author','book.author_id','=','author.id')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->select('review.book_id','book.book_title','book.book_price','book.book_cover_photo',
            'author.author_name','discount.discount_price')
            ->selectRaw('avg(review.rating_start) as avg_ratingstar')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('review.book_id', 'discount.discount_price', 'book.book_price',
            'book.book_title','book.book_cover_photo','author.author_name')
            ->orderByDesc('avg_ratingstar')
            ->orderBy('final_price')
            ->limit(8)
            ->get();

        return $recommentbook;
    }

    public function Bookpopular()
    {
        $popularbook = DB::table('book')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->join('review', 'book.id', '=', 'review.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('review.book_id','book.book_title','book.book_cover_photo','book.book_price',
            'author.author_name','discount.discount_price')
            ->selectRaw('count(review.rating_start) as total_review')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('review.book_id','book.book_title','author.author_name','book.book_cover_photo',
            'discount.discount_price', 'book.book_price')
            ->orderByDesc('total_review')
            ->orderBy('final_price')
            ->limit(8)
            ->get();
        return $popularbook;
    }

    public function Bookmostdiscount()
    {
        $bookcarousel = DB::table('book')
            ->join('discount', 'book.id', '=', 'discount.book_id')
            ->join('author', 'book.author_id', '=', 'author.id')
            ->select('book.id','book.book_title','book.book_price',
            'book.book_cover_photo','author.author_name','discount.discount_price')
            ->selectRaw('book.book_price-discount.discount_price as discount_sub')
            ->orderByDesc('discount_sub')
            ->limit(10)
            ->get();

        return $bookcarousel;
    }

    public function Allbookmostdiscount()
    {
        $allbookcarousel = DB::table('book')
        ->join('discount', 'book.id', '=', 'discount.book_id')
        ->join('author', 'book.id', '=', 'author.id')
        ->select('book.id','book.book_title','book.book_price',
        'book.book_cover_photo','author.author_name','discount.discount_price')
        ->selectRaw('book.book_price-discount.discount_price as discount_sub')
        ->orderByDesc('discount_sub')
        ->get();

        return $allbookcarousel;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $bookdetail = Book::find($id);
        // return $bookdetail;

        // $author_book= DB::table('author')->orderby('id','desc')->get();
        // $category_book= DB::table('category')->orderby('id','desc')->get();
        // $bookdetail = DB::table('book')
        // ->join('category','book.category_id','=','category.id')
        // ->join('author','book.author_id','=','author.id')
        // ->where('book.id',$id)->get();
        // return $bookdetail;


        $bookdetail = \App\Models\Book::with(['author', 'category'])->get();
        return $bookdetail;

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
