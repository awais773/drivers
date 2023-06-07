<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }

            return response()->json($user);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }
    public function addVender(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'contact_number' => $request->input('contact_number'),
                'email' => $request->input('email'),
                'country' => $request->input('country'),
                'city' => $request->input('city'),
                'province' => $request->input('province'),
                'postalCode' => $request->input('postalCode'),
                'age' => $request->input('age'),
                'status' => 'new',
                'gender' => $request->input('gender'),
                'user_type' => 2,
                'type' => $request->input('type'),
                'pic_lat' => $request->input('pic_lat'),
                'pic_long' => $request->input('pic_long'),
                'kitchen_name' => $request->input('kitchen_name'),
                'ratting' => $request->input('ratting'),
                'password' => Hash::make($request->input('password')),
            ]);
            
            $location = null; // Initialize the $location variable outside the loop
            
            foreach ($request->input('longitude') as $key => $longitude) {
                $latitude = $request->input('latitude')[$key];
                $note = $request->input('note')[$key];
                $box = $request->input('box')[$key];
                $location = new Location();
                $location->longitude = $longitude;
                $location->latitude = $latitude;
                $location->box = $box;
                $location->note = $note;
                $location->user_id = $user->id;
                $location->save();
            }
            
    
            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }
    
            return response()->json([
                'success'=>true,
                'message'=>'Vendor added successfully.',
                'data'=>$user,
                'location'=> $location // Return the last saved location
            ] ,200);
        } catch (\Exception $e) {
            return response([
                $e->getMessage()
            ], 400);
        } 


    }


    public function addOrder(Request $request)
    {
        try {
            $user = Auth::guard('api')->user();
            $location = null; 
            foreach ($request->input('longitude') as $key => $longitude) {
                $latitude = $request->input('latitude')[$key];
                $note = $request->input('note')[$key];
                $box = $request->input('box')[$key];
                $location = new Location();
                $location->longitude = $longitude;
                $location->latitude = $latitude;
                $location->box = $box;
                $location->note = $note;
                $location->kitchen_id = $user->id;
                $location->save();
            }
    
            return response()->json([
                'success'=>true,
                'message'=>'order added successfully.',
                'location'=> $location // Return the last saved location
            ] ,200);
        } catch (\Exception $e) {
            return response([
                $e->getMessage()
            ], 400);
        } 


    }


    public function addRiderSignup(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'contact_number' => $request->input('contact_number'),
                'email' => $request->input('email'),
                'country' => $request->input('country'),
                'city' => $request->input('city'),
                'province' => $request->input('province'),
                'postalCode' => $request->input('postalCode'),
                'age' => $request->input('age'),
                'status' => 'new',
                'gender' => $request->input('gender'),
                'type' => $request->input('type'),
                'pic_lat' => $request->input('pic_lat'),
                'pic_long' => $request->input('pic_long'),
                'kitchen_name' => $request->input('kitchen_name'),
                'ratting' => $request->input('ratting'),
                'password' => Hash::make($request->input('password')),
            ]);
            
    
            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }
    
            return response()->json([
                'success'=>true,
                'message'=>'Vendor added successfully.',
                'data'=>$user,
            ] ,200);
        } catch (\Exception $e) {
            return response([
                $e->getMessage()
            ], 400);
        } 


    }
  
  


    

}
