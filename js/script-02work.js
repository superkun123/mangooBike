$( document ).ready(function() {
  const menuBtn = document.querySelector('.menu-hamburger')
  const menuClose = document.querySelector('.menu-hamburger-close')
  const mainMenu = document.querySelector('.main-menu')
  let i = 0
  const scooter = document.querySelector('.scooter-scale')
  const staticMenu = document.querySelector('.static-menu')
  scooter.style.opacity = "1"

  const menuToggle = document.querySelector('.static-menu')
  const hamburgerRound = document.querySelector('.hamburger-round')


  menuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    mainMenu.classList.toggle('show-menu')
    staticMenu.classList.remove('sticky')
    // stickyBar.classList.toggle("hide-menu")
    console.log(menuToggle)
    menuToggle.style.position = 'fixed'
    blink()
    $(".logo-img").attr("src", 'assets/img/logo.svg')
    const menuLines = document.querySelectorAll('.hamburger-line')
    const firstLine = menuLines[0]
    const secondLine = menuLines[1]
    const thirdLine = menuLines[2]
    secondLine.classList.toggle('hide-line')
    if (hamburgerRound.classList.contains('close-menu')) {
      blink()
    }
    hamburgerRound.classList.toggle('close-menu')
    // secondLine.classList.toggle('hide-line')
    if (firstLine.classList.contains("hamburger-down")) {
        firstLine.classList.toggle('hamburger-down-reverse')
        firstLine.classList.remove('hamburger-down')
    }
    firstLine.classList.toggle('hamburger-down')
    if (thirdLine.classList.contains("hamburger-up")) {
      thirdLine.classList.toggle('hamburger-up-reverse')      
      thirdLine.classList.remove('hamburger-up')
    }
    thirdLine.classList.toggle('hamburger-up')

  })

  function blink() {
    // staticMenu.classList.toggle('blink')
    const logo = document.querySelector('.main-header__logo-container')
    const downloadBtn = document.querySelector('.download-btn')
    const language = document.querySelector('.language-switcher')
    const downloadBtnIos = document.querySelector('.download-IOS')
    logo.classList.toggle('hideMenuBtns')
    downloadBtn.classList.toggle('hideMenuBtns')
    language.classList.toggle('hideMenuBtns')
    downloadBtnIos.classList.toggle('hideMenuBtns')
    console.log(downloadBtnIos)
    downloadBtnIos.classList.toggle('blink')
    logo.classList.toggle('blink')
    downloadBtn.classList.toggle('blink')
    language.classList.toggle('blink')
    console.log(downloadBtnIos)
    // staticMenu.classList.remove('hide')
  }

  // menuBtn.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   mainMenu.classList.toggle('show-menu')
  //   stickyBar.classList.toggle("hide-menu")

  // })

 menuClose.addEventListener('click', (event) => {
   console.log('закрыл меню')
   event.preventDefault()
  //  mainMenu.classList.toggle('show-menu')
  mainMenu.classList.remove('show-menu')
  //  stickyBar.classList.toggle("hide-menu")
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
  // stickyBar.classList.toggle("hide-menu")
});



window.onscroll = function() {
 
if (!mainMenu.classList.contains("show-menu")) {
  stickMenu()  
}
}

// const stickyBar = document.querySelector('.sticky-menu')
// const stickyOffset = stickyBar.offsetTop;
const stickyOffset = staticMenu.offsetTop

function stickMenu() {
  if (window.pageYOffset >= stickyOffset + 100) {
    console.log('Где Меню')
    staticMenu.classList.add('sticky')
    // stickyBar.style.visibility = 'visible';
    // stickyBar.style.opacity = '1'
    
    // stickyBar.classList.add("sticky")
    $(".logo-img").attr("src", 'assets/img/logo-red.svg')
  } else {
    staticMenu.classList.remove('sticky')
    // stickyBar.style.visibility = 'hidden';
    // stickyBar.style.opacity = '0'
    // stickyBar.classList.remove("sticky");
    $(".logo-img").attr("src", 'assets/img/logo.svg')
  }
}




