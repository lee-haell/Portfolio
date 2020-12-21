$(function(){
  
    var $header = $('header'),
         $menuLi = $('.toggle_menu_inner  ul  li ').not($('.toggle_menu_inner  ul  li:last-child')),
         $section = $('section').children('div'),
         $sectionNum = $section.size(),
         $mainHeight = $('.main_wrap').height(),
         $hline = $('.header_line'),
         $pline = $('.pf_center_line'),
         $circle = $('.circle'),
         $img = $('.pfw .pfi'),
         $scrollTxt = $('.scroll_txt'),
         $scrollBtn = $('#scroll_btn'),
         $scrollLine = $('.scroll_line'),
         $viewBtn = $section.find('.btn_txt'),
         $modal = $('.contact_wrap'),
         $modalBtn = $modal.find('.contact_close'),
         on_off = false;
    

    
    
    
    /* 로드시 배경 이동 */
    $(window).on('load', function(){
        $('.loading_box:eq(0)').css({'left':'100%'});
        $('.loading_box:eq(1)').css({'right':'100%'});
        $('.loading_box:eq(2)').css({'left':'100%'});
    });
    
    
   
    
    //시작하자마자 메뉴 라인 초기화
    $menuLi.eq(0).addClass('scroll');
    
    //reset 함수(F5 누를 때마다 실행)
//    function reset(){
//        if($(window).width() => 576 && $(window).width() <= 1024){
//           $('.menu_wrap').css('display','none');
//           $('.toggle_menu').css('display','block');
//           }
//        
//    }
    
    /*** 클릭 이벤트 ***/
    //메뉴 클릭 -> 페이지 이동
    $menuLi.click(function(e){
        e.preventDefault();
        var target = $(this),
             index = target.index(),
             cont = $section.eq(index),
             offset = cont.offset().top;
        
        $('html, body').animate({scrollTop:offset}, 600, 'easeOutExpo');
        $('.toggle_menu_inner').animate({'top':'-1500%'}, 1000, 'easeOutCubic');
        $('.toggle_bg').animate({'top':'-1800%'}, 200, 'easeOutCubic');
        $('.toggle_menu_btn > span:nth-child(2)').css('width','80%');
        $('.toggle_menu_btn > span:nth-child(2)').css('width','80%');
        
    });
    $('.toggle_menu_inner > ul > li:last-child').click(function(e){
        e.preventDefault();
        $modal.css('display','block');
        $('.toggle_menu_inner').animate({'top':'-1500%'}, 1000, 'easeOutCubic');
        $('.toggle_bg').animate({'top':'-1800%'}, 200, 'easeOutCubic');
        $('.toggle_menu_btn > span:nth-child(2)').css('width','80%');
    });
  
    //스크롤탑 버튼
    $scrollBtn.click(function(){
      $('html, body').animate({scrollTop:0}, 1000, 'easeOutCubic');
      $('#scroll_btn').addClass('on');
    });
    
    //포폴 view 버튼
    $viewBtn.click(function(){
      $(this).css('boxShadow','inset 5px 5px 10px #842916');
    });
    
    //모달창
    $('.menu_inner li:last-child a').click(function(){
      $modal.css('display','block');
    });
    $modalBtn.click(function(){
      $modal.css('display','none');
      $modal.css('zIndex','-9999');
    });
    $modal.click(function(){
      $(this).css('display','none');
      $modal.css('zIndex','-9999');
    });
    $('.footer_wrap').find('a').click(function(){
      $modal.css('display','block');
    });
    
    
    
    //스크롤시 메뉴에 라인 생성
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        for(i=0; i<$sectionNum; i++){
            if(wScroll >= $section.eq(i).offset().top && wScroll <= $section.eq(i).offset().top*1.5){
            $menuLi.removeClass('scroll');
            $menuLi.eq(i).addClass('scroll');
            }
        }
        if(wScroll > $('.about_wrap').offset().top){
            $('.about_wrap').css({'backgroundColor':'#0a2044'});
            $('.about_wrap img').attr({'src':'images/about_w.png', 'alt':'소개 아이콘 화이트'});
        }
        if(wScroll > $('.pf_wrap').offset().top){
            $pline.css({'height':'1800px'});
        }
        if(wScroll == 0){
            $('#scroll_btn').removeClass('on');
        }
        if(wScroll > 0){
            $scrollLine.css({'height':0});
        }
//        if(wScroll >= $('.about_wrap').offset().top){
//            $('.menu_wrap').css('display','none');
//            $('.toggle_menu').css('display','block');
//        }else{
//            $('.menu_wrap').css('display','block');
//            $('.toggle_menu').css('display','none');
//        }

    });
    
    
        if($circle.position().top < $pline.position().top){
            $circle.css({'opacity':'0'});
        }
    
        /*** 마우스 event ***/
        //해당 메뉴 mouseenter했을 때 클래스 추가
        $menuLi.on('mouseenter', function(){
            $(this).addClass('scroll');
            $menuLi.not($(this)).removeClass('scroll');
            $('.menu_inner li:last-child').removeClass('scroll');
        });
    
        //이미지 hover -> 원 위치 변경
        $('.pfw').on('mouseenter', function(){
            $circle.animate({
                'top': $(this).position().top+$('.pfw .pfi').height()/2,
                'opacity':1
            }, 800, 'easeOutCubic');
        });

        $('.toggle_menu_btn').click(function(){
            on_off = !on_off; //true
            if(on_off){ //true
               $('.toggle_bg').animate({'top':'-100%'}, 100, 'easeOutCubic');
               $('.toggle_menu_inner').animate({'top':'0'}, 1000, 'easeOutCubic');
               $('.toggle_menu_btn > span:nth-child(2)').css('width','50%');
            }else{ //false
               $('.toggle_menu_inner').animate({'top':'-1500%'}, 1000, 'easeOutCubic');
               $('.toggle_bg').animate({'top':'-1800%'}, 200, 'easeOutCubic');
               $('.toggle_menu_btn > span:nth-child(2)').css('width','80%');
            }
            
        });
    
        
        
    
});