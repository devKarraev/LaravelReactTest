<?php

namespace App\Http\Controllers\FrontEnd;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SportController extends Controller
{
    public function index()
    {
        $posts = Post::where("category_id", 2)->select(["title", "excerpt", "id"])->get()->toJson();
        return $posts;
    }
}
