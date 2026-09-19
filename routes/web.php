<?php

use Illuminate\Support\Facades\Route;

// Koi bhi URL aaye, wo welcome blade view load karega jahan React chali hui hai
Route::get('{any}', function () {
    return view('welcome');
})->where('any', '.*');
