//스크롤복원
history.scrollRestoration = "manual" //auto 복원

//클릭시 팝업/여러개
function ShowPop(val){
  $(".popup_mask").css("display", "block");
  let tbsp = null;
  for (let i=0; i<4; i++) {
      tbsp = document.getElementsByClassName('ShowPopCon_' + i)[0];
      if (i != val){
          tbsp.style.display = "none";
          $('body').css('overflow','auto')
      }
      else {
          tbsp.style.display = "block";
          $('body').css('overflow','hidden')
      }
      tbsp = null;
  }
}

// 2022.12.28 HidePop
function HidePop(val){
  $(".popup_mask").css("display", "none");
  let tbsp = document.getElementsByClassName('ShowPopCon_' + val)[0];
  tbsp.style.display = "none";
   $('body').css('overflow','auto')
}

function content_print() {

  //var initBody = document.body.innerHTML;
  window.onbeforeprint = function () {
        document.body.innerHTML = document.getElementById('printWrap').innerHTML;      
 }
  window.onafterprint = function () {
    //document.body.is = initBody;
      location.reload();
  }
  window.print();
}

$(function(){
//회원가입 유형선택 탭
  $(".join_type label").click(function () {
    $(".join_type label").removeClass('on');
    $(this).addClass('on');
});
//////////////////////////////////////////
//팝업열기 
  $(".subPopup").hide();
  $('.subPopupBtn').click(function (event) {
      $(".subPopup").show();
      $(".subPopup").focus();
      $("body").css("overflow","hidden");
      return false;
  });
//팝업닫기
  $(".popCloseBtn").click(function (event) {
      $(".subPopup").hide();
      $('.subPopupBtn').focus();
      $("body").css("overflow","auto");
  }); 
 const closeHover = $('.popupDiv_Wrap>div>div.popupDivClose').find('button.popCloseBtn');

  $(".popCloseBtn").hover(function(event){    
    $(this).addClass("checkV");
  },function(){
    $(this).removeClass("checkV");
  }
);

//테이블 텍스트에 타이틀보이기
    $(".td_many td").hover(function () {
      var tdTitle = $(this).text();
      $(this).attr('title', tdTitle);
    });


//체크박스css
      $(".checkBox").click(function(){
        $(this).toggleClass("checkedCss");
    });
//버튼css 한페이지에 여러개
    $(".BtnTabWrap>button").click(function(){
    $(this).parent().children().removeClass('on');
      $(this).addClass("on");
    });

//일정목록
    var emptyList = $('.addListWrap ul').has('li');
        emptyList.siblings(".List_empty").css('display', 'none');
    var emptyTr = $('.addListWrap table').has('tr');
        emptyTr.siblings(".List_empty").css('display', 'none');

        $('.addListWrap ul li').children('button').click(function(){
        $(this).parent('li').remove();
      });
//서브 사이드메뉴
    $(".subM_left>ul ul").hide(); 
    $(".subM_left a.on").siblings("ul").show();


    $(".subM_left>ul a").on('click',function(){  
      $(this).parent().siblings().children().removeClass('on');
      $(this).addClass("on");
      $(this).addClass("rotate");
    });

    $(".subM_left>ul>li>a").on('click',function(){
      $(".subM_left>ul>li>ul").stop().slideUp(100); 
      $(this).siblings("ul").stop().slideToggle(100);
    });

    $(".subM_left>ul>li>ul>li>a").click(function(){
      const thisUl =   $(this).parent().parent('ul');
      $(".subM_left>ul ul").not(thisUl).stop().slideUp(100); 
       $(this).siblings("ul").stop().slideToggle(100);
    });  

    $(".depth3_Wrap>li>a").click(function(){ 
      $(this).parent().parent('ul').stop();
    });  

//반응형 왼쪽메뉴 클릭이벤트
  $(".subM_left h2").click(function(){
      if($(window).width() < 1024) {//브라우저크기
          $('.subM_left>ul').slideToggle(300);
      }
  });
  
 //테이블 
  if($(window).width() < 760) {//브라우저크기
    $("table").addClass("on");
    $(".XscrollBox").addClass("on");
    $(".XscrollBox").click(function(){
      $("table").removeClass("on");
      $(".XscrollBox").removeClass("on").css('overflow-x','scroll');
    });
  }
  else{
    $(".XscrollBox").removeClass("on").css('overflow-x','hidden');
 }

//반응형
  $(window).resize(function() { 
    if($(window).width() > 760) {
      $(".XscrollBox").removeClass("on").css('overflow-x','hidden');
      $(".XscrollBox").addClass("on");
      $(".XscrollBox").click(function(){
        $("table").removeClass("on");
        $(".XscrollBox").removeClass("on").css('overflow-x','scroll');
      });
    }
      if($(window).width() > 1024) {
           $('.subM_left>ul').show();
    }
      if($(window).width() > 1024) {
        $("table").addClass("on");
        $(".XscrollBox").addClass("on");
    }
      else{
      $('.subM_left>ul').hide();
     
    }
   });

//table 토글(홀짝)
var odd=$('.tableToggle tbody tr:nth-child(odd)');
var even=$('.tableToggle tbody tr:nth-child(even)');
      
      odd.each(function(){
          $(this).click(function(){   
              //even.removeClass('on');   
              var v_even = $(this).next(even);
              even.not(v_even).removeClass('on');   
              //$(this).next().slideToggle(0);
              $(this).next(even).toggleClass('on');
              });
          });

//셀렉박스 클릭시
      $(".TBtop_rit select").click(function(){
         // $(this).children(":eq(0)").css("background","#000");  
      });
//pagination
      $('.pagination ul li a').click(function(){
          $('.pagination ul li a').removeClass('on');
          $(this).addClass('on');
      });   
//콘텐츠 탭
    $('.tabBtn').click(function(){
      
      $('.tabBtn').removeClass('on');
      $(this).addClass('on');

      $('.tabWrap>li>ul').removeClass('on');
      $(this).siblings('ul').addClass('on');
      
      var activeTab = $(this).attr('href');
      
      $('.tabCon_Wrap ul').hide();
      $(activeTab).show();  
      return false;
    });

//셀렉트 하이드
//    $('select').click(function () {
//      $(this).children('option:first').hide();
//    });
    //속도문제;;
      //});
      //ul 토글   
       
      // notOn.hover(function () { 
      //   $(this).css('background','#f5f5f5');
      // },function(){
      //   $(this).css('background','none');
      // });
      //$('.commonTGWrap>button').text('전체닫기');

//
    //리스트 토글     
        const allbtn =  $('.commonTGWrap>button');

        $('.commonTG li>p').click(function () {
         
          $(this).parent().siblings().removeClass('on');
          $(this).parent().toggleClass('on');
          
          const notOn =  $(this).parent('li.on').length;
          
          if( notOn >= 1){
            allbtn.text('전체닫기');
          }
          else{
            allbtn.text('전체열기');
          }
        });
    //전체 토글
       allbtn.click(function(){  
        
        const notOneq =  $(this).siblings('ul').children('li.on').length;
        
        if( notOneq == 1){
          $(this).siblings('ul').children('li.on').removeClass('on');
          allbtn.text('전체열기');
        }
        else if( notOneq > 1){
          $(this).siblings('ul').children('li').toggleClass('on');
          allbtn.text('전체열기');
        }
        else{
          $(this).siblings('ul').children('li').toggleClass('on');
          allbtn.text('전체닫기');
        }
        
      });

});//Wrapper

//입주안내 tab
function ShowTab(val){
	let content_tab = null;
	for (let i=0; i < 3; i++) {
    	content_tab = document.getElementsByClassName('content_tab' + i)[0];
		if (i != val){
			content_tab.style.display = "none";
		} else {
			content_tab.style.display = "block";
		}
		content_tab = null;
	}
}

//회원가입 탭
function ShowJoin_type(val) {
	let tbJoin = null;
	for (let i = 0; i < 3; i++) {
    	tbJoin = document.getElementsByClassName('ShowJoin_typeCon' + i)[0];
		if (i != val) tbJoin.style.display = "none";
		else tbJoin.style.display = "block";
		
		tbJoin = null;
	}
}



