//스크롤복원
history.scrollRestoration = "manual" //auto 복원
$(document).ready(function(){

// 검색창 닫기
        $(".searchWrap .closeBtn").click(function(){
            $(this).parent().slideUp(0);
        });

//Tab 맟춤메뉴
        $(".customTabWrap>button").click(function(){
            
            $(".customTabWrap>button").removeClass("on");
            $(this).addClass("on");
        });
//팝업창        
         //한개일때/여러개일때 팝업창 정렬  popupDiv_Wrap은 인덱스에만( 팝업이 여러개일때)
         const popup = $("body").find('div.popupDiv_Wrap').find('div').hasClass("popupDiv");   
         const test = $('.popupDiv_Wrap').children('div').length;
         //const test = $('.popupDiv_Wrap').children('div:last').children().children().find('.popCloseBtn');    
         //const testd = $('button').hasClass('last_mask').text;    
      
         if (popup == true ) {
           $('.popupDiv').addClass('on');
           $(".popup_mask").show(); 
           $(".popupDiv").show(); 
         }
         else if(test >= 2){
          
         }
         else{
           $('.popupDiv').removeClass('on');
         }

         $('.popupDiv_Wrap .popCloseBtn').click(function(){
       
          $(this).parents('.popupDiv').hide();
          $(".popup_mask").hide(); 
         });

        //체크비주얼
         $('.popupDiv_Wrap').find('button').click(function(event){  
        $(this).toggleClass("checkV");
          });

        
//납부서비스
    const swiperPay = new Swiper('.swiper-containerPay', {
  //기본 셋팅
  //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  direction: 'horizontal',
  //한번에 보여지는 페이지 숫자
  debugger: true,
  //마우스 휠기능 true 사용가능 false 사용불가
  mousewheel: true,
  //반복 기능 true 사용가능 false 사용불가
  loop: false,
  //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  centeredSlides: true,
  // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  // effect: 'fade',
  observer:true,
  observerParents:true,
  breakpoints: {
    
    0: {
        slidesPerView: 1.25,  
        spaceBetween: 0,
        slidesOffsetAfter:0,
        slidesOffsetBefore :20, // 슬라이드 시작 부분 여
    },
  640:{//브라우저가 640보다 클 때
      slidesPerView: 1,
       //페이지와 페이지 사이의 간격
      spaceBetween: 30,
      //드레그 기능 true 사용가능 false 사용불가
  }

},

  //자동 스크를링
//   autoplay: {
//     //시간 1000 이 1초
//     delay: 2500,
//     disableOnInteraction: false,
//    },
  
  //페이징
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  },

  //방향표
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next',
    //이전페이지 설정
    prevEl: '.swiper-button-prev',
  },
});
         
//홍보존
    const swiperStop = new Swiper('.swiper-containerStop', {
    
  //기본 셋팅
  //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  direction: 'horizontal',
  //한번에 보여지는 페이지 숫자
  slidesPerView: 1,
  //페이지와 페이지 사이의 간격
  spaceBetween: 30,
  //드레그 기능 true 사용가능 false 사용불가
  debugger: true,
  //마우스 휠기능 true 사용가능 false 사용불가
  mousewheel: true,
  //반복 기능 true 사용가능 false 사용불가
  loop: true,
  loopedSlides: 3,
  //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  centeredSlides: true,
  // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  // effect: 'fade',
  
  
//   //자동 스크를링
      autoplay: {
        //시간 1000 이 1초
        delay: 2000,
        disableOnInteraction: false,
      },
  
  //페이징
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  },

  //방향표
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next',
    //이전페이지 설정
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function() {
                $('.swiper-slide').addClass('changed');

                // fraction에 현재 인덱스와 전체 인덱스 표시
                // this.loopedSlides는 loop, slidesPerView: 'auto'일 때 제대로 동작
                $('.custom-fraction .current').text(this.realIndex + 1);
                $('.custom-fraction .all').text(this.loopedSlides);
                // console.log(this);
                 //console.log(this.loopedSlides)
            },

            slideChangeTransitionStart: function() {
                // 페이지 넘어갈 때마다 fraction 현재 인덱스 변경
                $('.custom-fraction .current').text(this.realIndex + 1);
            },

        },

});  

