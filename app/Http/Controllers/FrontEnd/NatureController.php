<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class NatureController extends Controller
{
    public function index()
    {
        $posts = Post::where("category_id", 3)->select(["title", "excerpt", "id"])->get()->toJson();
        return $posts;
    }
}
