<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = app(Category::class);
        $data = $categories->select(["id", "title", "href"])->get()->toJson();
        return $data;
    }
}
