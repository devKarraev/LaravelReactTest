<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Carbon\Carbon;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $result = [];

        for ($i = 0; $i < 700; $i++) {
            $result[] = [
                "title"       => $faker->sentence(rand(3, 8), true),
                "content"     => $faker->realText(rand(1000, 4000)),
                "category_id" => rand(1, 5),
                "excerpt"     => $faker->text(rand(40, 100)),
                "created_at"  => Carbon::today()->toDateString()
            ];
        }

        \Illuminate\Support\Facades\DB::table("posts")->insert($result);
    }
}
