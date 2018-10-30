<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'title' => $faker->company,
        'desc' => $faker->text,
        'price' => $faker->randomFloat(2,1,100),
    ];
});
