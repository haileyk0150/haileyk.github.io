// 메인 이미지
$(document).ready(function(){

  var $slideWrap = document.querySelector('.slide-container'),
      $slideContainer = document.querySelector('.slider'),
      $slide = document.querySelectorAll('.slide'),
      $navPrev = document.getElementById('prev'),
      $navNext = document.getElementById('next'),
      $slideCount = $slide.length,
      $currentIndex = 0,
      timer = undefined, /*이름은 있는데 아직 값이 지정돼있지 않음, timer지역변수를 공공변수로 바꿈 */
      $pagerBtn = document.querySelectorAll('.pager span');


  // 슬라이드 가로로 배열 
  for(var i = 0; i < $slideCount; i++) {
    $slide[i].style.left = i * 100 + '%';
  }

  // 슬라이드 이동 함수
  function goToSlide(idx) {
    $slideContainer.classList.add('animated'); /*순서 맨처음*/
    $slideContainer.style.left = -100 * idx + '%';
    $currentIndex = idx;

    // 모든$pagerBtn에 active제거, 클릭된 요소에만 active 추가
    for(var y = 0; y < $pagerBtn.length; y++){
    $pagerBtn[y].classList.remove('active');
    }
    $pagerBtn[idx].classList.add('active');
  }

  // 시작하자마자 pager.active적용
  goToSlide(0);

  // 버튼을 클릭하면 슬라이드 이동
  $navPrev.addEventListener('click', function(){

    if($currentIndex == 0) {
      goToSlide($slideCount - 1);
    } else {
      goToSlide($currentIndex - 1);
    }
  });
  $navNext.addEventListener('click', function(){
    
    if($currentIndex == $slideCount - 1) {
      goToSlide(0);
    } else {
      goToSlide($currentIndex + 1);
    }
  });


  // 자동 슬라이드 함수 지정 : 함수로 만들어야 다시 실행 가능
  function startAutoSlide(){ /*매게변수 없이 그일만해 괄호안에 아무것도 안들어감 */

    // 자동 슬라이드
    $timer = setInterval(function(){ /*변수지정 = 이름지정 , 함수안의 이름(timer)는 함수 밖에서 사용 불가능 -> 함수 밖에서 사용하려면 공공변수로 바꿈*/
      var nextIdx = ($currentIndex + 1) % $slideCount;

      goToSlide(nextIdx);
    },4000);
  }

  // 자동 슬라이드 함수 실행
  startAutoSlide();

  // 자동 슬라이드 멈춤 (slidewrap에 마우스가 들어오면 할일, 나가면 할일)
  $slideWrap.addEventListener('mouseenter',function(){
    clearInterval($timer);
  });
  $slideWrap.addEventListener('mouseleave',function(){
    startAutoSlide();
  });

  //pager로 슬라이드 이동하기
  for(var x = 0; x < $pagerBtn.length; x++) {
    $pagerBtn[x].addEventListener('click',function(event){
      // console.log(event.target); data-idx사용 방법
      console.log(event.target.innerText);
      //var pagerNum = event.target.getAttribute('data-idx');
      var pagerNum = event.target.innerText - 1;
      goToSlide(pagerNum);

    });
  }

});

// new 이미지
$(document).ready(function(){

  var $newSlideWrap = document.querySelector('.new-container'),
      $newSlideContainer = document.querySelector('.slider-n'),
      $newSlide = document.querySelectorAll('.slide-n'),
      $newPrev = document.getElementById('prev-n'),
      $newNext = document.getElementById('next-n'),
      $newSlideCount = $newSlide.length,
      $newCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var z = 0; z < $newSlideCount; z++) {
    $newSlide[z].style.left = z * 50 + '%';
  }
  // 슬라이드 이동 함수
  function newGotoSlide(idn) {
    $newSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $newSlideContainer.style.left = -50 * idn + '%';
    $newCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $newPrev.addEventListener('click', function(){

      if($newCurrentIndex == 0) {
        newGotoSlide($newSlideCount - 1);
      } else {
        newGotoSlide($newCurrentIndex - 1);
      }
    });
    $newNext.addEventListener('click', function(){
      
      if($newCurrentIndex == $newSlideCount - 1) {
        newGotoSlide(0);
      } else {
        newGotoSlide($newCurrentIndex + 1);
      }
    });
  
});

