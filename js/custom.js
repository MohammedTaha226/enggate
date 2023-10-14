$(function(){

		
	/* WOW Js */
    new WOW().init();


	$(window).load(function () {
		
		$(".splash").fadeOut(1000,function () {
				
			$(this).remove();
			
		});
	});
	
	
	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	
  var owlServices = $('#owlServices');
 
  owlServices.owlCarousel({
      
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1200,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [979,2], // betweem 900px and 601px
      itemsTablet: [768,1], //2 items between 600 and 0
      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
      slideSpeed : 500,
      paginationSpeed : 400,
      pagination:false,
      navigation:true,
      autoPlay:true,
      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
  });
	
  var sliderService = $('#sliderService,#sliderService2');
 
  sliderService.owlCarousel({
      
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1200,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [979,1], // betweem 900px and 601px
      itemsTablet: [768,1], //2 items between 600 and 0
      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
      slideSpeed : 500,
      paginationSpeed : 400,
      pagination:false,
      navigation:true,
      autoPlay:true,
      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
  });

	
	
	$(".selectStyle .value").click(function() {
		$(".selectStyle .listSelect").not($(this).next()).slideUp()
		$(this).next().slideToggle();
	})
	
	$('body,html').on('click', function(e) {
		var container = $(".selectStyle .value,.selectStyle i"),
		Sub = $(".selectStyle .listSelect");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }

	});
	
	$(".selectStyle .listSelect span").click(function() {
		var idParnt = $(this).parents(".selectStyle").attr("id");
		$("#"+idParnt+" .value").html($(this).text());
		$("#"+idParnt+" input").val($(this).text());
	});
	
		
	$(".ServiceProviders .categories li a").click(function() {
	    $(this).siblings().slideToggle();
	});
	
 
	/****** Start Tabs ******/
	
	$(".tabs li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	
	/****** Start accordion ******/
	
	$(".accordion.active .accordion-content").css("display","block");
	
	$(".accordion .accordion-title").click(function () {
		
		var accordId = $(this).parent().parent().attr("id");
				
		$(this).next().slideToggle(500);
		
		$("#"+accordId + " .accordion .accordion-content").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
				
	});
	
	/****** End accordion ******/
	
	$(".detailsPage .map .detailsMap a").click(function () {
		$(this).parent().remove()
	});
	
	$(".openShare").click(function () {
		$(this).siblings().slideToggle()
	})
	  
	$('body,html').on('click', function(e) {
		var container = $(".openShare,.listSocial"),
		Sub = $(".listSocial");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }

	});


	$(".inputStyle input,.inputStyle textarea").keyup(function() {
	    if($(this).val().length > 0) {
	         $(this).parent().addClass("active");
	    } else {
	        $(this).parent().removeClass("active");
	    }
	});
	
	$(".formJoin .formStyle .socialInputs .title").click(function () {
		$(this).siblings().slideToggle();
	});

	  
	$('body,html').on('click', function(e) {
		var container = $(".formJoin .formStyle .socialInputs *"),
		Sub = $(".formJoin .formStyle .socialInputs .socialList");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }

	});


$.scrollIt({topOffset:-90});


	$(".formJoin .formStyle .socialInputs input").keyup(function() {
		var getid = $(this).attr("id"); 
	    if($(this).val().length > 0) {
	         $(".formJoin .formStyle .socialInputs .previewSocial li ."+getid).addClass("active");
	    } else {
	        $(".formJoin .formStyle .socialInputs .previewSocial li ."+getid).removeClass("active");
	    }
	});














	
});
