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

        $topBtn.on('click',function(){
            $(this).stop().animate('top');
        });
    }
    topBtn();
    
});