// best 이미지

$(document).ready(function(){

  var $bestSlideWrap = document.querySelector('.best-container'),
      $bestSlideContainer = document.querySelector('.slider-b'),
      $bestSlide = document.querySelectorAll('.slide-b'),
      $bestPrev = document.getElementById('prev-b'),
      $bestNext = document.getElementById('next-b'),
      $bestSlideCount = $bestSlide.length,
      $bestCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var a = 0; a < $bestSlideCount; a++) {
    $bestSlide[a].style.left = a * 50 + '%';
  }
  // 슬라이드 이동 함수
  function bestGotoSlide(idn) {
    $bestSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $bestSlideContainer.style.left = -50 * idn + '%';
    $bestCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $bestPrev.addEventListener('click', function(){

      if($bestCurrentIndex == 0) {
        bestGotoSlide($bestSlideCount - 1);
      } else {
        bestGotoSlide($bestCurrentIndex - 1);
      }
    });
    $bestNext.addEventListener('click', function(){
      
      if($bestCurrentIndex == $bestSlideCount - 1) {
        bestGotoSlide(0);
      } else {
        bestGotoSlide($bestCurrentIndex + 1);
      }
    });
  
});

// sns 이미지

$(document).ready(function(){

  var $snsSlideWrap = document.querySelector('.sns-container'),
      $snsSlideContainer = document.querySelector('.slider-s'),
      $snsSlide = document.querySelectorAll('.slide-s'),
      $snsPrev = document.getElementById('prev-s'),
      $snsNext = document.getElementById('next-s'),
      $snsSlideCount = $snsSlide.length,
      $snsCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var b = 0; b < $snsSlideCount; b++) {
    $snsSlide[b].style.left = b * 50 + '%';
  }
  // 슬라이드 이동 함수
  function snsGotoSlide(idn) {
    $snsSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $snsSlideContainer.style.left = -50 * idn + '%';
    $snsCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $snsPrev.addEventListener('click', function(){

      if($snsCurrentIndex == 0) {
        snsGotoSlide($snsSlideCount - 1);
      } else {
        snsGotoSlide($snsCurrentIndex - 1);
      }
    });
    $snsNext.addEventListener('click', function(){
      
      if($snsCurrentIndex == $snsSlideCount - 1) {
        snsGotoSlide(0);
      } else {
        snsGotoSlide($snsCurrentIndex + 1);
      }
    });
  
});

// right-menu

$(document).ready(function(){

  // search-mobile
  $('#search').click(function(){
    $('.search').toggleClass('active');
  });

  $('.search-close').click(function(){
    $('.search').toggleClass('active');
  });

  // right-menu-mobile
  $('#menu').click(function(){
    $(this).toggleClass('active');
    $('.right-menu').toggleClass('active');
  });

  // right-menu-sub-menu의 아코디언 메뉴
  $('.aco-list').click(function(){
    if ($(this).hasClass('active')){
      slideUp(300);
    } else {
      slideUp(300);
      $(this).addClass('active').next().slideDown();
    }
    function slideUp() {
      $('.aco-list').removeClass('active').next().slideUp();
    }
  });
});

// 로고 배경 색상 변경

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollvh = $(this).scrollTop();

    if (scrollvh >= 100) {
      $('.top').css('background-color','rgba(255, 255, 255, 0.8)');
      $('.top-d').css('background-color','rgba(255, 255, 255, 0.8)');
    }else {
      $('.top').css('background-color','transparent');
      $('.top-d').css('background-color','transparent');
    }
  });
});

// Desktop - 메인 이미지

