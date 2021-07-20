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
                        <h4>New here?</h4>
                        <h6 class="font-weight-light">Signing up is easy. It only takes a few steps.
                            {{ Route::currentRouteName() }}</h6>
                        <form class="pt-3" action="{{ route('register') }}" method="post">
                            @csrf
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg" name="name"
                                    value="{{ old('name') }}" {{ $errors->has('name') ? 'border-danger' : '' }}"
                                    id="name" placeholder="Name">
                                @error('name')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('name') }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg" name="email"
                                    value="{{ old('email') }}" {{ $errors->has('email') ? 'border-danger' : '' }}"
                                    id="email" placeholder="Email">
                                @error('email')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('email') }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg" name="phone"
                                    value="{{ old('phone') }}" {{ $errors->has('phone') ? 'border-danger' : '' }}"
                                    id="phone" placeholder="Mobile Number">
                                @error('phone')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('phone') }}</span>
                                @enderror
                            </div>


                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" name="password" id="password"
                                    {{ $errors->has('password') ? 'border-danger' : '' }}" placeholder="Password">
                                @error('password')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('password') }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" name="password_confirmation"
                                    {{ $errors->has('password') ? 'border-danger' : '' }}" id="password_confirmation"
                                    placeholder="Confirm Password">
                                @error('password')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('password') }}</span>
                                @enderror
                            </div>

                            <div class="form-group">
                                <textarea class="form-control form-control-lg" name="phone_number"
                                    {{ $errors->has('phone_number') ? 'border-danger' : '' }}" id="phone_number"
                                    placeholder="address" cols="4" rows="4"></textarea>
                                @error('password')
                                    <span class="text-danger font-weight-bold">{{ $errors->first('password') }}</span>
                                @enderror
                            </div>

                            <div class="mt-3">
                                <button type="submit"
                                    class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                                    href="profile.php">REGISTER</button>
                            </div>
                            <div class="my-2 d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                    <label class="form-check-label text-muted d-inline-block"><input type="checkbox"
                                            class="form-check-input"> I agree to </label><a href="#">Tearms and
                                        condition</a>
                                </div>
                            </div>
                            <div class="text-center mt-4 font-weight-light"> Already have an account? <a
                                    href="{{ route('login') }}" class="text-primary">Login</a>
                            </div>

                            <div class="text-center mt-3">
                                <a href="{{ route('/') }}" class="text-info">Back to Home</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
    </div>
@endsection
