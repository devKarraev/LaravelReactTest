<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("category_id");

            $table->string("title");
            $table->string("excerpt");
            $table->text("content");


            $table->softDeletes();
            $table->timestamps();

            $table->foreign("category_id")->references("id")->on("categories");
            $table->index("category_id");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}