// Слайдер

// const arrowRight = document.querySelector('.arrow-right')



// arrowRight.addEventListener('click', () => {
// })


$('.arrow-right').on('click', function (event) {
  const texts = document.querySelectorAll('.green')
  const textMobile = document.querySelectorAll('.text-item-mobile')
  event.preventDefault()
  if (i < 2) {
  console.log('клик слайдер')
  // const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i + 1
  texts[i].classList.add('green-text')
  texts[i-1].classList.remove('green-text')
  // gifs[i].style.zIndex = '-1'
  gifs[i].style.display = 'block'
  console.log(gifs[i])
  let currentVideo = gifs[i]
  // currentVideo.autoplay = "autoplay"
  currentVideo.play()
  gifs[i].play()
  gifs[i-1].style.display = "none"
  gifs[i-1].load()
  if (window.matchMedia("(max-width: 992px)").matches) {
    textMobile[i].style.display = 'block'
    textMobile[i].classList.toggle('show')
    textMobile[i-1].style.display = 'none'
}

} else {
  console.log(i)
}
});


$('.arrow-left').on('click', function (event) {
  const textMobile = document.querySelectorAll('.text-item-mobile')
  event.preventDefault()
  if (i <= 2 && i >= 1) {
  console.log(i)
  const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i - 1
  texts[i].classList.add('green-text')
  texts[i+1].classList.remove('green-text')
  gifs[i].style.display = "block"
  gifs[i].play()
  gifs[i + 1].style.display = "none"
  gifs[i + 1].load()
  console.log(this.offsetTop)
  if (window.matchMedia("(max-width: 992px)").matches) {
    textMobile[i].style.display = 'block'
    textMobile[i+1].style.display = 'none'
  }
  // gifs[i + 1].style.zIndex = '-3'
  }
});







// if (window.matchMedia("(max-width: 992px)").matches) {

//   $('.arrow-right').on('click', function (event) {
//     event.preventDefault()
//     if (i < 2) {
//     console.log('клик слайдер')
//     const texts = document.querySelectorAll('.green')
//     const gifs = document.querySelectorAll('.video-back')
//     i = i + 1
//     texts[i].style.opacity = "1"
//     texts[i-1].opacity = "0"
//     gifs[i].style.zIndex = '-1'
//   } else {
//     console.log(i)
//   }
//   });
  
  
//   $('.arrow-left').on('click', function (event) {
//     event.preventDefault()
//     if (i <= 2 && i >= 1) {
//     console.log(i)
//     const texts = document.querySelectorAll('.green')
//     const gifs = document.querySelectorAll('.video-back')
//     i = i - 1
//     texts[i].style.opacity = "1"
//     texts[i+1].opacity = "0"
//     gifs[i + 1].style.zIndex = '-3'
//     }
//   });

// }

if (window.matchMedia("(max-width: 480px)").matches) {

}


// animation on mousewheel


