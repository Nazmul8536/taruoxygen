$(function() {

	// $('.datatable').DataTable({
	// 	"ordering": true,
	// 	"bPaginate": true,
	// 	"bLengthChange": true,
	// 	"bAutoWidth": true
	// });

	// Remove pro banner on close
	// document.querySelector('#bannerClose').addEventListener('click',function() {
	// 	document.querySelector('#proBanner').classList.add('d-none');
	// });  
	
	$('body').on('click', ".add_education", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_education_block').children(':first-child').clone().appendTo(".add_education_block")
    });

	
	$('body').on('click', ".add_experience", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_experience_block').children(':first-child').clone().appendTo(".add_experience_block")
    });

	
	$('body').on('click', ".add_language", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_language_block').children(':first-child').clone().appendTo(".add_language_block")
    });

	
	$('body').on('click', ".add_training", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_training_block').children(':first-child').clone().appendTo(".add_training_block")
    });

	
	$('body').on('click', ".add_membership", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_membership_block').children(':first-child').clone().appendTo(".add_membership_block")
    });

	
	$('body').on('click', ".add_reference", function (ev) {
        var eclone = $(this).parent().parent().parent().parent().parent().find('.add_reference_block').children(':first-child').clone().appendTo(".add_reference_block")
    });


	//Delete sections

	$('body').on('click','.delete_reference', function(){
		let reflength = $('.delete_reference_block').length;
		reflength--;
		if (reflength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	
	$('body').on('click','.delete_membership', function(){
		let membershiplength = $('.delete_membership_block').length;
		membershiplength--;
		if (membershiplength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	
	$('body').on('click','.delete_training', function(){
		let traininglength = $('.delete_training_block').length;
		traininglength--;
		if (traininglength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	
	$('body').on('click','.delete_language', function(){
		let languagelength = $('.delete_language_block').length;
		languagelength--;
		if (languagelength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	
	$('body').on('click','.delete_experience', function(){
		let experiencelength = $('.delete_experience_block').length;
		experiencelength--;
		if (experiencelength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	
	$('body').on('click','.delete_education', function(){
		let experiencelength = $('.delete_education_block').length;
		experiencelength--;
		if (experiencelength < 1) {
			return false;
		}

		$(this).parent().remove();
	});

	$('body').on('click','#same_as', function(){
		if ($(this).prop('checked') == true) {
			$('.permanent_address_block').hide();
		} 
		if ($(this).prop('checked') == false) {
			$('.permanent_address_block').show();
		}
	})


	let district = document.querySelector('#pre_district');

	district.addEventListener('change',() => {
		fetch('district-upazilla', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json, text-plain, */*",
				"X-Requested-With": "XMLHttpRequest",
				"X-CSRF-Token": $('input[name="_token"]').val()
			},
			method: 'post',
			credentials: "same-origin",
			body: JSON.stringify({
				district_name: district.value 
			})
		})
		.then(data =>{
			return data.json();
		}).then(obj => {
			let thana = document.querySelector('#pre_thana');
			thana.length = 0;
			let default_option = document.createElement('option');
			default_option.text = 'Select thana'
			default_option.value = ''
			thana.add(default_option);
			thana.selectedIndex = 0

			obj.data.forEach((upazilla, index) => {
				option =  document.createElement('option')
				option.text = upazilla.upazilla
				option.value = upazilla.upazilla
				thana.add(option)

			})

		}).catch((error) => {
			console.error('Error:', error);
		  });
	})

	let par_district = document.querySelector('#par_district');

	par_district.addEventListener('change',() => {
		fetch('district-upazilla', {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json, text-plain, */*",
				"X-Requested-With": "XMLHttpRequest",
				"X-CSRF-Token": $('input[name="_token"]').val()
			},
			method: 'post',
			credentials: "same-origin",
			body: JSON.stringify({
				district_name: par_district.value 
			})
		})
		.then(data =>{
			return data.json();
		}).then(obj => {
			let thana = document.querySelector('#par_thana');
			thana.length = 0;
			let default_option = document.createElement('option');
			default_option.text = 'Select thana'
			default_option.value = ''
			thana.add(default_option);
			thana.selectedIndex = 0

			obj.data.forEach((upazilla, index) => {
				option =  document.createElement('option')
				option.text = upazilla.upazilla
				option.value = upazilla.upazilla
				thana.add(option)

			})

		}).catch((error) => {
			console.error('Error:', error);
		  });
	})

	


	
});
