@extends('admin.layouts.main')

@section('content')
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
            <div class="row flex-grow">
                <div class="col-lg-4 mx-auto">
                    <div class="auth-form-light text-left p-5">
                        <div class="brand-logo">
                            <!-- <h1>BCPCL</h1> -->
                            <img src="{{ asset('images/BCPCL.png') }}">
                        </div>
                        @if (session()->has('errmsg'))
                            <h4 class="text-danger">{{ session()->get('errmsg') }}</h4>
                        @endif
                        <h4>Hello! let's get started</h4>
                        <h6 class="font-weight-light">Sign in to continue.</h6>
                        <form class="pt-3" action="{{ route('login') }}" method="post">
                            @csrf
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg" name="email"
                                    id="exampleInputEmail1" placeholder="email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" name="password"
                                    id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="mt-3">
                                <button type="submit"
                                    class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN
                                    IN</button>
                            </div>
                            <div class="my-2 d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                    <label class="form-check-label text-muted"><input type="checkbox"
                                            class="form-check-input"> Keep me signed in </label>
                                </div>
                                <a href="#" class="auth-link text-black">Forgot password?</a>
                            </div>
                            {{-- <div class="mb-2 shadow-sm border w-75 mx-auto">
                                <img class="w-100" src="{{asset('images/captha.png')}}" alt="">
                            </div> --}}
                            <div class="text-center mt-4 font-weight-light"> Don't have an account? <a
                                    href="{{ route('register') }}" class="text-primary">Create</a>
                            </div>

                            <div class="text-center mt-3">
                                <a href="{{ route('/') }}" class="text-info">Back to Home</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
