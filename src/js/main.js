var init = (function(){

    var $window = $(window);
    var $body = $('html,body');

    // GNB
    var gnbActive = function(){
        
        var $header = $('.common-header');
        var $gnbDepth1 = $('.depth1 > li > a');
        var $lang = $('.lang');
        var $gnbDepth2 = $('.depth2 > li > a')

        
        $gnbDepth1.on('mouseenter focus', function(){

            $gnbDepth1.addClass('on');
            $header.addClass('on');

        });

        $header.on('mouseleave', function(){

            $gnbDepth1.removeClass('on');
            $header.removeClass('on');

        });

        // 2뎁스 마지막 링크 포커스 헤더 열림
        $gnbDepth2.last().on('focus', function(){

            $gnbDepth1.addClass('on');
            $header.addClass('on');
        });

        // 헤더 영역 벗어나면 헤더 닫힘
        $lang.on('blur', function(){

            $gnbDepth1.removeClass('on')
            $header.removeClass('on');

        });
    };

    // Main 비디오 
    var mainVideo = function(){
        
        var $videoBtn = $('.video-btn > button');

        $videoBtn.on('click',function(){

            var $this = $(this);

            $(this).toggleClass('on');

            if($(this).hasClass('on')){
                
                $('#main-video').get(0).pause();    
                $(this).text('동영상 재생');                

            } else {

                $('#main-video').get(0).play();
                $(this).text('동영상 일시정지');

            }
        });
    };

    // Newsroom 버튼
    var newsRoom = function(){

        var $newsRoomBtn = $('.news-room button');

        $newsRoomBtn.on('click',function(){

            $('.content, .news-room button').toggleClass('on');
            
        });

    };

    // LNB 메뉴
    var lnbBtn = function(){

        var $lnbButton = $('.lnb button');

        $lnbButton.on('click',function(e){

            var $this = $(this);

            e.preventDefault();

            if( $this.hasClass('on')){

                $this.removeClass('on').next().removeClass('on');
            } else {

                $lnbButton.removeClass('on').next().removeClass('on');
                $this.addClass('on').next().addClass('on');
            }
        });
    };

    // 스크롤 효과
    var scrollActive = function(){
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
    };

    // TOP 이동
    var topBtn = function(){

        var $topBtn = $('.top-btn');
        var offSet = $body.offset().top;

        $window.on('scroll', scrollBtnEvent);

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

        $topBtn.on('click', function(e){

            e.preventDefault();

            $body.stop().animate({scrollTop : offSet},500);
        });
    };

    // history list 메뉴
    var historyNav = function(){

        var $historyNavLink = $('.history-list-nav a');
        var $sec = $('.sec'); 
        var $historyNav = $('.history-list-nav');

        $historyNavLink.on('click',function(e){

            e.preventDefault();
    
            var $this = $(this);
            var index = $this.parent().index();
            var position = $sec.eq(index).offset().top - 235;

            $body.stop().animate({scrollTop:position},500);

            $historyNavLink.removeClass('on');
            $this.addClass('on');
    
        });

        // border-bottom
        $window.on('scroll',function(){

            var scrollTop = $window.scrollTop();
            var offSet = $historyNav.offset().top - 71;

            if( scrollTop >= offSet ){
                $historyNav.addClass('on');
            } else {
                $historyNav.removeClass('on');
            }
        });
    };
 

    // init
    gnbActive();
    mainVideo();
    newsRoom();
    lnbBtn();
    scrollActive();
    topBtn();
    historyNav();

});

// 실행
$(init);