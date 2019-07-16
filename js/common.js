$(function(){

    // header

    function headerActive(){

        var $header = $('.common-header');
        var $gnbDepth1 = $('.depth1 > li > a');
        var $lang = $('.lang');
        var $gnbDepth2 = $('.depth2 > li > a')

        $gnbDepth1.on('mouseenter focus', mouseEnterEvent);
        $header.on('mouseleave', mouseLeaveEvent);
        $lang.on('focusout', focusOutEvent);
        $gnbDepth2.on('focus', focusEvent);
  
        function mouseEnterEvent(){

            $gnbDepth1.addClass('on');
            $header.addClass('on');

        }
        mouseEnterEvent();

        function mouseLeaveEvent(){
            $gnbDepth1.removeClass('on');
            $header.removeClass('on');

        }
        mouseLeaveEvent();

        function focusOutEvent(){

            $gnbDepth1.removeClass('on')
            $header.removeClass('on');
        }
        focusOutEvent();

        function focusEvent(){

            $gnbDepth1.addClass('on');
            $header.addClass('on');
        }
        focusEvent();
    }
    headerActive();

    // main video

    function mainVideo(){

        var $videoBtn = $('.video-btn > button');

        $videoBtn.on('click',function(){

            $(this).toggleClass('on');

            if($(this).hasClass('on')){
                
                $('#main-video').get(0).pause();    
                $(this).text('동영상 재생');                

            } else {

                $('#main-video').get(0).play();
                $(this).text('동영상 일시정지');

            }
        });

    }
    mainVideo();

    // newsroom

    function newsRoom(){
        
        var $newsRoomBtn = $('.news-room button');

        $newsRoomBtn.on('click',function(){

            $('.content, .news-room button').toggleClass('on');
            
        });
    } 
    newsRoom();
    
});
$(function(){

    // lnb 메뉴
    
    function lnbButton(){

        var $lnbBtn = $('.lnb button');


        $lnbBtn.on('click',function(){

            var $this = $(this);
            
            $this.toggleClass('on').next().toggleClass('on');
        });

    }
    lnbButton();

    // scroll-active

    function scrollActive(){
        
        var $window = $(window);

        $window.on('scroll', scrollEvent);

        function scrollEvent(){

            var $active = $('.scroll-active');
            var scrollTop = $window.scrollTop() + $window.height() - 200;

            $active.each(function(){

                var $this = $(this);
                var offset = $(this).offset().top;

                if( scrollTop >= offset){
                    $this.addClass('on');
                } else {
                    $this.removeClass('on');
                }
            });

        }
        scrollEvent();
    }
    scrollActive();

    // top-btn

    function topBtn(){

        var $topBtn = $('.top-btn');
        var $window = $(window);

        $window.on('scroll', scrollBtnEvent);
        $topBtn.on('click', topBtnEvent);

        function scrollBtnEvent(){

            var scrollTop = $window.scrollTop();

            if(scrollTop > 0){
                $topBtn.addClass('on');


                // 여기 수정 해야된다.
                if ( scrollTop > 2865){
                    $topBtn.css('bottom',168);
                } else {
                    $topBtn.css('bottom',21);
                }

            } else {
                $topBtn.removeClass('on');
            }
        }
        scrollBtnEvent();
        
        function topBtnEvent(){

            var $body = $('html,body');
            var offSet = $body.offset().top;
            $body.stop().animate({scrollTop : offSet},500);
        }
        topBtnEvent()
   
    }
    topBtn();
    
});
//# sourceMappingURL=../maps/common.js.map
