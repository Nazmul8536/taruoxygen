@extends('admin.layouts.main')

@section('content')
    <div class="main-panel">

        <div class="content-wrapper">
            <div class="row">
                <div class="main_content col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Catergory List</h5>
                        </div>
                        <div class="card-body">


                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#sl</th>
                                        <th>Category Name</th>
                                        <th>Category Type</th>
                                        <th>Category Details</th>
                                        <th>Created By</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($category->getData()->data as $cat)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $cat->cat_name }}</td>
                                            <td>{{ $cat->cat_type }}</td>
                                            <td>{{ $cat->cat_details }}</td>
                                            <td>{{ $cat->created_by }}</td>
                                            @php
                                                $active = 'Active';
                                                $inactive = 'In Active';
                                                
                                            @endphp
                                            <td>{{ $cat->status == 1 ? $active : $inactive }}</td>
                                            <td><button class="btn btn-action btn-danger"><i
                                                        class="mdi mdi-delete"></i></button> <button
                                                    class="btn btn-action btn-success"><i
                                                        class="mdi mdi-pencil"></i></button>
                                            </td>
                                        </tr>
                                    @endforeach

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>


                <div class="create_content col-md-4 mt-3">
                    <div class="justify-content-center">
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
    @endsection
