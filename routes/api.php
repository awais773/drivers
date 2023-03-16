<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [Api\AuthController::class, 'login']);
Route::delete('delete/{id}', [Api\AuthController::class, 'destroy']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('addVender', [Api\RegisterController::class, 'addVender']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
Route::put('updateVender/{id}', [Api\AuthController::class, 'updateVender']);


Route::get('/users', [App\Http\Controllers\Api\AuthController::class, 'index']);
Route::get('/getuser/{id}', [App\Http\Controllers\Api\AuthController::class, 'show']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);
    Route::post('/status', [App\Http\Controllers\Api\AuthController::class, 'updateProfile']);

});
