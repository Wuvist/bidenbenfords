var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var offsetNum = 85;

		/* NEWS SLIDER CARDS */
		$(window).on('load', function(){
		setTimeout(function() {
		if ($('.NewsSliderCard').length){
			$('.NewsSliderCard').addClass('BoxStyle');
			$('.NewsSliderCard').wrap('<li class="NewsCardItem"/>');
			$('.NewsCardItem').wrapAll('<ul class="NewsSliderStart"/>');
		}
		$('.NewsSliderStart').bxSlider({
				slideMargin: 30,
				maxSlides: 3,
				slideWidth: 350,
				pager:false,
				adaptiveHeight:true,
				touchEnabled: false,
				nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'

			});
		}, 1000);
		});


		/* EVENTS SLIDER CARDS */
		$(window).on('load', function(){

		if ($('.EventsSliderCard').length){
			$('.EventsSliderCard').wrap('<li class="EventsCardItem"/>');
			$('.EventsCardItem').wrapAll('<ul class="EventsSliderStart"/>');
			$('.EventsSliderStart .Date').prepend('<i class="fa fa-calendar"></i>');
			$('.EventsSliderStart .Time').prepend('<i class="fa fa-clock-o"></i>');
			$('.EventsSliderStart .Location').prepend('<i class="fa fa-location-arrow"></i>');
		}
		$('.EventsSliderStart').bxSlider({
				slideMargin: 30,
				maxSlides: 4,
				slideWidth: 260,
				pager:false,
				touchEnabled: false,
				nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',


			});


		});






