$(function(){

    var $pline = $('.pf_center_line'),
        $firstTxt = $('.firstWrap').find('.pf'),
        $firstImg = $firstTxt.siblings('.pfi'),
        $firstLine = $firstTxt.find('.pf_line'),
        $twiceTxt = $('.twiceWrap').find('.pf'),
        $twiceImg = $twiceTxt.siblings('.pfi'),
        $twiceLine = $twiceTxt.find('.pf_line'),
        $thirdTxt = $('.thirdWrap').find('.pf'),
        $thirdImg = $thirdTxt.siblings('.pfi'),
        $thirdLine = $thirdTxt.find('.pf_line'),
        $fourthTxt = $('.fourthWrap').find('.pf'),
        $fourthImg = $fourthTxt.siblings('.pfi'),
        $fourthLine = $fourthTxt.find('.pf_line'),
        $fifthTxt = $('.fifthWrap').find('.pf'),
        $fifthImg = $fifthTxt.siblings('.pfi'),
        $fifthLine = $fifthTxt.find('.pf_line'),
        $logo = $('.header_wrap > a'),
        $menu = $('.toggle_menu_btn > span'),
        $icon = $('.sns');


    //스크롤 -> 포폴 영역 나타나기
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop(),
            txt = [ $firstTxt, $twiceTxt, $thirdTxt, $fourthTxt, $fifthTxt ],
            img = [ $firstImg, $twiceImg, $thirdImg, $fourthImg, $fifthImg ],
            line = [ $firstLine, $twiceLine, $thirdLine, $fourthLine, $fifthLine ];

        if(wScroll >= $('.pf_wrap').offset().top * 0.9){
            txt[0].animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            img[0].animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            line[0].css({'width':'40%'});
        }

        if(wScroll >= $('.pf_wrap').offset().top * 0.9){
            $logo.addClass('scroll');
            $menu.addClass('scroll');
            $icon.addClass('scroll');
        }else{
            $logo.removeClass('scroll');
            $menu.removeClass('scroll');
            $icon.removeClass('scroll');
        }

        if(wScroll >= $('.twiceWrap').offset().top * 0.9){
            $twiceTxt.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $twiceImg.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $twiceLine.css({'width':'40%'});
        }

        if(wScroll >= $('.thirdWrap').offset().top * 0.9){
            $thirdTxt.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $thirdImg.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $thirdLine.css({'width':'40%'});
        }

        if(wScroll >= $('.fourthWrap').offset().top * 0.9){
            $fourthTxt.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $fourthImg.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $fourthLine.css({'width':'60%'});
        }

        if(wScroll >= $('.fifthWrap').offset().top * 0.9){
            $fifthTxt.animate({'left':0, 'opacity':1}, 1000, 'easeOutCubic');
            $fifthImg.animate({'right':0, 'opacity':1}, 1000, 'easeOutCubic');
            $fifthLine.css({'width':'40%'});
        }

        if($(window).width() <= 768 ){
            $firstLine.css({'width':'60%'});
            $twiceLine.css({'width':'60%'});
            $thirdLine.css({'width':'60%'});
        }

        if(wScroll > $('.pf_wrap').offset().top){
            $pline.css({'height':'3300px'});
        }

        if(wScroll == 0){
            $('#scroll_btn').removeClass('on');
        }
    });
});