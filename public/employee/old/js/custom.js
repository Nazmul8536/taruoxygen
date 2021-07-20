$(function() {

	$('.datatable').DataTable({
		"ordering": true,
		"bPaginate": true,
		"bLengthChange": true,
		"bAutoWidth": true
	});

	// Remove pro banner on close
	document.querySelector('#bannerClose').addEventListener('click',function() {
		document.querySelector('#proBanner').classList.add('d-none');
	});  	
});
