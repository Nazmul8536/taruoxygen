$(function () {

    let trnssecid = 1;
    $('body').on('click', '.div_clone_button', function () {

        if (trnssecid > 3) {
            return false;
        }
        let jobblock = `
        <div class="clone_div${trnssecid} added_section job_block mt-4">
        <button type="button" class="section_delete job_delete" data-parentid="clone_div${trnssecid}"><i class="mdi mdi-minus"></i></button>
            <div class="card">
            
                <div class="card-body">
                    <div class="row justify-content-center mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="is_mandatory">Job Type <b class="text-danger">*</b></label>
                                <select class="form-control form-control-sm" required id="job_type" name="job_type[]">
                                    <option value="">Select</option>
                                    <option value="experienced">Experienced</option>
                                    <option value="general">General</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="minexp">Min Exp. </label>
                                <input type="text" class="form-control" name="minexp[]" id="minexp" placeholder="Min exp.">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="maxexp">Max Exp. </label>
                                <input type="text" class="form-control" name="maxexp[]" id="maxexp" placeholder="Max exp.">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3">
                            <div class="form-group mb-0">
                                <label class="" for="job_title">Job Title <b class="text-danger">*</b>
                                </label>
                                <div class="">
                                    <input type="text" required name="job_title[]"
                                    id="job_title" class="form-control"
                                    placeholder="Job Title" />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group mb-0">
                                <label class="" for="basic_salary">Basic Salary <b class="text-danger">*</b></label>
                                <div class="">
                                    <input type="text" class="form-control" required name="basic_salary[]"
                                    id="basic_salary" placeholder="Basic Salary" />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group mb-0">
                                <label class="" for="no_of_position">No. of Position <b class="text-danger">*</b></label>
                                <div class="">
                                    <input type="text" class="form-control" required name="no_of_position[]"
                                    id="no_of_position" placeholder="No. of Position" />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group mb-0">
                                <label class="" for="result_type">Age (as on date)</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="age[]" id="age" placeholder="25">
                                    <input type="date" class="form-control" name="as_on_date[]" id="as_on_date" placeholder="as on date">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="is_mandatory">is mandatory? </label>
                                <select class="form-control form-control-sm" id="is_mandatory" name="is_mandatory[]">
                                    <option value="">Select</option>
                                    <option value="y">Yes</option>
                                    <option value="n">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-row mb-4">
                        <div class="col-md-12">
                            <div class="form-group mb-0">
                                <label class="" for="qualification_details">Educational Qualification Details <b class="text-danger">*</b>
                                </label>
                                <div class="">
                                    <textarea name="qualification_details[]" required cols="4" rows="10"
                                    id="qualification_details" class="form-control"
                                    placeholder="Educational Qualification"></textarea>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="card">
                        <div class="card-header rounded-0"><h5 class="mb-0">Education Qualification</h5></div>
                        <div class="card-body">
                            <div class="education_block${trnssecid}">
                                <div class="added_section education_block_child${trnssecid} mb-4">
                                
                                    <button type="button" class="section_delete education_delete${trnssecid}"><i class="mdi mdi-minus"></i></button>
                                    <div class="form-row justify-content-center">
                                        <div class="col-md-4">
                                            <div class="form-group mb-0">
                                                <label class="" for="education_degree_name">Education/ Degree Name</label>
                                                <select class="form-control form-control-sm" name="education_degree_name${trnssecid}[]" id="education_degree_name${trnssecid}">
                                                    <option>Diploma in Civil Engineering-1</option>
                                                    <option>Diploma in Civil Engineering-2</option>
                                                    <option>Diploma in Civil Engineering-3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-2">
                                            <div class="form-group mb-0">
                                                <label class="" for="result_type">Result Type</label>
                                                <select class="form-control form-control-sm" name="result_type${trnssecid}[]" id="result_type${trnssecid}">
                                                    <option>CGPA</option>
                                                    <option>GPA</option>
                                                    <option>Division</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-2">
                                            <div class="form-group mb-0">
                                                <label class="" for="result_point">Result</label>
                                                <div class="">
                                                    <input type="text" class="form-control text-center" name="result_point${trnssecid}[]"
                                                    id="result_point" placeholder="5.00" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-2">
                                            <div class="form-group mb-0">
                                                <label class="" for="result_scale">Scale</label>
                                                <div class="">
                                                    <input type="text" class="form-control text-center" name="result_scale${trnssecid}[]"
                                                    id="result_scale" placeholder="5.00" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="is_mandatory">is mandatory? </label>
                                                <select class="form-control form-control-sm" id="education_is_mandatory" name="education_is_mandatory${trnssecid}[]">
                                                    <option value="">Select</option>
                                                    <option value="y">Yes</option>
                                                    <option value="n">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row justify-content-end">
                                <div class="col-md-1">
                                    <button type="button" class="btn btn-info btn-block add_education${trnssecid}"><i class="mdi mdi-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="form-group mb-0">
                                <label class="" for="experience_details">Experience Details
                                </label>
                                <div class="">
                                    <textarea name="experience_details[]"  cols="4" rows="10"
                                    id="experience_details" class="form-control"
                                    placeholder="Experience Qualification"></textarea>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header rounded-0">
                    <h4 class="mb-0">Work Experince</h4>
                </div>
                <div class="card-body">
                    <div class="work_exp_block${trnssecid}">
                        <div class="added_section work_exp_block_child${trnssecid} mb-4">

                            <button type="button" class="section_delete work_exp_delete${trnssecid}"><i
                                    class="mdi mdi-minus"></i></button>
                            <div class="form-row justify-content-center">
                                <div class="col-md-4">
                                    <div class="form-group mb-0">
                                        <label class=""
                                            for="designation_role">Designation/Role</label>
                                        <select class="form-control form-control-sm"
                                            id="designation_role${trnssecid}" name="designation_role${trnssecid}[]">
                                            <option value="">Select designation/role
                                            </option>
                                            <option>Engineer</option>
                                            <option>Assistent Engineer</option>
                                            <option>Sub Divisional Engineer</option>
                                            <option>Division</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group mb-0">
                                        <label class="" for="org_type">Organization
                                            Type</label>
                                        <select class="form-control form-control-sm"
                                            id="org_type" name="org_type${trnssecid}[]">
                                            <option value="">Select organization type
                                            </option>
                                            <option>Reputed Company</option>
                                            <option>Large Company</option>
                                            <option>Small Company</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group mb-0">
                                        <label class="" for="year_of_exp">Years of
                                            Exp.</label>
                                        <div class="">
                                            <input type="text"
                                                class="form-control text-center"
                                                name="year_of_exp${trnssecid}[]" id="year_of_exp"
                                                placeholder="Years of Exp." />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="is_mandatory">is mandatory? </label>
                                        <select class="form-control form-control-sm"
                                            id="work_exp_is_mandatory"
                                            name="work_exp_is_mandatory${trnssecid}[]">
                                            <option value="">Select</option>
                                            <option value="y">Yes</option>
                                            <option value="n">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-end">
                        <div class="col-md-1">
                            <button type="button" class="btn btn-info btn-block add_work_exp${trnssecid}"><i
                                    class="mdi mdi-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="form-row justify-content-between">

                        <div class="col-md-8">
                            <div class="form-row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="gender">Gender</label>
                                        <select class="form-control form-control-sm" id="gender" name="gender[]">
                                            <option value="">Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="is_mandatory">is mandatory? </label>
                                        <select class="form-control form-control-sm" id="gender_is_mandatory" name="gender_is_mandatory[]">
                                            <option value="">Select</option>
                                            <option value="y">Yes</option>
                                            <option value="n">No</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group mb-0">
                                        <label class="" for="height_range_to">Height Range</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="min_height[]" id="min_height" placeholder="Min Height">
                                            <input type="text" class="form-control" name="max_height[]" id="max_height" placeholder="Max Height">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="is_mandatory">is mandatory? </label>
                                        <select class="form-control form-control-sm" id="height_is_mandatory" name="height_is_mandatory[]">
                                            <option value="">Select</option>
                                            <option value="y">Yes</option>
                                            <option value="n">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
        `;


        /*var htmlAppend = localStorage.getItem("store_job_block");
        if (htmlAppend) {
            localStorage.setItem("store_job_block",jobblock+' '+htmlAppend);
        } else {

            localStorage.setItem("store_job_block",jobblock);
        }*/

        $('.job_post_block').append(jobblock);






        /*let cars = $(this).data('cars');
        let countryid = $('#country_id').val();
        let country_car = [];

        country_car = cars.filter((car) => {
            console.log(car.country_id)
            return car.country_id == countryid;
        });

        country_car.forEach((car,index) =>{
            $('#carName'+trnssecid).append(`<option value="${car.id}">${car.name} -> ${car.country.name}</option>`)
            $('#carName').append(`<option value="${car.id}">${car.name} -> ${car.country.name}</option>`)
        })
        
        $('body').on('click','.deltransport', function(){
            let delid = $(this).data('parentid');
            $('#'+delid).remove();

        });*/



        trnssecid++;

        $('#job_block_count').val(trnssecid);

        
        setTimeout(() =>{
            $('#education_degree_name1').empty();
            $('#education_degree_name2').empty();
            $('#education_degree_name3').empty();

            $('#result_type1').empty();
            $('#result_type2').empty();
            $('#result_type3').empty();
            
            $('#designation_role1').empty();
            $('#designation_role2').empty();
            $('#designation_role3').empty();

            let education_action = $('input[name="education_action"]').attr('data-education_action');
            let result_type_action = $('input[name="result_type_action"]').attr('data-result_type_action');
            let designation_role_action = $('input[name="designation_role_action"]').attr('data-designation_role_action');

            $.ajax({
                url: education_action,
                method: 'get',
                success: function(response){
                    $('#education_degree_name1').append(`<option value ="">Select education</option>`);
                    $('#education_degree_name2').append(`<option value ="">Select education</option>`);
                    $('#education_degree_name3').append(`<option value ="">Select education</option>`);
                    response.data.forEach(education =>{
                        $('#education_degree_name1').append(`<option value ="${education.lookup_value}">${education.lookup_value}</option>`);
                        $('#education_degree_name2').append(`<option value ="${education.lookup_value}">${education.lookup_value}</option>`);
                        $('#education_degree_name3').append(`<option value ="${education.lookup_value}">${education.lookup_value}</option>`);
                    });
                }
            })

            $.ajax({
                url: result_type_action,
                method: 'get',
                success: function(response){
                    $('#result_type1').append(`<option value ="">Select result type</option>`);
                    $('#result_type2').append(`<option value ="">Select result type</option>`);
                    $('#result_type3').append(`<option value ="">Select result type</option>`);
                    response.data.forEach(result_type =>{
                        $('#result_type1').append(`<option value ="${result_type.lookup_value}">${result_type.lookup_value}</option>`);
                        $('#result_type2').append(`<option value ="${result_type.lookup_value}">${result_type.lookup_value}</option>`);
                        $('#result_type3').append(`<option value ="${result_type.lookup_value}">${result_type.lookup_value}</option>`);
                    });
                }
            })

            $.ajax({
                url: designation_role_action,
                method: 'get',
                success: function(response){
                    $('#designation_role1').append(`<option value ="">Select designation</option>`);
                    $('#designation_role2').append(`<option value ="">Select designation</option>`);
                    $('#designation_role3').append(`<option value ="">Select designation</option>`);
                    response.data.forEach(designation =>{
                        $('#designation_role1').append(`<option value ="${designation.lookup_value}">${designation.lookup_value}</option>`);
                        $('#designation_role2').append(`<option value ="${designation.lookup_value}">${designation.lookup_value}</option>`);
                        $('#designation_role3').append(`<option value ="${designation.lookup_value}">${designation.lookup_value}</option>`);
                    });
                }
            })
        },1000)
        
    });

    //Add Work Experience

    $('body').on('click', ".add_work_exp1", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.work_exp_block1').children(':first-child').clone().appendTo(".work_exp_block1")
    });

    $('body').on('click', ".add_work_exp2", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.work_exp_block2').children(':first-child').clone().appendTo(".work_exp_block2")
    });

    $('body').on('click', ".add_work_exp3", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.work_exp_block3').children(':first-child').clone().appendTo(".work_exp_block3")
    });

    $('body').on('click', '.add_work_exp0', function (ev) {
        var eclone = $(this).parent().parent().parent().find('.work_exp_block0').children(':first-child').clone().appendTo(".work_exp_block0")
    });


    //Add Education

    $('body').on('click', ".add_education1", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.education_block1').children(':first-child').clone().appendTo(".education_block1")
    });

    $('body').on('click', ".add_education2", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.education_block2').children(':first-child').clone().appendTo(".education_block2")
    });

    $('body').on('click', ".add_education3", function (ev) {
        var eclone = $(this).parent().parent().parent().find('.education_block3').children(':first-child').clone().appendTo(".education_block3")
    });

    $('body').on('click', '.add_education0', function (ev) {
        var eclone = $(this).parent().parent().parent().find('.education_block0').children(':first-child').clone().appendTo(".education_block0")
    });

    /*var htmlAppend = localStorage.getItem("store_job_block");
    if (htmlAppend) {
        $('.job_post_block').append(htmlAppend);
    }*/

    //Delete job

    $('body').on('click', '.job_delete', function () {

        let blocklength = $('.job_block').length;

        blocklength--

        console.log(blocklength);

        if (blocklength < 1) {
            return false;
        }

        let delid = $(this).data('parentid');

        $('.' + delid).remove();



    });


    //Delete education

    $('body').on('click', '.education_delete0', function () {
        let educationlength = $('.education_block_child0').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.education_delete1', function () {
        let educationlength = $('.education_block_child1').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.education_delete2', function () {
        let educationlength = $('.education_block_child2').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.education_delete3', function () {
        let educationlength = $('.education_block_child3').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });


    $('body').on('click', '.education_delete0', function () {
        let educationlength = $('.education_block_child0').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });



    //Delete Work Experience

    $('body').on('click', '.work_exp_delete1', function () {
        let educationlength = $('.work_exp_block_child1').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.work_exp_delete2', function () {
        let educationlength = $('.work_exp_block_child2').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.work_exp_delete3', function () {
        let educationlength = $('.work_exp_block_child3').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

    $('body').on('click', '.work_exp_delete0', function () {
        let educationlength = $('.work_exp_block_child0').length;

        educationlength--;

        if (educationlength < 1) {
            return false;
        }
        $(this).parent().remove();
    });

});