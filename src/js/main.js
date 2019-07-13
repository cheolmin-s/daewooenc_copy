$(function(){

    // header

    function headerActive(){

        var $header = $('.common-header');
        var $gnbDepth1 = $('.depth1 > li > a');

        $gnbDepth1.on('mouseenter', mouseEnterEvent);
        $header.on('mouseleave', mouseLeaveEvent);


        // 선언    
        function mouseEnter(){

            $gnbDepth1.addClass('on');
            $header.addClass('on');

        }

        function mouseLeave(){

            $gnbDepth1.removeClass('on');
            $header.removeClass('on');

        }

        // init
        function mouseLeaveEvent(){
            mouseLeave();
        };

        function mouseEnterEvent(){        
            mouseEnter();
        }
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