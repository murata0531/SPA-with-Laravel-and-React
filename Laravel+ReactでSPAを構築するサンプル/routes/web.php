<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!y
|
*/

//{any}を設定しておくことで、存在しないアドレスにアクセスしてもルートが表示される
Route::get('/{any}', function () {
    return view('welcome');
})->where('any','.*');

Auth::routes();

//localhost:8080/userにアクセスした際に、usersテーブルから要素を取り出してjson形式で値を渡す
Route::get('/user',function (Request $request) {
	
	$users = App\User::all();
	
	return response()->json(['users' => $users]);

});
