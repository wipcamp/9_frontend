$(function () {

	"use strict";

	var $image = $(".cropper"),
			$dataX = $("#dataX"),
			$dataY = $("#dataY"),
			$dataHeight = $("#dataHeight"),
			$dataWidth = $("#dataWidth"),
			console = window.console || { log: function () {} },
			cropper;
	
	window.url_images = 'img/cover/DEV.png';


	$('.choose .btn').click(function(){
		var role = $(this).data('role').toUpperCase();
		$(".choose .btn").removeClass('active');
		$(this).addClass('active');
		
		window.url_images = 'img/cover/' + role + '.png';

		$('.wipcamp').css("background","url(./img/cover/" + role + ".png) bottom no-repeat")
	});

	$image.cropper({
		aspectRatio: 8 / 8,
		// autoCropArea: 1,
		data: {
			x: 120,
			y: 50,
			width: 640,
			height: 360
		},
		preview: ".preview",

		// multiple: true,
		// autoCrop: false,
		// dragCrop: false,
		// dashed: false,
		// modal: false,
		// movable: false,
		// resizable: false,
		// zoomable: false,
		// rotatable: false,
		// checkImageOrigin: false,

		// maxWidth: 480,
		// maxHeight: 270,
		// minWidth: 160,
		// minHeight: 90,

		done: function (data) {
			$dataX.val(data.x);
			$dataY.val(data.y);
			$dataHeight.val(data.height);
			$dataWidth.val(data.width);
		},

		build: function (e) {
			console.log(e.type);
		},

		built: function (e) {
			console.log(e.type);
		},

		dragstart: function (e) {
			console.log(e.type);
		},

		dragmove: function (e) {
			console.log(e.type);
		},

		dragend: function (e) {
			console.log(e.type);
		}
	});

	cropper = $image.data("cropper");

	$image.on({
		"build.cropper": function (e) {
			console.log(e.type);
			// e.preventDefault();
		},
		"built.cropper": function (e) {
			console.log(e.type);
			// e.preventDefault();
		},
		"dragstart.cropper": function (e) {
			console.log(e.type);
			// e.preventDefault();
		},
		"dragmove.cropper": function (e) {
			console.log(e.type);
			// e.preventDefault();
		},
		"dragend.cropper": function (e) {
			console.log(e.type);
			// e.preventDefault();
		}
	});

	$("#reset").click(function () {
		$image.cropper("reset");
	});

	$("#reset2").click(function () {
		$image.cropper("reset", true);
	});

	$("#clear").click(function () {
		$image.cropper("clear");
	});

	$("#destroy").click(function () {
		$image.cropper("destroy");
	});

	$("#enable").click(function () {
		$image.cropper("enable");
	});

	$("#disable").click(function () {
		$image.cropper("disable");
	});

	$("#zoom").click(function () {
		$image.cropper("zoom", $("#zoomWith").val());
	});

	$("#zoomIn").click(function () {
		$image.cropper("zoom", 0.1);
	});

	$("#zoomOut").click(function () {
		$image.cropper("zoom", -0.1);
	});

	$("#rotate").click(function () {
		$image.cropper("rotate", $("#rotateWith").val());
	});

	$("#rotateLeft").click(function () {
		$image.cropper("rotate", -90);
	});

	$("#rotateRight").click(function () {
		$image.cropper("rotate", 90);
	});

	var $inputImage = $("#inputImage"),
			blobURL;

	if (window.URL) {
		$inputImage.change(function () {
			var files = this.files,
					file;

			if (files && files.length) {
				file = files[0];

				if (/^image\/\w+$/.test(file.type)) {
					if (blobURL) {
						URL.revokeObjectURL(blobURL); // Revoke the old one
					}

					blobURL = URL.createObjectURL(file);
					$image.cropper("reset", true).cropper("replace", blobURL);
					$inputImage.val("");
				}
			}
		});
	} else {
		$inputImage.parent().remove();
	}

	$("#setAspectRatio").click(function () {
		$image.cropper("setAspectRatio", $("#aspectRatio").val());
	});

	$("#replace").click(function () {
		$image.cropper("replace", $("#replaceWith").val());
	});

	$("#getImageData").click(function () {
		$("#showImageData").val(JSON.stringify($image.cropper("getImageData")));
	});

	$("#setData").click(function () {
		$image.cropper("setData", {
			x: $dataX.val(),
			y: $dataY.val(),
			width: $dataWidth.val(),
			height: $dataHeight.val()
		});
	});

	$("#getData").click(function () {
		$("#showData").val(JSON.stringify($image.cropper("getData")));
	});

	$("#getData2").click(function () {
		$("#showData").val(JSON.stringify($image.cropper("getData", true)));
	});

	$("#getDataURL").click(function () {
		var dataURL = $image.cropper("getDataURL");

		$("#dataURL").text(dataURL);
		$("#showDataURL").html('<img src="' + dataURL + '">');
	});

	$("#getDataURL2").click(function () {
		var dataURL = $image.cropper("getDataURL", "image/jpeg");

		$("#dataURL").text(dataURL);
		$("#showDataURL").html('<img src="' + dataURL + '">');
	});

	$("#getDataURL3").click(function () {
		var dataURL = $image.cropper("getDataURL", {
			width: 160,
			height: 90
		});
		$("#dataURL").text(dataURL);
		$("#showDataURL").html('<img src="' + dataURL + '">');
	});

    	$("#btnsuccess").click(function() {
    		var dataURL = $image.cropper("getDataURL");
		// $("#showDataURL").html('<img src="' + dataURL + '">');
    		window.open(dataURL);
    	});


});
