$(function(){
  
    var  $pline = $('.pf_center_line'),
         $circle = $('.circle'),
         $twizyTxt = $('.twizy_wrap').find('.pf'),
         $twizyImg = $twizyTxt.siblings('.pfi'),
         $twizyLine = $twizyTxt.find('.pf_line'),
         $hanggiTxt = $('.hanggi_wrap').find('.pf'),
         $hanggiImg = $hanggiTxt.siblings('.pfi'),
         $hanggiLine = $hanggiTxt.find('.pf_line'),
         $salonTxt = $('.salon_wrap').find('.pf'),
         $salonImg = $salonTxt.siblings('.pfi'),
         $pumpkinTxt = $('.pumpkin_wrap').find('.pf'),
         $pumpkinImg = $pumpkinTxt.siblings('.pfi'),
         $pumpkinLine = $pumpkinTxt.find('.pf_line'),
         $salonLine = $salonTxt.find('.pf_line');
    

    //스크롤 -> 포폴 영역 나타나기
    $(window).scroll(function(){
      
        var wScroll = $(this).scrollTop();
        
        if($circle.offset().top < $pline.offset().top){
            $circle.css('opacity','0');
        }
        if(wScroll >= $('.pf_wrap').offset().top*0.9){
            $twizyTxt.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $twizyImg.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $twizyLine.css({'width':'40%'});
        }
        if(wScroll >= $('.hanggi_wrap').offset().top*0.9){
            $hanggiTxt.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $hanggiImg.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $hanggiLine.css({'width':'40%'});
        }
        if(wScroll >= $('.salon_wrap').offset().top*0.9){
            $salonTxt.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $salonImg.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $salonLine.css({'width':'40%'});
        }
        if(wScroll >= $('.pumpkin_wrap').offset().top*0.9){
            $pumpkinTxt.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $pumpkinImg.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $pumpkinLine.css({'width':'60%'});
        }
        if($(window).width() <= 768 ){
            $twizyLine.css({'width':'60%'});
            $hanggiLine.css({'width':'60%'});
            $salonLine.css({'width':'60%'});
        }
        if(wScroll > $('.about_wrap').offset().top){
            $('.about_wrap').css({'backgroundColor':'#0a2044'});
            $('.about_wrap img').attr({'src':'images/about_w.png', 'alt':'소개 아이콘 화이트'});
        }
        if(wScroll > $('.pf_wrap').offset().top){
            $pline.css({'height':'2550px'});
        }
        if(wScroll == 0){
            $('#scroll_btn').removeClass('on');
        }
    });
});