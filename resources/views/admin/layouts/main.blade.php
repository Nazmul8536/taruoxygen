<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>BCPCL | Job Portal</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="{{ asset('employee/assets/vendors/mdi/css/materialdesignicons.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('employee/assets/vendors/css/vendor.bundle.base.css') }}" />
    <!-- Layout styles -->
    <link rel="stylesheet" href="{{ asset('employee/assets/css/buttons.dataTables.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('employee/assets/css/jquery.dataTables.css') }}" />
    <link rel="stylesheet" href="{{ asset('employee/assets/css/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('employee/assets/css/custom.css') }}" />
    <link rel="stylesheet" href="{{ asset('employee/css/style.css') }}" />
    <!-- End layout styles -->
    <link rel="shortcut icon" href="{{ asset('employee/assets/images/BCPCL-mini.png') }}" />
</head>


<body>
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        @if (Route::currentRouteName() != 'login' && Route::currentRouteName() != 'otp' && Route::currentRouteName() != 'signup')
            @include('admin.layouts.navbar')
        @endif
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <!-- partial -->
            @if (Route::currentRouteName() != '/' && Route::currentRouteName() != 'login' && Route::currentRouteName() != 'signup' && Route::currentRouteName() != 'otp')
                @include('admin.layouts.sidebar')
            @endif

            @yield('content')
            <!-- main-panel ends -->
            <!-- content-wrapper ends -->
            <!-- partial:partials/_footer.html -->

            <!-- partial -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

    <!-- plugins:js -->
    <script src="{{ asset('employee/assets/vendors/js/vendor.bundle.base.js') }}"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="{{ asset('employee/assets/vendors/chart.js/Chart.min.js') }}"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="{{ asset('employee/assets/js/off-canvas.js') }}"></script>
    <script src="{{ asset('employee/assets/js/hoverable-collapse.js') }}"></script>
    <script src="{{ asset('employee/assets/js/file-upload.js') }}"></script>
    <script src="{{ asset('employee/assets/js/misc.js') }}"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    {{-- <script src="{{ asset('employee/assets/js/dataTables.buttons.min.js')}}"></script>
	<script src="{{ asset('employee/assets/js/jquery.dataTables.min.js')}}"></script> --}}
    <script src="{{ asset('employee/assets/js/dashboard.js') }}"></script>
    <script src="{{ asset('employee/assets/js/todolist.js') }}"></script>


    <script type="text/javascript" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.7.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.colVis.min.js"></script>
    <script src="{{ asset('employee/assets/js/custom.js') }}"></script>
    <!-- End custom js for this page -->

    <script src="https://cdn.ckeditor.com/ckeditor5/25.0.0/classic/ckeditor.js"></script>

    <script>
        @if (Route::currentRouteName() != '/')
            ClassicEditor
            .create( document.querySelector( '#exp_responsibilities' ) )
            .catch( error => {
            console.error( error );
            });
        
            // ClassicEditor
            // .create( document.querySelector( '#responsibilities2' ) )
            // .catch( error => {
            // console.error( error );
            // });
        
            ClassicEditor
            .create( document.querySelector( '#exp_achievements' ) )
            .catch( error => {
            console.error( error );
            });
        
            // ClassicEditor
            // .create( document.querySelector( '#achievements2' ) )
            // .catch( error => {
            // console.error( error );
            // });
        
            ClassicEditor
            .create( document.querySelector( '#training_description' ) )
            .catch( error => {
            console.error( error );
            });
        
            // ClassicEditor
            // .create( document.querySelector( '#training_description2' ) )
            // .catch( error => {
            // console.error( error );
            // });
        
            ClassicEditor
            .create( document.querySelector( '#extracurricular_description' ) )
            .catch( error => {
            console.error( error );
            });
        @endif
    </script>
    @stack('js')

    <script type="text/javascript">
        $(function() {
            $('body').on('show.bs.modal', '.candidate_job_apply', function(e) {

            });

            $(document).on('hide.bs.modal', '.candidate_job_apply', function(e) {

            });

            $('body').on('click', '.apply_modal_click', function() {
                let jobid = $(this).data('job_id')
                let action = $(this).data('action');
                let circular_id = $(this).data('circular_id');

                $.ajax({
                    url: action,
                    method: "post",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        job_id: jobid
                    },
                    success: function(response) {
                        $('.table_job_title').text(response.data.job_title);
                        $('.job_label').text(response.data.job_title);
                        $('#job_id').val(response.data.id)
                        $('.single_job_amount').text(response.data.job_amount)
                        $('#job_total_amount').val(response.data.job_amount)
                        $('#circular_id').val(circular_id)
                    }
                })
            })
        });
    </script>
</body>

</html>