//공지사항       
    const swiperV = new Swiper('.swiper-containerV', {
  //기본 셋팅
  //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  direction: 'vertical',
  //한번에 보여지는 페이지 숫자
  slidesPerView: 1,
  //페이지와 페이지 사이의 간격
  spaceBetween: 30,
  //드레그 기능 true 사용가능 false 사용불가
  debugger: false,
  //마우스 휠기능 true 사용가능 false 사용불가
  mousewheel: true,
  //반복 기능 true 사용가능 false 사용불가
  loop: true,
  //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  centeredSlides: true,
  // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  // effect: 'fade',
  
  
  //자동 스크를링
      autoplay: {
        //시간 1000 이 1초
       delay: 2000,
       disableOnInteraction: false,
      },
  
  //페이징
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  },

  //방향표
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next',
    //이전페이지 설정
    prevEl: '.swiper-button-prev',
  },
});        

//맞춤메뉴
    const swiperTab0 = new Swiper('.swiper-containerTab0', {
  //기본 셋팅
  //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  direction: 'horizontal',
  //한번에 보여지는 페이지 숫자
  debugger: true,
  //마우스 휠기능 true 사용가능 false 사용불가
  mousewheel: true,
  //반복 기능 true 사용가능 false 사용불가
  loop: false,
  //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  centeredSlides: true,
  // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  // effect: 'fade',
  observer:true,
  observerParents:true,
  
  on: {
    init: function () {
                $(".customTabWrap button").click(function(){
                    $(".tabCon swiper-container").destroy();
                });
            },
            activeIndexChange: function () {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                },
        },

  //자동 스크를링
//   autoplay: {
//     //시간 1000 이 1초
//     delay: 2500,
//     disableOnInteraction: false,
//    },
  
  //페이징
  pagination: {
    //페이지 기능
    el: '.swiper-pagination',
    //클릭 가능여부
    clickable: true,
  },

  //방향표
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next',
    //이전페이지 설정
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
        0: {
            slidesPerView: 1.18,  
        }, 
        450: {
              slidesPerView: 1.2,  
              spaceBetween:0,
              slidesOffsetAfter:0,
              slidesOffsetBefore :0, //시작부분 여백
            },
        640:{//브라우저가 640보다 클 때
            slidesPerView: 1,
             //페이지와 페이지 사이의 간격
            spaceBetween: 30,
            }    
  },
});
    const swiperTab1 = new Swiper('.swiper-containerTab1', {
  //기본 셋팅
  //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
  direction: 'horizontal',
  //한번에 보여지는 페이지 숫자
  debugger: true,
  //마우스 휠기능 true 사용가능 false 사용불가
  mousewheel: true,
  //반복 기능 true 사용가능 false 사용불가
  loop: true,
  //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
  centeredSlides: true,
  // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
  // effect: 'fade',
  observer:true,
  observerParents:true,
  breakpoints: {
        0: {
              slidesPerView: 0.55,  
              spaceBetween:40,
              slidesOffsetAfter:0,
              slidesOffsetBefore :0, 
            }, 
        370: {
            slidesPerView: 0.75,  
            spaceBetween:20,
            slidesOffsetAfter:0,
            slidesOffsetBefore :34, 
        }, 
        450: {
              slidesPerView: 0.9,  
              spaceBetween:28,
              slidesOffsetAfter:0,
              slidesOffsetBefore :10, //시작부분 여백
            },
        640:{//브라우저가 640보다 클 때
            slidesPerView: 1,
             //페이지와 페이지 사이의 간격
            spaceBetween: 30,
            //드레그 기능 true 사용가능 false 사용불가
            }       
  },
  //자동 스크를링
//   autoplay: {
//     //시간 1000 이 1초
//     delay: 2500,
//     disableOnInteraction: false,
//    },
  
    //페이징
    pagination: {
        //페이지 기능
        el: '.swiper-pagination',
        //클릭 가능여부
        clickable: true,
    },

    //방향표
    navigation: {
        //다음페이지 설정
        nextEl: '.swiper-button-next',
        //이전페이지 설정
        prevEl: '.swiper-button-prev',
    },
    });


 
});
//맞춤메뉴 탭
function ShowTabex(val){
        for (i=0; i<2; i++) {
        var tb = document.getElementsByClassName('swiper-containerTab' + i)[0];
        if (i != val) tb.style.display = "none";
        else tb.style.display = "block";
        }
}
