@extends('admin.layouts.main')

@section('content')
    <div class="main-panel">
        <div class="content-wrapper">

            <div class="page-header border border-none bg-white">
                <h3 class="page-title"> Categories </h3>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Menus</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Categories</li>
                    </ol>
                </nav>
            </div>

            <div class="main_content">
                <div class="row  justify-content-center">
                    <div class="col-md-5">
                        <div class="card">
                            <div class='card-header'>
                                <h5 class="mb-0">Create Category Item </h5>
                            </div>
                            @if (session()->has('message'))
                                <div class="alert alert-info">{{ session()->get('message') }}</div>
                            @endif
                            <form method="post" action="">
                                @csrf
                                <div class="card-body">
                                    <div class="form-row">
                                        {{-- <div class="mb-3 col-md-12"> --}}

                                        {{-- <label for="exampleFormControlInput1" class="form-label">Lookup Type <b
                                                    class='text-danger'>*</b> </label> --}}

                                        {{-- <select id="lookup_type" name="lookup_type" @error('lookup_type')
                                                style="border-color: red;" @enderror class="form-control">
                                                <option value="">Select Lookup No</option>
                                                @foreach ($lookup_arr as $key => $lookup)
                                                    <option value="{{ $key }}">{{ $lookup }}</option>
                                                @endforeach
                                            </select> --}}
                                        {{-- @error('lookup_type')
                                                {{ $message }}
                                            @enderror
                                        </div> --}}
                                        <div class="mb-4 col-md-12">
                                            <label for="exampleFormControlInput1" class="form-label">Look Value <b
                                                    class='text-danger'>*</b></label>
                                            <input type="text" class="form-control" @error('lookup_value')
                                                style="border-color: red;" @enderror id="lookup_value" name="lookup_value"
                                                placeholder="Lookup Value">
                                            @error('lookup_value')
                                                {{ $message }}
                                            @enderror
                                        </div>
                                        <div class="mb-4 col-md-12">
                                            <label for="exampleFormControlInput1" class="form-label">Look Value <b
                                                    class='text-danger'>*</b></label>
                                            <input type="text" class="form-control" @error('lookup_value')
                                                style="border-color: red;" @enderror id="lookup_value" name="lookup_value"
                                                placeholder="Lookup Value">
                                            @error('lookup_value')
                                                {{ $message }}
                                            @enderror
                                        </div>
                                        <div class="mb-4 col-md-12">
                                            <label for="exampleFormControlInput1" class="form-label">Look Value <b
                                                    class='text-danger'>*</b></label>
                                            <input type="text" class="form-control" @error('lookup_value')
                                                style="border-color: red;" @enderror id="lookup_value" name="lookup_value"
                                                placeholder="Lookup Value">
                                            @error('lookup_value')
                                                {{ $message }}
                                            @enderror
                                        </div>

                                        <div class="mb-3 col-md-12">
                                            <div class="form-check form-check-inline">
                                                <label for="exampleFormControlInput1" class="form-label">Status <b
                                                        class='text-danger'>*</b></label>
                                                <br />
                                                <input class="form-check-input" type="checkbox" id="status" name="status"
                                                    value="1">
                                                <label class="form-check-label-inline" for="inlineCheckbox1">Active</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-sm btn-success" type="submit">Save</button>
                                    <button class="btn btn-sm btn-info" type="button">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
