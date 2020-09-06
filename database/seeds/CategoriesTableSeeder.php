<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $result = [];
        $categories = ["Главная", "Спорт", "Природа", "Технологии", "Политика"];
        $hrefs = ["/", "/category/sport", "/category/nature", "/category/technologies", "/category/politic"];
        $i = -1;
        foreach ($categories as $category) {
            $i++;
            $result[] =[
                "title" => $category,
                "href"  => $hrefs[$i]
            ];
        }

        \Illuminate\Support\Facades\DB::table("categories")->insert($result);
    }
}
