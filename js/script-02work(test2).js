$( document ).ready(function() {
  const menuBtn = document.querySelector('.menu-hamburger')
  const menuClose = document.querySelector('.menu-hamburger-close')
  const mainMenu = document.querySelector('.main-menu')
  let i = 0
  rulesclick = 0
  const scooter = document.querySelector('.scooter-scale')
  const staticMenu = document.querySelector('.static-menu')
  scooter.style.opacity = "1"

  const menuToggle = document.querySelector('.static-menu')
  const hamburgerRound = document.querySelector('.hamburger-round')
  const closeMenu = document.querySelector('.close-menu')


    $('.menu-hamburger').click(function(){
      $('.hamburger--squeeze').toggleClass('is-active');
    });



  menuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    mainMenu.classList.toggle('show-menu')
    staticMenu.classList.remove('sticky')
    // stickyBar.classList.toggle("hide-menu")
    menuToggle.style.position = 'fixed'
    blink()


    
    // const menuLines = document.querySelectorAll('.hamburger-line')
    // const firstLine = menuLines[0]
    // const secondLine = menuLines[1]
    // const thirdLine = menuLines[2]
    // secondLine.classList.toggle('hide-line')


    // if (hamburgerRound.classList.contains('close-menu')) {
    //   const closeMenu = document.querySelector('.close-menu')
    //   closeMenu.addEventListener('click', function() {
    //     const logo = document.querySelector('.main-header__logo-container')
    //     const downloadBtn = document.querySelector('.download-btn')
    //     const language = document.querySelector('.language-switcher')
    //     const downloadBtnIos = document.querySelector('.download-IOS')
  
    //     downloadBtnIos.classList.remove('blink')
    //     logo.classList.remove('blink')
    //     downloadBtn.classList.remove('blink')
    //     language.classList.remove('blink')

    //     downloadBtnIos.classList.add('blink-between')
    //     logo.classList.add('blink-between')
    //     downloadBtn.classList.add('blink-between')
    //     language.classList.add('blink-between')

    //   })
      
    // }
    hamburgerRound.classList.toggle('close-menu')
    // secondLine.classList.toggle('hide-line')


    // if (firstLine.classList.contains("hamburger-down")) {
    //     firstLine.classList.toggle('hamburger-down-reverse')
    //     firstLine.classList.remove('hamburger-down')
    // }
    // firstLine.classList.toggle('hamburger-down')
    // if (thirdLine.classList.contains("hamburger-up")) {
    //   thirdLine.classList.toggle('hamburger-up-reverse')      
    //   thirdLine.classList.remove('hamburger-up')
    // }
    // thirdLine.classList.toggle('hamburger-up')

  })

  function blink() {
    const logo = document.querySelector('.main-header__logo-container')
    const downloadBtn = document.querySelector('.download-btn')
    const language = document.querySelector('.language-switcher')
    const downloadBtnIos = document.querySelector('.download-IOS')

    downloadBtn.style.transition = "0s"
    language.style.transition = "0s"
    downloadBtnIos.style.transition = "0s"
    logo.style.transition = "0s"
    downloadBtn.style.opacity = "0"
    language.style.opacity = "0"
    downloadBtnIos.style.opacity = "0"
    logo.style.opacity = "0"

    setTimeout(() => {
      downloadBtn.style.transition = "0.4s"
      language.style.transition = "0.4s"
      downloadBtnIos.style.transition = "0.4s"
      logo.style.transition = "0.4s"
      downloadBtn.style.opacity = "1"
    language.style.opacity = "1"
    downloadBtnIos.style.opacity = "1"
    logo.style.opacity = "1" 
    $(".logo-img").attr("src", '/wp-content/themes/your-clean-template-3/assets/img/logo.svg')
    }, 700);
    // const logo = document.querySelector('.main-header__logo-container')
    // const downloadBtn = document.querySelector('.download-btn')
    // const language = document.querySelector('.language-switcher')
    // const downloadBtnIos = document.querySelector('.download-IOS')
    // downloadBtnIos.classList.toggle('blink')
    // logo.classList.toggle('blink')
    // downloadBtn.classList.toggle('blink')
    // language.classList.toggle('blink')
  }

  // menuBtn.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   mainMenu.classList.toggle('show-menu')
  //   stickyBar.classList.toggle("hide-menu")

  // })

 menuClose.addEventListener('click', (event) => {
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
  $('.hamburger').toggleClass('is-active');
  hamburgerRound.classList.toggle('close-menu')
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
    staticMenu.classList.add('sticky')
    // stickyBar.style.visibility = 'visible';
    // stickyBar.style.opacity = '1'
    
    // stickyBar.classList.add("sticky")
    $(".logo-img").attr("src", '/wp-content/themes/your-clean-template-3/assets/img/logo-red.svg')
  } else {
    staticMenu.classList.remove('sticky')
    // stickyBar.style.visibility = 'hidden';
    // stickyBar.style.opacity = '0'
    // stickyBar.classList.remove("sticky");
    $(".logo-img").attr("src", '/wp-content/themes/your-clean-template-3/assets/img/logo.svg')
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
  // const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i + 1
  texts[i].classList.add('green-text')
  texts[i-1].classList.remove('green-text')
  // gifs[i].style.zIndex = '-1'
  gifs[i].style.display = 'block'
  let currentVideo = gifs[i]
  // currentVideo.autoplay = "autoplay"
  currentVideo.play()
  gifs[i].play()
  gifs[i-1].style.display = "none"
  gifs[i-1].load()
  if (window.matchMedia("(max-width: 992px)").matches) {
    textMobile[i].style.display = 'block'
    // textMobile[i].classList.toggle('show')
    textMobile[i-1].style.display = 'none'
}

} else {
}
});