if (window.matchMedia("(min-width: 1025px)").matches) {




  const tl = new TimelineMax({onUpdate:updatePercentage, onComplete:CompleteAnimScale});
  const  tl2 = new TimelineMax({onUpdate:updatePercentage});
  const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
  const controller = new ScrollMagic.Controller();


  if (window.matchMedia("(min-width: 2450px)").matches) {
    tl.from('.scooter-scale-img', .40, {scale:8, y:2000})
    .to('scooter-scale-img', .5, {scale:1, y:100});

  }

  if (window.matchMedia("(min-width: 2350px)").matches) {
    tl.from('.scooter-scale-img', .30, {scale:8, y:2000})
    .to('scooter-scale-img', .5, {scale:1, y:100})
  }

  
  if (window.matchMedia("(min-width: 2049px)").matches) {
    tl.from('.scooter-scale-img', .20, {scale:8, y:2000})
    .to('scooter-scale-img', .5, {scale:1, y:100});

  }

  // if (window.matchMedia("(min-width: 2049px)").matches) {
  //   tl.from('.scooter-scale-img', .10, {scale:8, y:2000})
  //   .to('scooter-scale-img', .5, {scale:1, y:100});

  // }

  // } else if (window.matchMedia("(min-width: 1920px)").matches) {
  //     tl.from('.scooter-scale-img', .15, {scale:8, y:2000})
  //   .to('scooter-scale-img', .5, {scale:1, y:100});

  // } else if (window.matchMedia("(min-width: 1600px)").matches) {
  //   tl.from('.scooter-scale-img', .15, {scale:8, y:2000})
  //   .to('scooter-scale-img', .5, {scale:1, y:100});
  // } else {
  //   tl.from('.scooter-scale-img', .15, {scale:8, y:2000})
  //   .to('scooter-scale-img', .5, {scale:1, y:100});
  // }
  tl.from('.scooter-scale-img', .15, {scale:8, y:2000})
    .to('scooter-scale-img', .5, {scale:1, y:100});
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
                  offset: 1560
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
     
      }
  
  
  
      function scrollDownAfterAnim() {

  }
  
  
  
  
          const images = [
        "assets/img/00010068.jpg",
        "assets/img/00010069.jpg",
        "assets/img/00010070.jpg",
        "assets/img/00010071.jpg",
        "assets/img/00010072.jpg",
        "assets/img/00010073.jpg",
        "assets/img/00010074.jpg",
        "assets/img/00010075.jpg",
        "assets/img/00010076.jpg",
        "assets/img/00010077.jpg",
        "assets/img/00010078.jpg",
        "assets/img/00010079.jpg",
        "assets/img/00010080.jpg",
        "assets/img/00010081.jpg",
        "assets/img/00010082.jpg",
        "assets/img/00010083.jpg",
        "assets/img/00010084.jpg",
        "assets/img/00010085.jpg",
        "assets/img/00010086.jpg",
        "assets/img/00010088.jpg",
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
            // $(".scooter-scale-img").attr("src", 'assets/img/00010088.jpg');
            tl.pause()
                //  $('.scooter-scale-img').css('transform', 'translateY(-100px)')
            const pinContainer = document.querySelectorAll('.scrollmagic-pin-spacer')
            // console.log(pinContainer[1])
            pinContainer[1].style.zIndex = "-99"
            if (window.matchMedia("(min-width: 2250px)").matches) {
              pinContainer[1].style.marginTop = "-1250px"
            } else {
              pinContainer[1].style.marginTop = "-950px"
            }
            // pinContainer[1].style.marginTop = "-950px"
            $('.scooter-scale').css('opacity', '0');
            // scene4.remove(true)
            $('.how-it-works__slider').css('display', 'flex');
            scene4.remove(true)
            function scroll() {
             let offset = posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
              // console.log('y=' + posTop);
              // console.log(offset)
                     if (offset > 1290 && offset < 2000) {
              $('html, body').animate({
                scrollTop:$('main').offset().top
            }, 400);
            }
            }
            scroll()
  
  
  
            tl3.from('.how-it-works__phone', 1200, {x:-425} )
            .to('.how-it-works__text__item-1', 800, {opacity:1, x:0})
            .to('.how-it-works__text__item-2', 800, {opacity:1, x:0})
            .to('.how-it-works__text__item-3', 800, {opacity:1, x:0})
            .to('.how-it-works__text', 300, {opacity:0})
            .to('.how-it-works__phone', 300, {x:0, x:0})
            // .to('.video-back', 10, {opacity:0.5})
            // .to('.bg-tel', 10, {opacity:1})
            .to('.how-it-works__phone', 800, {scale:1, x:-425})
            .to('.arrow-left', 0, {opacity:0})
            .to('.arrow-right', 0, {opacity:0})
            .to('.video-back', 400, {opacity:0})
            .to('.bg-tel', 400, {opacity:1})
            .to('.how-it-works__phone', 400, {scale:3, x:-650})
            .to('.how-it-works__phone', 400, {scale:6, x:-1000})
            .to('.how-it-works__phone', 400, {scale:9, x:-1200})
            // .to('.how-it-works__phone', 150, {scale:4})
            // .to('.how-it-works__phone', 150, {scale:6})
            // .to('.how-it-works__phone', 150, {scale:8})
            // .to('.how-it-works__phone', 100, {scale:8})
            // .to('.video-back', 30, {opacity:0})
            // .to('.bg-tel', 100, {opacity:0.9})
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
      $('.scooter-scale').css('opacity', '1');
      // $('.how-it-works__slider').css('display', 'flex')
      // $('.how-it-works__slider').css('opacity', 1)
      // $('.how-it-works__text__item-1 ').css('opacity', '1')
      // $('.how-it-works__text__item-2 ').css('opacity', '1')
      // $('.how-it-works__text__item-3 ').css('opacity', '1')
      // $('.how-it-works__text__item-1 ').css('transform', 'translateX(0px)')
      // $('.how-it-works__text__item-2 ').css('transform', 'translateX(0px)')
      // $('.how-it-works__text__item-3 ').css('transform', 'translateX(0px)')

      const  tl2 = new TimelineMax({onUpdate:updatePercentage});
      const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
      const controller = new ScrollMagic.Controller();

      tl2.from('.woman-container', .5, {x:-150} )
          .to('.woman-container', .5, {x:100});
          

      const scene2 = new ScrollMagic.Scene({
        triggerElement: ".rules",
                  triggerHook: "onLeave",
                  duration: 300,
                  offset: 600
      })
        // .setPin(".rules")
        .setTween(tl2)
          .addTo(controller);


          // const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 400, offset: 1300})
          // .setTween(tween)
          // .addTo(controller);


      // $('.video-back').css('opacity', '1')

      // const images = [
      //   "assets/img/00010068.jpg",
      //   "assets/img/00010072.jpg",
      //   "assets/img/00010076.jpg",
      //   "assets/img/00010080.jpg",
      //   "assets/img/00010084.jpg",
      //   "assets/img/00010088.jpg",
      // ]

      const images = [
        "assets/img/00010068.jpg",
        "assets/img/00010069.jpg",
        "assets/img/00010070.jpg",
        "assets/img/00010071.jpg",
        "assets/img/00010072.jpg",
        "assets/img/00010073.jpg",
        "assets/img/00010074.jpg",
        "assets/img/00010075.jpg",
        "assets/img/00010076.jpg",
        "assets/img/00010077.jpg",
        "assets/img/00010078.jpg",
        "assets/img/00010079.jpg",
        "assets/img/00010080.jpg",
        "assets/img/00010081.jpg",
        "assets/img/00010082.jpg",
        "assets/img/00010083.jpg",
        "assets/img/00010084.jpg",
        "assets/img/00010085.jpg",
        "assets/img/00010086.jpg",
        "assets/img/00010088.jpg",
      ];

      let obj = {curImg: 0};

      var tween = TweenMax.to(obj, .15,
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
            console.log('dne')
            // $(".scooter-scale-img").attr("src", 'assets/img/00010088.jpg');
            // tl.pause()
                //  $('.scooter-scale-img').css('transform', 'translateY(-100px)')
            $('.scooter-scale').css('opacity', '0');
            $('.how-it-works__slider').css('opacity', 1)  
            // scene4.remove(true)
            $('.how-it-works__slider').css('display', 'flex');
               $('.how-it-works__text__item-1 ').css('opacity', '1')
      $('.how-it-works__text__item-2 ').css('opacity', '1')
      $('.how-it-works__text__item-3 ').css('opacity', '1')
      $('.how-it-works__text__item-1 ').css('transform', 'translateX(0px)')
      $('.how-it-works__text__item-2 ').css('transform', 'translateX(0px)')
      $('.how-it-works__text__item-3 ').css('transform', 'translateX(0px)')
            scene4.remove(true)
       
      
          }
  
        }
      );

      const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 300, offset: 0})
      .setTween(tween)
      .addTo(controller);
     



      
    }
 
});



