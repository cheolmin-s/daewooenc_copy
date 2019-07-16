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