$('.arrow-left').on('click', function (event) {
  const textMobile = document.querySelectorAll('.text-item-mobile')
  event.preventDefault()
  if (i <= 2 && i >= 1) {
  const texts = document.querySelectorAll('.green')
  const gifs = document.querySelectorAll('.video-back')
  i = i - 1
  texts[i].classList.add('green-text')
  texts[i+1].classList.remove('green-text')
  gifs[i].style.display = "block"
  gifs[i].play()
  gifs[i + 1].style.display = "none"
  gifs[i + 1].load()
  if (window.matchMedia("(max-width: 992px)").matches) {
    textMobile[i].style.display = 'block'
    textMobile[i+1].style.display = 'none'
  }
  // gifs[i + 1].style.zIndex = '-3'
  }
});


const rulesLink = document.querySelector('.rules-link')

// rulesLink.addEventListener('click', function() {

// })


// $(document).on('click', '.rules-link', function (event) {
//   event.preventDefault();
//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top - 1000
//   }, 3000);
//   mainMenu.classList.toggle('show-menu')


//   // mainMenu.classList.remove('show-menu')
//   // stickyBar.classList.toggle("hide-menu")
// });

if (window.matchMedia("(min-width: 1200px)").matches) {
  $(document).on('click', '.rules-link', function (event) {
    event.preventDefault();
    if (rulesclick == 0) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 1250
    }, 0);
    mainMenu.classList.toggle('show-menu')
    hamburgerRound.classList.toggle('close-menu')
    $('.hamburger--squeeze').toggleClass('is-active');
    } else {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 0);
    mainMenu.classList.toggle('show-menu')
    $('.hamburger--squeeze').toggleClass('is-active');
    hamburgerRound.classList.toggle('close-menu')
    }

    rulesclick = 1
  
  
    // mainMenu.classList.remove('show-menu')
    // stickyBar.classList.toggle("hide-menu")
  });

} else {


  $(document).on('click', '.rules-link', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 0);
    mainMenu.classList.toggle('show-menu')
    $('.hamburger--squeeze').toggleClass('is-active');

    
  
  
    // mainMenu.classList.remove('show-menu')
    // stickyBar.classList.toggle("hide-menu")
  });

}







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


  tl2.from('.woman-container', .10, {x:-1000} );

  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".how-it-works",
    triggerHook: 'onLeave',
              duration: 2000
  })
    .setPin(".how-it-works")
    .setTween(tl3)
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
  

  
  
      function updatePercentage() {
        tl.progress();
        tl3.progress()
      }
  
      // Надо дать отдельный таймлайн для телефона и воткни условие в скроллтоп
  
      function CompleteAnimScale() {
      //  tl.pause()
      }
  
  
  
      function scrollDownAfterAnim() {

  }
  
  
  
  
          const images = [
        "/wp-content/themes/your-clean-template-3/assets/img/00010068.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010069.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010070.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010071.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010072.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010073.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010074.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010075.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010076.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010077.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010078.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010079.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010080.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010081.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010082.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010083.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010084.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010085.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010086.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010088.jpg",
      ];
  
      let obj = {curImg: 0};


    tl3.from('.scooter-scale-img', 20, {scale:8, y:2000})
    tl3.to('scooter-scale-img', 30,  {scale:1, y:100});
    tl3.to(obj, 40,
        {
          curImg: images.length - 1,	// animate propery curImg to number of images
          roundProps: "curImg",				// only integers so it can be used as an array index
          repeat: 0,									// repeat 3 times
          immediateRender: true,			// load first image automatically
          ease: Linear.easeNone,
          delay: 25,
       // show every image the same ammount of time
          onUpdate: function () {
            $(".scooter-scale-img").attr("src", images[obj.curImg]);// set the image source
          },
          onComplete: function () {
            const pinContainer = document.querySelectorAll('.scrollmagic-pin-spacer')
            pinContainer[1].style.zIndex = "-99"

            const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight

console.log('Ширина' + availableScreenWidth)
console.log('Высота' + availableScreenHeight)

            if (window.matchMedia("(min-width: 2048px)").matches) {
              pinContainer[1].style.marginTop = "-1250px"
              console.log('Большой экран')
            } else {
              if (window.matchMedia("(min-width: 1920px)").matches) {
                pinContainer[1].style.marginTop = "-1250px"
              } else {
                pinContainer[1].style.marginTop = "-950px"
              }
            }

            // if (window.matchMedia("(min-width: 1920px)").matches) {
            //   pinContainer[1].style.marginTop = "-1250px"
            // } else {
            //   pinContainer[1].style.marginTop = "-950px"
            // }
          
      
          }
  
        },
        tl3.to('.scooter-scale', 15, {opacity:0}),
        tl3.to('.how-it-works__slider', 15, {opacity:1}),
        tl3.from('.how-it-works__phone', 15, {x:-425} ),
        tl3.to('.how-it-works__phone', 15, {x:0} ),
        tl3.to('.how-it-works__text__item-1', 15, {opacity:1, x:0}),
        tl3.to('.how-it-works__text__item-2', 15, {opacity:1, x:0}),
        tl3.to('.how-it-works__text__item-3', 15, {opacity:1, x:0}),
        tl3.to('.how-it-works__text', 15, {opacity:0}),
        tl3.to('.how-it-works__phone', 15, {x:0, x:0}),
        tl3.to('.how-it-works__phone', 15, {scale:1, x:-425}),
        tl3.to('.arrow-left', 15, {opacity:0}),
        tl3.to('.arrow-right', 15, {opacity:0}),
        tl3.to('.video-back', 15, {opacity:0}),
        tl3.to('.bg-tel', 15, {opacity:1}),
        tl3.to('.how-it-works__phone', 30, {scale:9, x:-1300}),
        // tl3.to('.how-it-works__phone', 30, {scale:3, x:-650}),
        // tl3.to('.how-it-works__phone', 15, {scale:6, x:-1000}),
        // tl3.to('.how-it-works__phone', 15, {scale:9, x:-1300}),
        tl3.to('.how-it-works', 15, {opacity:0})
      );
  
  


    } else {

      



  const tl = new TimelineMax({onUpdate:updatePercentage, onComplete:CompleteAnimScale});
  const  tl2 = new TimelineMax({onUpdate:updatePercentage});
  const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
  const controller = new ScrollMagic.Controller();


  tl2.from('.woman-container', .5, {x:-150} )
          .to('.woman-container', .5, {x:100});

  
  const scene = new ScrollMagic.Scene({
    triggerElement: ".how-it-works",
    triggerHook: 'onLeave',
              duration: 300,
              offset: -320
  })
    // .setPin(".how-it-works")
    .setTween(tl3)
      .addTo(controller);
  
      const scene2 = new ScrollMagic.Scene({
        triggerElement: ".rules",
                  triggerHook: "onLeave",
                  duration: "100%",
                  offset: 600
      })
        .setTween(tl2)
          .addTo(controller);
  

  
  
      function updatePercentage() {
        tl.progress();
        tl3.progress()
      }
  
      // Надо дать отдельный таймлайн для телефона и воткни условие в скроллтоп
  
      function CompleteAnimScale() {
      //  tl.pause()
      }
  
  
  
      function scrollDownAfterAnim() {

  }
  
  
  
  
          const images = [
        "/wp-content/themes/your-clean-template-3/assets/img/00010068.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010069.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010070.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010071.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010072.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010073.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010074.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010075.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010076.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010077.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010078.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010079.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010080.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010081.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010082.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010083.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010084.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010085.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010086.jpg",
        "/wp-content/themes/your-clean-template-3/assets/img/00010088.jpg",
      ];
  
      let obj = {curImg: 0};


    // tl3.from('.scooter-scale-img', 20, {scale:8, y:900})
    // tl3.to('scooter-scale-img', 30,  {scale:1, y:100});

    tl3.to(obj, 5,
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
      
          }
  
        },
        tl3.to('.scooter-scale', 1, {opacity:0, delay:4}),
        tl3.to('.how-it-works__slider', 0, {opacity:1}),


        // tl3.from('.how-it-works__phone', 15, {x:-425} ),
        // tl3.to('.how-it-works__phone', 15, {x:0} ),
        // tl3.to('.how-it-works__text__item-1', 15, {opacity:1, x:0}),
        // tl3.to('.how-it-works__text__item-2', 15, {opacity:1, x:0}),
        // tl3.to('.how-it-works__text__item-3', 15, {opacity:1, x:0}),
        // tl3.to('.how-it-works__text', 15, {opacity:0}),
        // tl3.to('.how-it-works__phone', 15, {x:0, x:0}),
        // tl3.to('.how-it-works__phone', 15, {scale:1, x:-425}),
        // tl3.to('.arrow-left', 15, {opacity:0}),
        // tl3.to('.arrow-right', 15, {opacity:0}),
        // tl3.to('.video-back', 15, {opacity:0}),
        // tl3.to('.bg-tel', 15, {opacity:1}),
        // tl3.to('.how-it-works__phone', 15, {scale:3, x:-650}),
        // tl3.to('.how-it-works__phone', 15, {scale:6, x:-1000}),
        // tl3.to('.how-it-works__phone', 15, {scale:9, x:-1200}),
        // tl3.to('.how-it-works', 15, {opacity:0})
      );
  
  

  
  



      // $('.scooter-scale').css('opacity', '1');

      // const  tl2 = new TimelineMax({onUpdate:updatePercentage});
      // const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
      // const controller = new ScrollMagic.Controller();

      // tl2.from('.woman-container', .5, {x:-150} )
      //     .to('.woman-container', .5, {x:100});
          

      // const scene2 = new ScrollMagic.Scene({
      //   triggerElement: ".rules",
      //             triggerHook: "onLeave",
      //             duration: 300,
      //             offset: 600
      // })
      //   .setTween(tl2)
      //     .addTo(controller);



      // const images = [
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010068.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010069.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010070.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010071.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010072.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010073.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010074.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010075.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010076.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010077.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010078.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010079.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010080.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010081.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010082.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010083.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010084.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010085.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010086.jpg",
      //   "/wp-content/themes/your-clean-template-3/assets/img/00010088.jpg",
      // ];

      // let obj = {curImg: 0};

      // var tween = TweenMax.to(obj, .15,
      //   {
      //     curImg: images.length - 1,	// animate propery curImg to number of images
      //     roundProps: "curImg",				// only integers so it can be used as an array index
      //     repeat: 0,									// repeat 3 times
      //     immediateRender: true,			// load first image automatically
      //     ease: Linear.easeNone,
      //  // show every image the same ammount of time
      //     onUpdate: function () {
      //       $(".scooter-scale-img").attr("src", images[obj.curImg]);// set the image source
      //     },
      //     onComplete: function () {
      //       console.log('dne')
      //       // $(".scooter-scale-img").attr("src", '/wp-content/themes/your-clean-template-3/assets/img/00010088.jpg');
      //       // tl.pause()
      //           //  $('.scooter-scale-img').css('transform', 'translateY(-100px)')
      //       $('.scooter-scale').css('opacity', '0');
      //       $('.how-it-works__slider').css('opacity', 1)  
      //       // scene4.remove(true)
      //       $('.how-it-works__slider').css('display', 'flex');
      //          $('.how-it-works__text__item-1 ').css('opacity', '1')
      // $('.how-it-works__text__item-2 ').css('opacity', '1')
      // $('.how-it-works__text__item-3 ').css('opacity', '1')
      // $('.how-it-works__text__item-1 ').css('transform', 'translateX(0px)')
      // $('.how-it-works__text__item-2 ').css('transform', 'translateX(0px)')
      // $('.how-it-works__text__item-3 ').css('transform', 'translateX(0px)')
      //       scene4.remove(true)
       
      
      //     }
  
      //   }
      // );

      // const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 300, offset: 0})
      // .setTween(tween)
      // .addTo(controller);
     



      
    }
 
});



