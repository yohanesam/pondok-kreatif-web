<?php

namespace App\Http\Controllers\Auth;

// use Auth;
use App\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            $user = $this->guard()->user();
            $user->generateToken();
            $role = Role::where('role_user_id', $user->id)->first();
            return response()->json([
                'role_user_id' => $role->role_user_id,
                'role_id' => $role->role_id,
                'token' => $user->api_token
            ]);
        }

        return response()->json(["error", "data tidak sesuai"]);
    }

    public function logout(Request $request)
    {
        // $ror = array();
        $user = Auth::guard()->user();
        // $ror = $user->toArray();
        // echo $ror;
        if ($user) {
            echo json_encode($user);
            $user->api_token = null;
            $user->save();
            $request->session()->flush();
        }
        

        return response()->json(['data' => 'User logged out.'], 200);
    }
}
