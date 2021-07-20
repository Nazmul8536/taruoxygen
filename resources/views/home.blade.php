@extends('admin.layouts.main')

@section('content')
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
            <div class="row flex-grow">
                <div class="col-lg-6 mx-auto">
                    <div class="auth-form-light text-left p-5 border border-info">
                        <div class="brand-logo">
                            <!-- <h1>BCPCL</h1> -->
                            <img src="{{ asset('images/BCPCL.png') }}">
                        </div>
                        @if (session()->has('errmsg'))
                            <h4 class="text-danger">{{ session()->get('errmsg') }}</h4>
                        @endif


                        <h1 class='text-bold text-info uppercase'>Welcome to Our Website !</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
