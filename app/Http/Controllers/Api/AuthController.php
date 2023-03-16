<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{

    private $success = false;
    private $message = '';
    private $data = [];


    public function login(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                $token = $user->createToken('API Token')->accessToken;

                if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                    return response([
                        'message' => 'Email must be verified.'
                    ], 401);
                }

                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }

    public function user()
    {
        return response()->json(Auth::user());
    }

    public function updateProfile(Request $request)
    {
        $id = $request->user()->id;
        $obj = User::find($id);
        if ($obj) {

            if ($image = $request->file('image')) {
                $destinationPath = 'profileImage/';
                $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
                $image->move($destinationPath, $profileImage);
                $input['image'] = "$profileImage";
                $obj->avatar = $profileImage;
            }
            if (!empty($request->input('first_name'))) {
                $obj->first_name = $request->input('first_name');
            }
            if (!empty($request->input('email'))) {
                $obj->email = $request->input('email');
            }
            if (!empty($request->input('password'))) {
                $obj->password = Hash::make($request->input('password'));
            }
            if (!empty($request->input('contact_number'))) {
                $obj->contact_number = $request->input('contact_number');
            }
            if (!empty($request->input('country'))) {
                $obj->country = $request->input('country');
            }
            if (!empty($request->input('status'))) {
                $obj->status = $request->input('status');
            }
            if ($obj->save()) {
                $this->data = $obj;
                $this->success = True;
                $this->message = 'Profile is updated successfully';
            }
        }

        return response()->json(['success' => $this->success, 'message' => $this->message, 'data' => $this->data,]);
    }



    public function updateVender(Request $request ,$id)
    {
        $obj = User::find($id);
        if ($obj) {
            if (!empty($request->input('first_name'))) {
                $obj->first_name = $request->input('first_name');
            }
            if (!empty($request->input('email'))) {
                $obj->email = $request->input('email');
            }
            if (!empty($request->input('password'))) {
                $obj->password = Hash::make($request->input('password'));
            }
            if (!empty($request->input('contact_number'))) {
                $obj->contact_number = $request->input('contact_number');
            }
            if (!empty($request->input('country'))) {
                $obj->country = $request->input('country');
            }
            if (!empty($request->input('status'))) {
                $obj->status = $request->input('status');
            }
            if (!empty($request->input('city'))) {
                $obj->city = $request->input('city');
            }
            if (!empty($request->input('gender'))) {
                $obj->gender = $request->input('gender');
            }
            if (!empty($request->input('age'))) {
                $obj->age = $request->input('age');
            }
            if (!empty($request->input('postalCode'))) {
                $obj->postalCode = $request->input('postalCode');
            }

            if ($obj->save()) {
                $this->data = $obj;
                $this->success = True;
                $this->message = 'Profile is updated successfully';
            }
        }

        return response()->json(['success' => $this->success, 'message' => $this->message, 'data' => $this->data,]);
    }


    public function index()
    {
        $data = User::latest()->with('location:user_id,note,magnitude,longitude',)->get();
        if (is_null($data)) {
            return response()->json([
                'success' => 'Falls',
                'message' => 'data not found'
            ],);
        }
        return response()->json([
            'success' => 'True',
            'message' => 'All Data susccessfull',
            'data' => $data,
        ]);
    }

    public function show($id)
    {
        $program = User::find($id);
        if (is_null($program)) {
            return response()->json([
                'success' => 'Falls',
                'message' => 'data not found'
            ], 404);
        }
        return response()->json([
            'success' => 'True',
            'data' => $program,
        ]);
    } 
    
    public function destroy($id)
    {
        $User= User::find($id);
       if (!empty($User)) {
        $User->delete();
        return response()->json([
            'success'=>true,
            'message'=>'User delete successfuly',
        ],200);
    }
    else {
        return response()->json([
            'success'=>false,
            'message'=>'something wrong try again ',
        ]);
    }  
    }

}