/* THE DOCUMENT IS READY !!! THE DOCUMENT IS READY !!! THE DOCUMENT IS READY !!! */
$(document).ready(function(){
				/* SEARCH RESULTS*/
		if ($('#contentArea .searchOuterWrapper').length){
			$('#pageTools').hide();
		}
		$('.searchSegments').detach().appendTo('#featureWrapper');

		$('#contentArea .searchOuterWrapper').wrapAll('<div class="ExtraSearchWrapper"/>')
		$('#contentArea .ExtraSearchWrapper').detach().appendTo('#featureText .siteBounds');

		/* EVENTS */
		if ($('.EventsListingCards').length){
			$('.EventsListingCards .item').addClass('EventsSliderCard');
		}

		/* ELECTION RESULTS */

		$('.ExpandPrecinct').parent().next().next().addClass('FirstTable');
		$('.ExpandPrecinct').click(function(){
		  event.preventDefault();
		  $(this).parent().next().find('table').slideToggle();
		});


		/* SEARCH */
		$('.searchBarContainer input[type=text]').val("What Can We Help You With?");
		$('.searchBarContainer input[type=button]').val(" ");
		$('.searchBarContainer input[type=text]').each(function() {
			var default_value = $(this).val();
			$(this).focus(function() {
				if($(this).val() == default_value) $(this).val("");
			}).blur(function(){
				if($(this).val().length == 0) $(this).val(default_value);
			});
		});



		/* MEGA MENU STUFF */
		$(".MenuContainer ul li:first-child").addClass('ItemVisible');
		$(".MenuContainer ul li").on({
			mouseenter: function () {
				$(this).addClass('ItemVisible');
				$(this).siblings().removeClass('ItemVisible')
			}
		});
		$("#topControls > .siteBounds > .Freeform > ul > li > a").removeAttr('href');
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(0)").click(function(){
			$('#MegaMenu2, #MegaMenu3, #MegaMenu4, #MegaMenu5').hide();
			$('#MegaMenu1').slideToggle()
			$(this).toggleClass('Selected');
			$(this).siblings().removeClass('Selected');
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(1)").click(function(){
			$('#MegaMenu1, #MegaMenu3, #MegaMenu4, #MegaMenu5').hide();
			$('#MegaMenu2').slideToggle().focus();
			$(this).toggleClass('Selected');
			$(this).siblings().removeClass('Selected');
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(2)").click(function(){
			$('#MegaMenu1, #MegaMenu2, #MegaMenu4, #MegaMenu5').hide();
			$('#MegaMenu3').slideToggle();
			$(this).toggleClass('Selected');
			$(this).siblings().removeClass('Selected');
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(3)").click(function(){
			$('#MegaMenu1, #MegaMenu2, #MegaMenu3, #MegaMenu5').hide();
			$('#MegaMenu4').slideToggle();
			$(this).toggleClass('Selected');
			$(this).siblings().removeClass('Selected');
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(4)").click(function(){
			$('#MegaMenu1, #MegaMenu2, #MegaMenu3, #MegaMenu4').hide();
			$('#MegaMenu5').slideToggle();
			$(this).toggleClass('Selected');
			$(this).siblings().removeClass('Selected');
		});
		$(document).mouseup(function (e) {
			var container = $(".MenuContainer, #topControls ul li");
			if (!container.is(e.target) // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{ $('.MenuContainer').slideUp();}
		});

		/* KEYBOARD ACCESSIBILITY */
		/* KEYBOARD ACCESSIBILITY */
		/* KEYBOARD ACCESSIBILITY */
		$("#topControls a").attr('tabindex','0');
		$(".MenuContainer").attr('tabindex','-1');
		$(".MenuContainer ul li").on('keypress', function(e) { //accessibility - spacebar key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '32') {
					$(this).addClass('ItemVisible');
					$(this).siblings().removeClass('ItemVisible')
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});

		/* BRING FOCUS BACK TO TOP */
		$('#MegaMenu1 .Freeform > ul > li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9'  && $(this).children('ul').is(":hidden"))  {
					$('#topControls ul li:eq(2) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$('#MegaMenu1 .Freeform > ul > li:last-child ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#topControls ul li:eq(2) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});
		$('#MegaMenu2 .Freeform > ul > li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9'  && $(this).children('ul').is(":hidden"))  {
					$('#topControls ul li:eq(3) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$('#MegaMenu2 .Freeform > ul > li:last-child ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#topControls ul li:eq(3) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});
		$('#MegaMenu3 .Freeform > ul > li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9'  && $(this).children('ul').is(":hidden"))  {
					$('#topControls ul li:eq(4) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$('#MegaMenu3 .Freeform > ul > li:last-child ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#topControls ul li:eq(4) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});
		$('#MegaMenu4 .Freeform > ul > li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9'  && $(this).children('ul').is(":hidden"))  {
					$('#topControls ul li:eq(5) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$('#MegaMenu4 .Freeform > ul > li:last-child ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#topControls ul li:eq(5) a').focus();
					$('.MenuContainer').hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});
		$('#MegaMenu5 .Freeform > ul > li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9'  && $(this).children('ul').is(":hidden"))  {
					$('#MegaMenu5').slideToggle();
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$('#MegaMenu5 .Freeform > ul > li:last-child ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#MegaMenu5').slideToggle();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});

		/* CLOSE MENU ON LAST TAB ITEM*/
		$('#departmentTopControls ul ul li:last-child').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$(this).parent().hide();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});


		/* TOGGLE MEGAMENUS */
		$('#topControls > .siteBounds > .Freeform > ul > li:eq(0)').on('keypress', function(e) { //accessibility - spacebar key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '32') {
					$('#MegaMenu2, #MegaMenu3, #MegaMenu4, #MegaMenu5').hide();
					$('#MegaMenu1').slideToggle().focus();
					$(this).toggleClass('Selected');
					$(this).siblings().removeClass('Selected');
					return false; // disables page scrolling when spacebar opens megamenu
				}
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(1)").on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$('#MegaMenu1, #MegaMenu3, #MegaMenu4, #MegaMenu5').hide();
				$('#MegaMenu2').slideToggle().focus();
				$(this).toggleClass('Selected');
				$(this).siblings().removeClass('Selected');
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(2)").on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$('#MegaMenu1, #MegaMenu2, #MegaMenu4, #MegaMenu5').hide();
				$('#MegaMenu3').slideToggle().focus();
				$(this).toggleClass('Selected');
				$(this).siblings().removeClass('Selected');
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(3)").on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$('#MegaMenu1, #MegaMenu2, #MegaMenu3, #MegaMenu5').hide();
				$('#MegaMenu4').slideToggle().focus();
				$(this).toggleClass('Selected');
				$(this).siblings().removeClass('Selected');
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});
		$("#topControls > .siteBounds > .Freeform > ul > li:eq(4)").on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$('#MegaMenu1, #MegaMenu2, #MegaMenu3, #MegaMenu4').hide();
				$('#MegaMenu5').slideToggle().focus();
				$(this).toggleClass('Selected');
				$(this).siblings().removeClass('Selected');
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});

		/* SUB NAV ACCESSIBIILITY - SPACEBAR OPEN */
		$("#leftNavContainer .grey ul ul").prev().on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$(this).next().slideToggle();
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});

		/* SEARCH BAR ACCESSIBIILITY - SPACEBAR OPEN */
		$("#desktopSearchButton").on('keypress', function(e) { //accessibility - spacebar key
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if (keycode == '32') {
				$('#MobileSearchBarWrapper').slideToggle();
				return false; // disables page scrolling when spacebar opens megamenu
			}
		});
		$('#MobileSearchBarWrapper .search').on('keypress', function(e) { //accessibility - tab key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '9') {
					$('#MobileSearchBarWrapper').slideToggle();
					return false; // disables page scrolling when spacebar opens megamenu
				}

		});

		$('#pageTools span').attr('tabindex', '0');
		$("#pageTools span").keyup(function(event) {
			if (event.keyCode === 13) {
				$(this).click();
			}
		});





		/* named anchors */
		NWS.Layout.NamedAnchors.init({
			pageTopHeight: 220,
			fixedHeader: $("#headerWrapper")

		});


		/* UTILITY LINKS */
		$('.UtilityLinks').detach().prependTo('#poweredBy .siteBounds');




		/* OPEN OR CLOSE MOBILE MENU*/
		$('#MobileMegaMenu1').detach().appendTo('#mobileNav > .Freeform > ul > li:eq(0)');
		$('#MobileMegaMenu2').detach().appendTo('#mobileNav > .Freeform > ul > li:eq(1)');
		$('#MobileMegaMenu3').detach().appendTo('#mobileNav > .Freeform > ul > li:eq(2)');
		$('#MobileMegaMenu4').detach().appendTo('#mobileNav > .Freeform > ul > li:eq(3)');
		$('#MobileMegaMenu5').detach().appendTo('#mobileNav > .Freeform > ul > li:eq(4)');




		/* OPEN OR CLOSE MOBILE SERCH BAR*/
		$('#mobileSearchButton, #desktopSearchButton').click(function(){
			$('#MobileSearchBarWrapper').slideToggle();
			$('#MobileSearchOpacity').toggle();
		});
		$(document).mouseup(function (e) {
			var container = $("#MobileSearchBarWrapper, #headerWrapper");
			if (!container.is(e.target) && $('#MobileSearchBarWrapper').is(':visible') // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{ $('#MobileSearchBarWrapper').slideUp();
			$('#MobileSearchOpacity').hide(); }
		});


		/* FIT VID */
		$('iframe[src*="youtube.com"]').each(function() {
			$(this).closest('.Freeform').addClass('YouTube');
		});
		$('.YouTube').fitVids();






		/* LIMIT HEIGHT */
		if ($('.LimitHeight').length){
			$('.LimitHeight').addClass('Height300');
			$('.LimitHeight').append('<a class="SeeMoreButton SeeMoreLessButton"><span class="icon"><i class="fa fa-plus" aria-hidden="true"></i></span><span class="text">See More</span></a>')
			$('.LimitHeight').append('<a class="SeeLessButton SeeMoreLessButton"><span class="icon"><i class="fa fa-minus" aria-hidden="true"></i></span><span class="text">See Less</span></a>')

			$('.SeeMoreButton, .SeeLessButton').click(function(){
				$(this).parent().toggleClass('Height300');
				if ($(this).parent().hasClass('Height300')){
						$(this).parent().addClass('SeeMoreButtonClose');
						$(this).parent().removeClass('SeeMoreButtonOpen');
					} else {
						$(this).parent().removeClass('SeeMoreButtonClosed');
						$(this).parent().addClass('SeeMoreButtonOpen');
				}
			});

			$('.SeeMoreButton').click(function(){
				var outerHeight = 0;
				$(this).siblings().each(function () {
				  outerHeight += $(this).outerHeight(true);
				})
				$(this).parent().animate({height: outerHeight + 30}, 700);
			});
			$('.SeeLessButton').click(function(){
				$(this).parent().animate({height: 297}, 700);
			});
		}


		/* PARRALAX FEATURED IMAGE */
		if ($('#featureImage img').length){
			var featuredParralaxImage = $('#featureImage img').attr('src');
			$('#featureImage img').remove();
			$('#featureImage').css('background-image', 'url(' + featuredParralaxImage + ')');
		}

		/* PARRALAX BODY*/
		if ($('.ParralaxImage img').length){
			var parralaxImage = $('.ParralaxImage img').attr('src');
			$('.ParralaxImage').remove();
			$('.ParralaxBlock').css('background-image', 'url(' + parralaxImage + ')');
		}










			$('#departmentTopControls ul ul').prev().on('keypress', function(e) { //accessibility - spacebar key
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '32') {
				$(this).next().toggle();
				$(this).closest('li').siblings('li').find('ul').slideUp();
				return false; // disables page scrolling when spacebar opens megamenu
							}
			});
			$(document).on("mouseup", function (e) {
				var $container = $("#departmentTopControls .menu");
				if ( !$container.is(e.target) // if the target of the click isn't the container...
					&& $container.has(e.target).length === 0) // ... nor a descendant of the container
				{
					$('#departmentTopControls ul ul').slideUp();
				}

			});










		/* ANCHOR LINKS */
		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
			  var headerHeight = $('#headerWrapper').height();
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top - headerHeight - 20
				}, 1000);
				return false;
			  }
			}
		  });
		});



		/* FAQ - BASE JQUERY */
		$('.FAQ .Accordion').parent().addClass('FAQAccordion');
		$('.FAQ .tabbedContent').parent().addClass('FAQTabbed');
		$('.FAQ:not(.FAQAccordion, .FAQTabbed)').addClass('FAQStandard');
		$('.FAQAccordion .accordionArea > a').remove();
		if ($('.FAQ').hasClass('FAQAccordion')){
			$('.FAQAccordion .accordionHeading').removeAttr('onclick');
			$('.accordionContent').removeClass('open');
		}


		/* FAQ ACCORDION */
		$('.FAQAccordion').each(function(){
			var a = $(this).find('.accordionArea > div');
			do $(a.slice(0,2)).wrapAll('<div class="group" />');
			while((a = a.slice(2)).length>0);
			var $items = $(this).find('.group');
			var numItems = $items.length;
			var numItemsPerColumn = numItems / 2;
			$items.slice(0, numItemsPerColumn).wrapAll('<div class="item-column">');
			$items.slice(numItemsPerColumn, numItemsPerColumn * 2).wrapAll('<div class="item-column">');



		});
		$('.FAQAccordion .accordionHeading').click(function(){
				$('.accordionContent').removeClass('open');
				$(this).next().slideToggle();
				$(this).toggleClass('selected');

				if ($(this).hasClass('selected')){
						$(this).children('i').addClass('fa-minus-circle');
						$(this).children('i').removeClass('fa-plus-circle');
					} else {
						$(this).children('i').removeClass('fa-minus-circle');
						$(this).children('i').addClass('fa-plus-circle');
				}
			});
	$('.FAQAccordion .accordionArea .accordionHeading').prepend('<i class="fa fa-plus-circle"></i>');









		/* FILTER BLOCK */
		if ($('.AggregationFilter2').length){
			$('.Aggregation.CenterZone').prepend('<span class="filterButton">Refine Results</span>');
			$('.filterButton, .closeButton').click(function(){
				$('.AggregationFilter2').toggle();
			});
			$(window).on("resize",function(e){
			if (!$('#mobileMenuButton a').is(':visible')){
				$('#leftZone .AggregationFilter2').css('display', 'block');
			}
			else{$('#leftZone .AggregationFilter2').css('display', 'none');	}
			});
		}













		/* FOOTER */
		$(window).on("load resize",function(e){
                if ($('#mobileMenuButton').is(":visible") ) {
                    $('.FooterZone1').detach().insertAfter('.FooterZone2');
                }
				else{
					 $('.FooterZone1').detach().insertBefore('.FooterZone2');
				}

		});

		/* BOTTOM MARGINS */
		$('.siteBounds').each(function() {
			$(this).find('.NoBottomMargin:last').addClass('LastNoBottomMargin');
			$(this).find('.NoBottomMargin:last').prev().addClass('SecondToLastNoBottomMargin');
        });



		/* LEFT NAV STUFF */
		if ($('#leftNavContainer').length){
			$('#leftNavContainer > .grey > ul > li').addClass('ClosedListItem');
			$('#leftNavContainer > .grey > ul > li > a.current').parent().addClass('OpenListItem');
			$('#leftNavContainer > .grey > ul > li > a.current').parent().removeClass('ClosedListItem');
			$('#leftNavContainer > .grey > ul > li').each(function() {
				if($(this).children('ul').length > 0 ){
					$(this).prepend('<span class="icon OpenItem"><i class="fa fa-plus" aria-hidden="true"></i></span>');
					$(this).prepend('<span class="icon CloseItem"><i class="fa fa-minus" aria-hidden="true"></i></span>');
				}
			});

			$('#leftNavContainer .grey ul li span.icon').click(function(){
				$(this).siblings('ul').slideToggle();
				$(this).parent().toggleClass('OpenListItem ClosedListItem')

			});
		}


		/* PHOTO BLOCK - LIGHT BOX */
		if ($(".fancybox").length ) {
			$(".fancybox").fancybox();
		}


		// MOBILE SEARCH BUTTON FADE IN ON HOME PAGE
		$(window).on("load scroll resize",function(e){
			if ($('#departmentTopNavWrapper').is(':hidden')){
		  var y = $(this).scrollTop();
		  if (y > 300) {
			$('.mobileSearchButtonHome').fadeIn();
		  } else {
			$('.mobileSearchButtonHome').fadeOut();
		  }
		  }
		});



		// DEPARMENT MOBILE NAV
		$('#mobileMenuButton, #departmentMobileNavWrapper span.close').click(function(){
			$('#departmentMobileNavWrapper').toggle("slide");
			$('#MobileMenuOpacity').toggle();
			$('#MobileSearchBarWrapper').slideUp();
		});
		$('#departmentMobileNav > ul > li').each(function() {
			if($(this).children('ul').length > 0 ){
				$(this).prepend('<i class="fa fa-plus"></i><i class="fa fa-minus" style="display:none;"></i>');
			}

        });
		$('#departmentMobileNavWrapper ul li i').click(function(){
			$(this).siblings('ul').slideToggle();
		});
		$('#departmentMobileNavWrapper ul li i.fa-minus').click(function(){
			$(this).hide();
			$(this).siblings('i').show();
		});
		$('#departmentMobileNavWrapper ul li i.fa-plus').click(function(){
			$(this).hide();
			$(this).siblings('i').show();
		});

		/* CLOSE MOBILE MENU */
		$(document).mouseup(function (e) {
			var container = $("#departmentMobileNavContainer");
			if (!container.is(e.target) && $('#departmentMobileNavWrapper').is(':visible') // if the target of the click isn't the container...
				&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{ $('#departmentMobileNavWrapper').toggle("slide");
			$('#MobileMenuOpacity').toggle(); }
		});

		/* CUSTOM TABS */
		$('.DetailTabs ul li:first').addClass('selected');
		$('.DetailTabs ul li').click(function () {
			$(this).addClass('selected');
			$(this).siblings().removeClass('selected');
		});

		$('.TabNumber1').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber2').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber3').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber4').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber5').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber6').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber7').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber8').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber9').wrapAll('<div class="TabContainer"/>');
		$('.TabNumber10').wrapAll('<div class="TabContainer"/>');
		$('.TabContainer').wrapAll('<div class="TabWrapper"/>');
		$('.TabContainer').eq(0).css('display', 'block');

		$('.DetailTabs ul li').click(function () {
			var tabIndex = $('.DetailTabs ul li').index(this) + 1;
			$('.TabContainer').hide();
			$('.TabNumber' + tabIndex).parent().show();
		});





		/* STANDARD NORTHWOODS STUFF */
		NWS.Layout.Stripes.init({
			colors:['White','DarkGreyTexture', 'GreyTexture', 'Parralax', 'BlueTexture', 'GreenTexture', 'PurpleTexture', 'RedTexture', 'LightBlueTexture'],
			defaultColor: 'White',
			zones:['#contentArea', '#footer', '#departmentFooter']
		});
		scrollTop('scrollTop',500,250);
		NWS.Layout.ScrollTables.init({
            table: '#contentArea table'
		});


		NWS.CustomSite.floatBlocks('.Float20,.Float25,.Float33,.Float50');



		$(window).on('load resize', function(){
			NWS.CustomSite.calculateFloatInRow();
			NWS.CustomSite.sameHeightBlocks('.Float25:not(.LimitHeight),.Float33:not(.LimitHeight),.Float50:not(.LimitHeight),.Float50:not(.FAQ)');
		});
		$('input[type="submit"], input[type="submit"]').click(function () {
			NWS.CustomSite.sameHeightBlocks('.Float25:not(.LimitHeight),.Float33:not(.LimitHeight),.Float50:not(.LimitHeight),.Float50:not(.FAQ)');
		});




		/* SHARING TOOLS */
		$('#breadCrumbContainer.Home ul li:eq(0) a').html('');
		$('#breadCrumbContainer ul').prepend('<li><a href="/home.htm"><i class="fa fa-home">&nbsp;</i></a> <span>&gt;</span></li>')
		if ($('#contentArea .siteBounds:first div:first').hasClass('NegativeTopMargin')){
			$('#pageTools').css('padding-bottom', '70px');
		}





				/* FILTER BLOCK & DATA LIST STYLING */
		$('#leftZone .AggregationFilter2, #leftZone .DataFilter2, #leftZone .Calendar').addClass('MasterFilterStyle');
		$('.MasterFilterStyle').prepend('<span class="closeButton">X</span>');

		/* FILTER BLOCK & DATA LIST BUTTONS */
		if ($('.AggregationFilter2').length){
			$('.Aggregation.CenterZone').prepend('<span class="filterButton Button"><a>Refine Results</a></span>');
		}
		if ($('.DataFilter2').length){
			$('.DataList.CenterZone').prepend('<span class="filterButton Button"><a>Refine Results</a></span>');
		}
		if ($('.CalendarFilter2').length){
			$('.Calendar.CenterZone').prepend('<span class="filterButton Button"><a>Refine Results</a></span>');
		}

		$('.filterButton, .closeButton').click(function(){
			$('.MasterFilterStyle').toggle("slide", { direction: "right" });
		});



	/* FILTER BLOCK */
    var windowWidth = $(window).width();
    $(window).resize(function(){
        if ($(window).width() != windowWidth) {
            windowWidth = $(window).width();
			if ($('.MasterFilterStyle').length){
				$(window).on("resize",function(e){
				if ($(window).width() > 1200) {
					$('#leftZone .MasterFilterStyle').css('display', 'block');
				}
				else{$('#leftZone .MasterFilterStyle').css('display', 'none');	}
				});
			}

        }
    });




		/* CLOSE FILTER ON CLICK OUTSIDE OF MENU */
		$(document).mouseup(function (e) {
			var container = $(".MasterFilterStyle, .filterButton");
			if (!container.is(e.target) && $('.MasterFilterStyle').is(':visible') && $('#mobileMenuButton').is(':visible')
				&& container.has(e.target).length === 0)
			{ $('.MasterFilterStyle').toggle("slide", { direction: "right" }); }
		});

		/* COUNTY ALERT */
		var firstStripeColor = $('#contentArea div:first-child').attr('class');
		$('#CountyAlert').addClass(firstStripeColor);
		if ($('#contentArea .siteBounds:first div:first').hasClass('NegativeTopMargin')){
			$('#CountyAlert .siteBounds > div').addClass('NegativeTopMargin');
		}
		if( $('#CountyAlert .Alert div').length) {
			$('#CountyAlert').show();
		}

		if ($('#CountyAlert').is(":visible") ){
			$('#contentArea div:first div').removeClass('NegativeTopMargin');
		}


	/* BX SLIDER FIX */
	if (navigator.userAgent.search("Firefox") >= 0) {
    var ff_version = navigator.userAgent.match(/Firefox\/([\d]+\.[\d])+/);
    ff_version = parseFloat(ff_version[1]);
    if(ff_version == 0 || ff_version >= 59) {
        $('body').on('mousedown', '.bx-viewport a', function() {
            var ff_link = $(this);
            var ff_href = ff_link.attr('href');
            if(ff_href) {
                location.href = ff_href;
                return false;
            }
        });
    }
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////  End Function Ready ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* SCROLL TOP */
		function scrollTop(elementID,elementDuration,elementOffSet){
		var offset = elementOffSet;
		var duration = elementDuration;
			$('#'+elementID).hide();
			jQuery(window).scroll(function (){
				if (jQuery(this).scrollTop() > offset){
					jQuery('#'+elementID).fadeIn(duration);
				} else {
					jQuery('#'+elementID).fadeOut(duration);
				}
                });
				jQuery('#'+elementID).click(function (event){
					event.preventDefault();
					jQuery('html, body').animate({ scrollTop: 0 }, duration);
					return false;
				});
        }




NWS.initNamespace('NWS.Layout.Stripes', function (params) {

	return {
		init: function (params) {
			// Set default values
			if (typeof(params.prefix) === 'undefined')
				params.prefix = 'Stripe';
			if (typeof(params.suffix) === 'undefined')
				params.suffix = 'Block';
			if (typeof(params.outerClass) === 'undefined')
				params.outerClass = 'siteBounds';
			if (typeof(params.defaultColor) === 'undefined')
				params.defaultColor = params.colors[0];
			if (typeof(params.zones) === 'undefined')
				params.zones = ['#centerZone', '#leftZone'];

			// Create a selector that excludes elements with a stripe
			var noStripeSelector = ':not(';
			if (typeof(params.defaultException) !== 'undefined')
				noStripeSelector += params.defaultException+',';
			$(params.colors).each(function(i, color) {
				noStripeSelector += '.' + params.prefix + color + (i == params.colors.length - 1 ? ')' : ',');
			});

			$.each(params.zones, function(i, zone) {
				// Apply the default stripe class to any blocks that don't have a stripe class
                $(zone).children('div' + noStripeSelector).each(function () {
					$(this).addClass(params.prefix + params.defaultColor);
				});

				// Add a wrapper around all stripes, grouping together successive DIVs that have the same stripe color applied
                $(params.colors).each(function (j, c) {
					$(zone + ' .' + params.prefix + c).each(function () {
                        if (!$(this).parent().hasClass(c + params.suffix))
                            $(this).nextUntil(':not(.' + params.prefix + c + ')').andSelf().wrapAll('<div class="' + c + params.suffix + ' wrapme" />');
						if ($(this).is(':first-child'))
							$(this).addClass('first');
						if ($(this).is(':last-child'))
							$(this).addClass('last');
					});
				});

				// Add the outer class around all the grouped stripes
				$('.wrapme, .Commenting', zone).wrapInner('<div class="' + params.outerClass + '" />');
			});
		}
	};
});


NWS.initNamespace('NWS.Layout.ScrollTables', function (params) {

	function addScrollText(table) {
		$(table).each(function (){
			if (hasScrollBar($(this), 'horizontal')){
				$(this).prev('.scrollText').show();
			} else {
				$(this).prev('.scrollText').hide();
			}
		});
	}

	function hasScrollBar(el, direction) {
		if (direction == 'vertical') {
			return el.get(0).scrollHeight > el.innerHeight();
		} else if (direction == 'horizontal') {
			return el.get(0).scrollWidth > el.innerWidth();
		}
		return false;
	}

	return {
		init: function (params) {
			if (typeof(params.scrollText) === 'undefined')
				params.scrollText = 'Scroll table to view all';
			if (!(params.table instanceof jQuery))
				params.table = $(params.table);

			params.table.wrap('<div class="scrollTable"/>');
			$('<div class="scrollText">' + params.scrollText + '</div>').insertBefore($('.scrollTable'));
			addScrollText('.scrollTable');

			$(window).resize(function() {
				addScrollText('.scrollTable');
			});
		}
	};
});



/* - NAMESPACED FUNCTIONS --------------------------------------------------------- */
NWS.initNamespace('NWS.CustomSite', function (params) {
	return {
		floatBlocks:function (floatBlockNames) {/* float blocks next to each other */
			$(floatBlockNames).addClass('Float');
			NWS.CustomSite.calculateFloatInRow();
		},
		sameHeightBlocks:function(floatBlockNames){/* plug-in matchheight.js */
			$(floatBlockNames).matchHeight();
		},
		calculateFloatInRow:function() {/* calculate the rows of floated blocks - add class name to first item in row */
			$('.wrapme').each(function () {
				$(this).find('.Float').each(function () {
					var $this = $(this);
					$this.removeClass('firstItemInRow');
					if ($this.prev('.Float').length > 0) {
							if ($this.position().top > $this.prev().position().top)  {
								$this.addClass('firstItemInRow');
							}
					} else {
						$this.addClass('firstItemInRow');
					}
				});
			});
		}

	} // end return

});// end namespaced

/* - named anchors --------------------------------------------------------- */
NWS.initNamespace('NWS.Layout.NamedAnchors',function(){
	function setClickHandler(params){
		$('a[href*="#"]').on('click',function(e){
			if($(this).attr('href') == '#')
				return;
			if($(params.fixedHeader).css('position') != 'fixed')
				return;
			if(location.pathname.replace(/^\//,'') != this.pathname.replace(/^\//,'') || location.hostname != this.hostname)
				return;
			e.preventDefault();
			scrollToNamedAnchor(params,this.hash);
		});
	}

	function scrollToNamedAnchor(params,hash) {
		if(hash=='')
			return;
		var target = $('a[name="' + hash.slice(1) +'"]');
		if(!target.length)
			return;

		var pageTopHeight = 0;
		if ($('body').hasClass('animatedHeader'))
			pageTopHeight = params.pageTopHeight;
		else if(typeof(params.pageTopHeight) !== 'undefined')
			pageTopHeight = params.pageTopHeight;

		var pageTopDifference = pageTopHeight;
		$('html,body').animate({
			 scrollTop: target.offset().top-pageTopDifference
		},params.scrollSpeed);
		/* close mobile nav */
		if($(".titanBody").hasClass('mobileNavBody')){
			NWS.CustomSite.openMobileNav();
		}
	}

	function scrollOnPageLoad(params){
		setTimeout(function() { scrollToNamedAnchor(params,location.hash) }, 1300);
	}

	return{
		init:function(params){
			if(typeof(params.fixedHeader) === 'undefined')
				params.fixedHeader = '#pageTopArea';
			if(typeof(params.scrollSpeed) === 'undefined')
				params.scrollSpeed = 500;
			if(typeof(params.pageTopHeight) === 'undefined')
				params.pageTopHeight = $(params.fixedHeader).outerHeight();

			setClickHandler(params);
			scrollOnPageLoad(params);
		}
	};
});




		/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function( $ ){
"use strict";
$.fn.fitVids = function( options ) {
var settings = {
customSelector: null,
ignore: null
};
if(!document.getElementById('fit-vids-style')) {
// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
var head = document.head || document.getElementsByTagName('head')[0];
var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
var div = document.createElement('div');
div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
head.appendChild(div.childNodes[1]);
}
if ( options ) {
$.extend( settings, options );
}
return this.each(function(){
var selectors = [
"iframe[src*='player.vimeo.com']",
"iframe[src*='youtube.com']",
"iframe[src*='youtube-nocookie.com']",
"iframe[src*='kickstarter.com'][src*='video.html']",
"object",
"embed"
];
if (settings.customSelector) {
selectors.push(settings.customSelector);
}
var ignoreList = '.fitvidsignore';
if(settings.ignore) {
ignoreList = ignoreList + ', ' + settings.ignore;
}
var $allVideos = $(this).find(selectors.join(','));
$allVideos = $allVideos.not("object object"); // SwfObj conflict patch
$allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.
$allVideos.each(function(){
var $this = $(this);
if($this.parents(ignoreList).length > 0) {
return; // Disable FitVids on this video.
}
if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
{
$this.attr('height', 9);
$this.attr('width', 16);
}
var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
aspectRatio = height / width;
if(!$this.attr('id')){
var videoID = 'fitvid' + Math.floor(Math.random()*999999);
$this.attr('id', videoID);
}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
$this.removeAttr('height').removeAttr('width');
});
});
};
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;if(d.target)f=
d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?"inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),a.css(d.property,
f-b))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);


}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:33 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 3.305
  PetaboxLoader3.resolve: 316.409 (3)
  captures_list: 676.171
  CDXLines.iter: 24.892 (3)
  load_resource: 420.346 (2)
  exclusion.robots.policy: 0.359
  esindex: 0.019
  LoadShardBlock: 637.249 (3)
  PetaboxLoader3.datanode: 677.615 (5)
  exclusion.robots: 0.376
*/