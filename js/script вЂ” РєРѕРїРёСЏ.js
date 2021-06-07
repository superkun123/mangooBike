$( document ).ready(function() {
  const menuBtn = document.querySelector('.menu-hamburger')
  const menuClose = document.querySelector('.menu-hamburger-close')
  const mainMenu = document.querySelector('.main-menu')

  menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show-menu')
  })

 menuClose.addEventListener('click', () => {
   mainMenu.classList.toggle('show-menu')
 })

 $('.card').on('show.bs.collapse', function () {
   let currentCardData = $(this).data('target')
   let currentCardBtn = $(this).find('.btn')
   if (currentCardData == currentCardBtn.data('target')) {
    currentCardBtn.addClass('showed-btn')
   }
})

$('.card').on('hide.bs.collapse', function () {
  let currentCardData = $(this).data('target')
  let currentCardBtn = $(this).find('.btn')
  if (currentCardData == currentCardBtn.data('target')) {
   currentCardBtn.removeClass('showed-btn')
  }
})


// animation on mousewheel


const tl = new TimelineMax({onUpdate:updatePercentage});
const  tl2 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('.scooter-scale-img', .5, {scale:4, y:1000})
  .to('scooter-scale-img', .5, {scale:1, y:0});
tl2.from('.woman-container', .10, {x:-1000} );

const scene = new ScrollMagic.Scene({
  triggerElement: ".how-it-works",
  triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".how-it-works")
  .setTween(tl)
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".rules",
                triggerHook: "onLeave",
                duration: "100%",
                offset: 1660
    })
      .setPin(".rules")
      .setTween(tl2)
        .addTo(controller);





    function updatePercentage() {
      tl.progress();
    }

    // Надо дать отдельный таймлайн для телефона и воткни условие в скроллтоп

    // function scrollDownAfterAnim() {
    //   $('html, body').animate({
    //     scrollTop:$('.rules').offset().top
    // }, 400);
    // }




        const images = [
      "./assets/img/00010068.png",
      "./assets/img/00010069.png",
      "./assets/img/00010070.png",
      "./assets/img/00010071.png",
      "./assets/img/00010072.png",
      "./assets/img/00010073.png",
      "./assets/img/00010074.png",
      "./assets/img/00010075.png",
      "./assets/img/00010076.png",
      "./assets/img/00010077.png",
      "./assets/img/00010078.png",
      "./assets/img/00010079.png",
      "./assets/img/00010080.png",
      "./assets/img/00010081.png",
      "./assets/img/00010082.png",
      "./assets/img/00010083.png",
      "./assets/img/00010084.png",
      "./assets/img/00010085.png",
      "./assets/img/00010086.png",
      "./assets/img/00010088.png",
    ];

    let obj = {curImg: 0};

    var tween = TweenMax.to(obj, 10,
      {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,
 		// show every image the same ammount of time
        onUpdate: function () {
          $(".scooter-scale-img").attr("src", images[obj.curImg]);// set the image source
        },
        onComplete: function () {
          scene4.remove(true)
          $('.scooter-scale').css('opacity', '0');
          $('.how-it-works__slider').css('display', 'flex');
          $('html, body').animate({
            scrollTop:$('main').offset().top
        }, 400);
          tl.from('.how-it-works__phone', 20, {x:-250} )
            .to('.how-it-works__text__item-1', 20, {opacity:1, x:0})
            .to('.how-it-works__text__item-2', 20, {opacity:1, x:0})
            .to('.how-it-works__text__item-3', 20, {opacity:1, x:0})
            .to('.how-it-works__text', 20, {opacity:0})
            .to('.how-it-works__phone', 20, {x:0, x:-250})
            .to('.how-it-works__phone', 30, {scale:4, x:-140, opacity:0})
            .to('how-it-works', 10, {opacity:0});
          setTimeout("$('.scooter-scale').remove()", 300);
          setTimeout("  $('.how-it-works__slider').css('opacity', '1');", 500);         
    
        }

      }
    );


  const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 400, offset: 800})
					.setTween(tween)
          .addTo(controller);



 
});



