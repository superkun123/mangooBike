$( document ).ready(function() {
  const menuBtn = document.querySelector('.menu-hamburger')
  const menuClose = document.querySelector('.menu-hamburger-close')
  const mainMenu = document.querySelector('.main-menu')
  let i = 0


  menuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    mainMenu.classList.toggle('show-menu')
    stickyBar.classList.toggle("hide-menu")

  })

 menuClose.addEventListener('click', (event) => {
   event.preventDefault()
   mainMenu.classList.toggle('show-menu')
   stickyBar.classList.toggle("hide-menu")
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



$(document).on('click', '.main-menu__li', function (event) {
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 0);
  mainMenu.classList.toggle('show-menu')
  stickyBar.classList.toggle("hide-menu")
});


window.onscroll = function() {
  stickMenu()
}

const stickyBar = document.querySelector('.main-header__menu-row')
const stickyOffset = stickyBar.offsetTop;

function stickMenu() {
  if (window.pageYOffset >= stickyOffset + 100) {
    stickyBar.classList.add("sticky")
    $(".logo-img").attr("src", './assets/img/logo-red.svg')
  } else {
    stickyBar.classList.remove("sticky");
    $(".logo-img").attr("src", './assets/img/logo.svg')
  }
}



// Слайдер

// const arrowRight = document.querySelector('.arrow-right')



// arrowRight.addEventListener('click', () => {
// })


$('.arrow-right').on('click', function (event) {
  event.preventDefault()
  if (i < 2) {
  console.log('клик слайдер')
  const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i + 1
  texts[i].classList.add('green-text')
  texts[i-1].classList.remove('green-text')
  gifs[i].style.zIndex = '-1'
} else {
  console.log(i)
}
});


$('.arrow-left').on('click', function (event) {
  event.preventDefault()
  if (i <= 2 && i >= 1) {
  console.log(i)
  const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i - 1
  texts[i].classList.add('green-text')
  texts[i+1].classList.remove('green-text')
  gifs[i + 1].style.zIndex = '-3'
  }
});


// animation on mousewheel


if (window.matchMedia("(min-width: 1200px)").matches) {


const tl = new TimelineMax({onUpdate:updatePercentage, onComplete:CompleteAnimScale});
const  tl2 = new TimelineMax({onUpdate:updatePercentage});
const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
const controller = new ScrollMagic.Controller();


tl.from('.scooter-scale-img', .5, {scale:8, y:2200})
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


        const scene3 = new ScrollMagic.Scene({
          triggerElement: ".how-it-works",
          triggerHook: "onLeave",
                    duration: "100%"
        })
          .setTween(tl3)
            .addTo(controller);


    function updatePercentage() {
      tl.progress();
      tl3.progress()
    }

    // Надо дать отдельный таймлайн для телефона и воткни условие в скроллтоп

    function CompleteAnimScale() {
      console.log('Первая анимация закончилась')
      // tl.pause()
      // $(".scooter-scale-img").attr("src", './assets/img/00010088.png');
      // $('.scooter-scale-img').css('transform', 'translateY(-30000px)')
      // tl.kill()
      // const pinContainer = document.querySelectorAll('.scrollmagic-pin-spacer')
      // console.log(pinContainer[1])
      // pinContainer[1].style.zIndex = "-99"
      // pinContainer[1].style.marginTop = "-1000px"
    }



    function scrollDownAfterAnim() {
      // const video = document.querySelector('.video-back')
      // video.style.opacity = "0"
      // function scroll() {
      //   let offset = posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      //    console.log('y=' + posTop);
      //    console.log(offset)
      //           if (offset > 1590 && offset < 2000) {
      //    $('html, body').animate({
      //      scrollTop:$('.rules').offset().top
      //  }, 400);
      //  }
      //  }
      //  scroll() 
      // const howItWorks = document.querySelector('.how-it-works')
      // const pinContainer = document.querySelectorAll('.scrollmagic-pin-spacer')
      // console.log(pinContainer[1])
      // pinContainer[1].style.zIndex = "-99"
      // pinContainer[1].style.marginTop = "-1000px"
      // const rules = document.querySelector('.rules')
      // // howItWorks.style.opacity = "0"
      // rules.style.opacity = "0.3"
      

      // let showRules = function () {
      //   $('html, body').animate({
      //          scrollTop:$('.rules').offset().top
      //      }, 0);
      //   rules.style.transitionDuration = "2s"
      //   rules.style.opacity = "1"
      //   setTimeout(hideRules, 1300)

      // }

      // const hideRules = function () {
      //   rules.style.transitionDuration = 'unset'
      // }

      // function returnPin() {
      //   howItWorks.style.opacity = "1"
      // }

      // setTimeout(showRules, 1200)
      // setTimeout(returnPin, 1400)
}




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
          // $(".scooter-scale-img").attr("src", './assets/img/00010088.png');
          tl.pause()
               $('.scooter-scale-img').css('transform', 'translateY(-100px)')
          const pinContainer = document.querySelectorAll('.scrollmagic-pin-spacer')
          console.log(pinContainer[1])
          pinContainer[1].style.zIndex = "-99"
          pinContainer[1].style.marginTop = "-950px"
          $('.scooter-scale').css('opacity', '0');
          // scene4.remove(true)
          $('.how-it-works__slider').css('display', 'flex');
          scene4.remove(true)
          function scroll() {
           let offset = posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            console.log('y=' + posTop);
            console.log(offset)
                   if (offset > 1290 && offset < 2000) {
            $('html, body').animate({
              scrollTop:$('main').offset().top
          }, 400);
          }
          }
          scroll()



          tl3.from('.how-it-works__phone', 60, {x:-200} )
          .to('.how-it-works__text__item-1', 60, {opacity:1, x:0})
          .to('.how-it-works__text__item-2', 60, {opacity:1, x:0})
          .to('.how-it-works__text__item-3', 60, {opacity:1, x:0})
          .to('.how-it-works__text', 30, {opacity:0})
          .to('.how-it-works__phone', 30, {x:0, x:-200})
          .to('.video-back', 10, {opacity:0.5})
          .to('.how-it-works__phone', 30, {scale:2, x:-100})
          .to('.how-it-works__phone', 40, {scale:4, x:125})
          .to('.video-back', 30, {opacity:0})
          .to('.bg-tel', 100, {opacity:0.9})
          // .to('.how-it-works', 30, {opacity:0.5})
          .to('.how-it-works', 40, {opacity:0})
          // setTimeout("$('.scooter-scale').remove()", 300);
          setTimeout("  $('.how-it-works__slider').css('opacity', '1');", 500);         
    
        }

      }
    );


  const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 400, offset: 800})
					.setTween(tween)
          .addTo(controller);




    } else {
      $('.scooter-scale').css('opacity', '0');
      $('.how-it-works__slider').css('display', 'flex')
      $('.how-it-works__slider').css('opacity', 1)
      $('.how-it-works__text__item-1 ').css('opacity', '1')
      $('.how-it-works__text__item-2 ').css('opacity', '1')
      $('.how-it-works__text__item-3 ').css('opacity', '1')
      $('.how-it-works__text__item-1 ').css('transform', 'translateX(0px)')
      $('.how-it-works__text__item-2 ').css('transform', 'translateX(0px)')
      $('.how-it-works__text__item-3 ').css('transform', 'translateX(0px)')

      const  tl2 = new TimelineMax({onUpdate:updatePercentage});
      const controller = new ScrollMagic.Controller();

      tl2.from('.woman-container', .5, {x:-150} )
          .to('.woman-container', .5, {x:100});
      // function updatePercentage() {
      //   tl2.progress();
      // }
  

      const scene2 = new ScrollMagic.Scene({
        triggerElement: ".rules",
                  triggerHook: "onLeave",
                  duration: "100%",
                  offset: 700
      })
        .setPin(".rules")
        .setTween(tl2)
          .addTo(controller);
  
      // $('.video-back').css('opacity', '1')
    }
 
});



