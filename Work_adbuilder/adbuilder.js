var prevScrollpos = window.pageYOffset;
window.onscroll = function() {hideHeader(); toggleSidebar(); scrollIndicator()};
// window.onscroll = function() {hideHeader(); scrollIndicator()};

$("#sidebar-fixed-sidenav").css("display","none");


// scroll and toggle top nav
function hideHeader() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-header").style.top = "0";
    } else {
        document.getElementById("navbar-header").style.top = "-51px";
    }
    prevScrollpos = currentScrollPos;
}

// scroll indicator
function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator-Bar").style.width = scrolled + "%";
}


// smooth scroll to final designer
$("#jumpToFinal").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


// show & hide sidebar
// -------------- need to change per page ----------------
function toggleSidebar() {
    let scrollPosition = $(document).scrollTop();

    // change to first paragraph header, eg here is #challenge
    let firstHeader = $("#context").position().top;
    if (scrollPosition < firstHeader) {
        $("#sidebar-fixed-sidenav").css("display","none");
    }
    else {
        let mql = window.matchMedia('(min-width: 1600px)').matches;
        if (mql) {
            $("#sidebar-fixed-sidenav").css("display","block");
        }
        else {
            $("#sidebar-fixed-sidenav").css("display","none");
        }
    }
}

// highlight active sidenav-starbucks
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('#sidebar-fixed-sidenav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        let target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#sidebar-fixed-sidenav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidebar-fixed-sidenav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// splide
document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 130,
        rewind: true,
        pagination: false,
        // arrows: false,
		height      : 90,
		gap         : 16,
		cover       : true,
		isNavigation: true,
		// focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();

	var primarySlider = new Splide( '#primary-slider', {
		// type       : 'fade',
		// heightRatio: 0.5,
        rewind: true,
		pagination : false,
		arrows     : false,
		// cover      : true,
	} );

	primarySlider.sync( secondarySlider ).mount();
} );
