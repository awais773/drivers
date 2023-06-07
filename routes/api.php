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
Route::post('kitchenlogin', [Api\AuthController::class, 'kitchenlogin']);
Route::post('adminlogin', [Api\AuthController::class, 'adminlogin']);
Route::delete('delete/{id}', [Api\AuthController::class, 'destroy']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('addVender', [Api\RegisterController::class, 'addVender']);
Route::post('addRiderSignup', [Api\RegisterController::class, 'addRiderSignup']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
Route::put('updateVender/{id}', [Api\AuthController::class, 'updateVender']);



Route::get('/users', [App\Http\Controllers\Api\AuthController::class, 'index']);
Route::get('/getuser/{id}', [App\Http\Controllers\Api\AuthController::class, 'show']);
Route::post('status/{id}', [Api\AuthController::class, 'status']);
Route::get('/kitchenGet', [App\Http\Controllers\Api\AuthController::class, 'kitchenGet']);
Route::get('/riderGet', [App\Http\Controllers\Api\AuthController::class, 'riderGet']);
Route::post('/RiderAssign', [App\Http\Controllers\Api\AuthController::class, 'RiderAssign']);
Route::get('/Assigngets', [App\Http\Controllers\Api\AuthController::class, 'Assigngets']);
Route::put('/updateLocation/{id}', [App\Http\Controllers\Api\AuthController::class, 'updateLocation']);



Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);
Route::get('/location', [App\Http\Controllers\Api\AuthController::class, 'location']);
Route::post('addOrder', [Api\RegisterController::class, 'addOrder']);




});
