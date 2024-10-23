(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }
// Function to read file and pass content to callback
function readFile(fileName, callback) {
  $.get(fileName, function(data) {
      // Replace newlines with <br> to maintain formatting
      var formattedData = data.replace(/\n/g, '<br>');
      // Call the callback function with the formatted file content
      callback(formattedData);
  }).fail(function() {
      alert("Error: Unable to read file.");
  });
}

function searchProduct() {
  // Lấy từ khóa tìm kiếm
  var input = document.getElementById('searchInput').value.toLowerCase();
  
  // Lấy danh sách tất cả các sản phẩm
  var products = document.querySelectorAll('.product-item');
  
  // Duyệt qua tất cả các sản phẩm
  products.forEach(function(product) {
    // Lấy tên sản phẩm
    var productName = product.querySelector('.nameProduct').textContent.toLowerCase();
    
    // Kiểm tra nếu tên sản phẩm chứa từ khóa
    if (productName.includes(input)) {
      product.style.display = "block"; // Hiển thị sản phẩm
    } else {
      product.style.display = "none"; // Ẩn sản phẩm
    }
  });
}
  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();
    $("#searchIcon").click(searchProduct);
     // When a product item is clicked
     $(".product-item").click(function(){
       // Find the nameID inside the clicked product item
       var nameID = $(this).find(".nameID").text();
       sessionStorage.setItem('nameID', nameID);

      });




  }); // End of a document

})(jQuery);