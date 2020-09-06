<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($postId)
    {
        $post = Post::where("id", $postId)->select("id", "title", "content", "created_at")->get()->toJson();
        return $post;
    }
}
