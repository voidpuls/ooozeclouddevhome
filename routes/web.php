<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('pages.home');
});

Route::get('/locations', function () {
    return view('pages.locations');
});

Route::get('/api/ping', [PingController::class, 'ping']);

// VPS Routes
Route::prefix('vps')->group(function () {
    Route::get('/', function () {
        return view('pages.vps.index');
    });
    Route::get('/premium', function () {
        return view('pages.vps.premium');
    });
    Route::get('/budget', function () {
        return view('pages.vps.budget');
    });
});

// Dedicated Server Routes
Route::prefix('dedicated')->group(function () {
    Route::get('/', function () {
        return view('pages.dedicated.index');
    });
    Route::get('/premium', function () {
        return view('pages.dedicated.premium');
    });
});

// Game Server Routes
Route::prefix('games')->group(function () {
    Route::get('/', function () {
        return view('pages.games.index');
    });
    Route::get('/{game}', function ($game) {
        return view('pages.games.show', ['game' => $game]);
    })->where('game', '.*');
});

// Other Routes
Route::get('/support', function () {
    return view('pages.support');
});

Route::get('/contact', function () {
    return view('pages.contact');
}); 