$(document).ready(function(){

  var $dslideWrap = document.querySelector('.slide-container-d'),
      $dslideContainer = document.querySelector('.slider-d'),
      $dslide = document.querySelectorAll('.slide-d'),
      $dnavPrev = document.getElementById('prev-d'),
      $dnavNext = document.getElementById('next-d'),
      $dslideCount = $dslide.length,
      $dcurrentIndex = 0,
      dtimer = undefined, /*이름은 있는데 아직 값이 지정돼있지 않음, timer지역변수를 공공변수로 바꿈 */
      $dpagerBtn = document.querySelectorAll('.pager-d span');


  // 슬라이드 가로로 배열 
  for(var c = 0; c < $dslideCount; c++) {
    $dslide[c].style.left = c * 100 + '%';
  }

  // 슬라이드 이동 함수
  function dgoToSlide(idx) {
    $dslideContainer.classList.add('animated'); /*순서 맨처음*/
    $dslideContainer.style.left = -100 * idx + '%';
    $dcurrentIndex = idx;

    // 모든$pagerBtn에 active제거, 클릭된 요소에만 active 추가
    for(var d = 0; d < $dpagerBtn.length; d++){
    $dpagerBtn[d].classList.remove('active');
    }
    $dpagerBtn[idx].classList.add('active');
  }

  // 시작하자마자 pager.active적용
  dgoToSlide(0);

  // 버튼을 클릭하면 슬라이드 이동
  $dnavPrev.addEventListener('click', function(){

    if($dcurrentIndex == 0) {
      dgoToSlide($dslideCount - 1);
    } else {
      dgoToSlide($dcurrentIndex - 1);
    }
  });
  $dnavNext.addEventListener('click', function(){
    
    if($dcurrentIndex == $dslideCount - 1) {
      dgoToSlide(0);
    } else {
      dgoToSlide($dcurrentIndex + 1);
    }
  });


  // 자동 슬라이드 함수 지정 : 함수로 만들어야 다시 실행 가능
  function dstartAutoSlide(){ /*매게변수 없이 그일만해 괄호안에 아무것도 안들어감 */

    // 자동 슬라이드
    $dtimer = setInterval(function(){ /*변수지정 = 이름지정 , 함수안의 이름(timer)는 함수 밖에서 사용 불가능 -> 함수 밖에서 사용하려면 공공변수로 바꿈*/
      var dnextIdx = ($dcurrentIndex + 1) % $dslideCount;

      dgoToSlide(dnextIdx);
    },4000);
  }

  // 자동 슬라이드 함수 실행
  dstartAutoSlide();

  // 자동 슬라이드 멈춤 (slidewrap에 마우스가 들어오면 할일, 나가면 할일)
  $dslideWrap.addEventListener('mouseenter',function(){
    clearInterval($dtimer);
  });
  $dslideWrap.addEventListener('mouseleave',function(){
    dstartAutoSlide();
  });

  //pager로 슬라이드 이동하기
  for(var e = 0; e < $dpagerBtn.length; e++) {
    $dpagerBtn[e].addEventListener('click',function(event){
      // console.log(event.target); data-idx사용 방법
      console.log(event.target.innerText);
      //var pagerNum = event.target.getAttribute('data-idx');
      var dpagerNum = event.target.innerText - 1;
      dgoToSlide(dpagerNum);

    });
  }

});

// Desktop - search
$(document).ready(function(){
  $('#search-d').click(function(){
    $('.search-d').toggleClass('active');
  });
  $('.search-close-d').click(function(){
    $('.search-d').toggleClass('active');
  });
});

