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


  const tl = new TimelineMax({onUpdate:updatePercentage, onComplete:CompleteAnimScale});
  const  tl2 = new TimelineMax({onUpdate:updatePercentage});
  const  tl3 = new TimelineMax({onUpdate:updatePercentage, onComplete:scrollDownAfterAnim});
  const controller = new ScrollMagic.Controller();
  

  tl.from('.scooter-scale-img', .5, {scale:8, y:2000})
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
        // tl3.progress()
      }
  
      // Надо дать отдельный таймлайн для телефона и воткни условие в скроллтоп
  
      function CompleteAnimScale() {
    //     console.log('Анимация кончилась')
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
            // tl.pause()
            $(".scooter-scale-img").attr("src", images[obj.curImg]);// set the image source
          },
      }
    );

       const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 400, offset: 800})
            .setTween(tween)
            .addTo(controller);
      

  
  
      }

          const scene4 = new ScrollMagic.Scene({triggerElement: ".how-it-works", duration: 400, offset: 800})
            .setTween(tween)
            .addTo(controller);
      
            function scrollDownAfterAnim() {
        console.log('Анимация кончилась 2')

  }
    
 
});



