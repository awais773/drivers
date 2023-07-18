<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Location;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use App\Models\Assign;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{

    private $success = false;
    private $message = '';
    private $data = [];


    // public function login(LoginRequest $request)
    // {
    //     try {
    //         if (Auth::attempt($request->only('email', 'password'))) {
    //             /** @var User $user */
    //             $user = Auth::user();
    //             $token = $user->createToken('API Token')->accessToken;

    //             if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
    //                 return response([
    //                     'message' => 'Email must be verified.'
    //                 ], 401);
    //             }

    //             return response([
    //                 'message' => 'success',
    //                 'token' => $token,
    //                 'user' => $user
    //             ]);
    //         }
    //     } catch (\Exception $e) {
    //         return response([
    //             'message' => 'Internal error, please try again later.' //$e->getMessage()
    //         ], 400);
    //     }

    //     return response([
    //         'message' => 'Invalid Email or password.'
    //     ], 401);
    // }

     public function login(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                $user->device_token = $request->input('device_token');
                $user->save();
                if ($user->type === 'rider') { // Check if user type is 1
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
                else { // If user type is not 1
                    return response([
                        'success' => false,
                        'message' => 'Invalid Email or password.'
                    ], 401);
                }
            }
        } catch (\Exception $e) {
            return response([
                'success' => false,
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    
        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }



    public function kitchenlogin(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                if ($user->user_type === 2) { // Check if user type is 1
                    $token = $user->createToken('API Token')->accessToken;
                    if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                        return response([
                            'message' => 'Email must be verified.'
                        ], 401);
                    }
                    return response([
                        'success' => true,                       
                        'token' => $token,
                        'user' => $user,
                        'user_type' => $user->user_type // Include the user_type in the response
                    ]);
                }
                else { // If user type is not 1
                    return response([
                        'success' => false,
                        'message' => 'Invalid Email or password.'
                    ], 401);
                }
            }
        } catch (\Exception $e) {
            return response([
                'success' => false,
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    
        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }

    public function adminlogin(LoginRequest $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var User $user */
                $user = Auth::user();
                if ($user->user_type === 1) { // Check if user type is 1
                    $token = $user->createToken('API Token')->accessToken;
                    if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                        return response([
                            'message' => 'Email must be verified.'
                        ], 401);
                    }
                    return response([
                        'success' => true,                       
                        'token' => $token,
                        'user' => $user,
                        'user_type' => $user->user_type // Include the user_type in the response
                    ]);
                }
                else { // If user type is not 1
                    return response([
                        'success' => false,
                        'message' => 'Invalid Email or password.'
                    ], 401);
                }
            }
        } catch (\Exception $e) {
            return response([
                'success' => false,
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

   
    public function status(Request $request,$id)
    {
        $obj = User::find($id);
        if ($obj) {
          
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
        $user = Auth::guard('api')->user();
        $assign = Assign::where('rider_id', $user->id)->get();
        $assignedLocationIds = $assign->pluck('kitchen_id')->toArray();
        $data = User::with('location:user_id,note,latitude,longitude,box')
            ->whereIn('id', $assignedLocationIds)
            ->latest()
            ->get();
        if ($data->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found'
            ]);
        }
    
        return response()->json([
            'success' => true,
            'message' => 'All Data successful',
            'data' => $data
        ]);
    }

public function show($id)
{

    $averageRating = User::avg('ratting');
    $data = User::with('location:user_id,note,latitude,longitude')->where('id', $id)->first();

    if (!$data) {
        return response()->json([
            'success' => false,
            'message' => 'Data not found'
        ], 404);
    }

    $data['average_rating'] = $averageRating;

    return response()->json([
        'success' => true,
        'message' => 'Data successful',
        'data' => $data,
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

    public function location() {
        $user = Auth::guard('api')->user();
        $location = Location::where('user_id',$user->id)->get();
        if (is_null($location)) {
            return response()->json([
                'success' => false,
                'message' => 'data not fond'
            ],);
        }
        return response()->json([
            'success'=>true,
            'message'=>' All data successfully.',
            'date'=> $location 
        ] ,200);

    }


    public function riderGet() {
        $location = User::where('type','rider')->get();
        if (is_null($location)) {
            return response()->json([
                'success' => false,
                'message' => 'data not fond'
            ],);
        }
        return response()->json([
            'success'=>true,
            'message'=>' All data successfully.',
            'data'=> $location 
        ] ,200);

    }



    public function kitchenGet() {
        $location = User::where('type','kitchen')->get();
        if (is_null($location)) {
            return response()->json([
                'success' => false,
                'message' => 'data not fond'
            ],);
        }
        return response()->json([
            'success'=>true,
            'message'=>' All data successfully.',
            'data'=> $location 
        ] ,200);

    }

  
    public function RiderAssign(Request $request)
    {
        try {
            $rider = $request->input('rider_id');
            $location = null; 
            foreach ($request->input('kitchen_id') as $key => $longitude) {
                $location = new Assign();
                $location->kitchen_id = $longitude;
                $location->rider_id = $rider;
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


    public function Assigngets()
    {
        $assign = Assign::with('rider:id,first_name', 'kitchen:id,first_name')->get();
        
        $result = $assign->groupBy('rider_id')->map(function ($item) {
            $firstRider = $item->first()->rider;
            $kitchens = $item->pluck('kitchen')->flatten();
            $firstRider['kitchen'] = $kitchens;
            
            return $firstRider;
        })->values();
        
        if ($result->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found'
            ]);
        }
    
        return response()->json([
            'success' => true,
            'message' => 'All Data successful',
            'data' => $result
        ]);
    }
    


    public function updateLocation(Request $request, $id)
{
    $location = Location::find($id);
    if (!$location) {
        return response()->json(['message' => 'Location not found'], 404);
    }
    $box = $request->input('box');
    $note = $request->input('note');
    $location->box = $box;
    $location->note = $note;
    $location->save();
    $user = Auth::guard('api')->user();
    $locations = Assign::Where('kitchen_id',$user->id)->get();
    $notification = $locations->pluck('rider_id');
    $firebaseToken = User::whereIn('id', [$notification])->whereNotNull('device_token')->pluck('device_token')->all();
    $SERVER_API_KEY = 'AAAARhq1Ok4:APA91bFktsn5csGjbfYKsSoMzKUTO8eTHxEC3EHTHHnc41WRHgZ6PA_mKRU1jjzxsP0zyZPYWg_3CWdSiJ8BhxOjtZF4W3OZwxSDUYkzTydCo81L2LGz1bWGXj-vHJtZWG3ubg9lGBjv';
    $data = [
        "registration_ids" => $firebaseToken,
        "notification" => [
            "title" => 'Oder',
            "body" => 'Check New Order',
        ]
    ];
    $dataString = json_encode($data);

    $headers = [
        'Authorization: key=' . $SERVER_API_KEY,
        'Content-Type: application/json',
    ];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);

    $response = curl_exec($ch);   
    return response()->json([
        'message' => 'Location updated successfully', 
        'location' => $location,
        'data' => $response,
    ]);


}

    
  

}
