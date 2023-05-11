// $('.portfolio__list').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
// });
document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("burger").addEventListener("click", function() {
            document.querySelector(".header").classList.toggle("open")
        })
    });

$('.portfolio__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                  }
                },
                {
                        breakpoint: 769,
                        settings: {
                          slidesToScroll: 1,
                          slidesToShow: 1
                        }
                      }
              ]
});