// Desktop - sns 이미지
$(document).ready(function(){

  var $newSlideWrap = document.querySelector('.new-container-d'),
      $newSlideContainer = document.querySelector('.slider-n-d'),
      $newSlide = document.querySelectorAll('.slide-n-d'),
      $newPrev = document.getElementById('prev-n-d'),
      $newNext = document.getElementById('next-n-d'),
      $newSlideCount = $newSlide.length,
      $newCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var z = 0; z < $newSlideCount; z++) {
    $newSlide[z].style.left = z * 25 + '%';
  }
  // 슬라이드 이동 함수
  function newGotoSlide(idn) {
    $newSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $newSlideContainer.style.left = -25 * idn + '%';
    $newCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $newPrev.addEventListener('click', function(){

      if($newCurrentIndex == 0) {
        newGotoSlide($newSlideCount - 1);
      } else {
        newGotoSlide($newCurrentIndex - 1);
      }
    });
    $newNext.addEventListener('click', function(){
      
      if($newCurrentIndex == $newSlideCount - 1) {
        newGotoSlide(0);
      } else {
        newGotoSlide($newCurrentIndex + 1);
      }
    });
  
});

// Desktop - best 이미지

$(document).ready(function(){

  var $bestSlideWrap = document.querySelector('.best-container-d'),
      $bestSlideContainer = document.querySelector('.slider-b-d'),
      $bestSlide = document.querySelectorAll('.slide-b-d'),
      $bestPrev = document.getElementById('prev-b-d'),
      $bestNext = document.getElementById('next-b-d'),
      $bestSlideCount = $bestSlide.length,
      $bestCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var e = 0; e < $bestSlideCount; e++) {
    $bestSlide[e].style.left = e * 25 + '%';
  }
  // 슬라이드 이동 함수
  function bestGotoSlide(idn) {
    $bestSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $bestSlideContainer.style.left = -25 * idn + '%';
    $bestCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $bestPrev.addEventListener('click', function(){

      if($bestCurrentIndex == 0) {
        bestGotoSlide($bestSlideCount - 1);
      } else {
        bestGotoSlide($bestCurrentIndex - 1);
      }
    });
    $bestNext.addEventListener('click', function(){
      
      if($bestCurrentIndex == $bestSlideCount - 1) {
        bestGotoSlide(0);
      } else {
        bestGotoSlide($bestCurrentIndex + 1);
      }
    });
  
});

// Desktop - SNS 이미지

$(document).ready(function(){

  var $snsSlideWrap = document.querySelector('.sns-container-d'),
      $snsSlideContainer = document.querySelector('.slider-s-d'),
      $snsSlide = document.querySelectorAll('.slide-s-d'),
      $snsPrev = document.getElementById('prev-s-d'),
      $snsNext = document.getElementById('next-s-d'),
      $snsSlideCount = $snsSlide.length,
      $snsCurrentIndex = 0;

  // 슬라이드 가로로 배열
  for(var f = 0; f < $snsSlideCount; f++) {
    $snsSlide[f].style.left = f * 25 + '%';
  }
  // 슬라이드 이동 함수
  function snsGotoSlide(idn) {
    $snsSlideContainer.classList.add('animated'); /*순서 맨처음*/
    $snsSlideContainer.style.left = -25 * idn + '%';
    $snsCurrentIndex = idn;
  }

    // 버튼을 클릭하면 슬라이드 이동
    $snsPrev.addEventListener('click', function(){

      if($snsCurrentIndex == 0) {
        snsGotoSlide($snsSlideCount - 1);
      } else {
        snsGotoSlide($snsCurrentIndex - 1);
      }
    });
    $snsNext.addEventListener('click', function(){
      
      if($snsCurrentIndex == $snsSlideCount - 1) {
        snsGotoSlide(0);
      } else {
        snsGotoSlide($snsCurrentIndex + 1);
      }
    });
  
});

// Desktop - nav - 아코디언 메뉴

$('.aco-list-d').click(function(){
  if ($(this).hasClass('active')){
    slideUp(300);
  } else {
    slideUp(300);
    $(this).addClass('active').next().slideDown();
  }
  function slideUp() {
    $('.aco-list-d').removeClass('active').next().slideUp();
  }
});

// Scroll to top

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollvh = $(this).scrollTop();

    if (scrollvh >= 100) {
      $('.scrollToTop').css('display','block');
    }else {
      $('.scrollToTop').css('display','none');
    }
  });

});

