const init = function(){

    const html = document.querySelector('html,body');
    const CLASS_ON = "on";

    const gnb = function(){
        
        const header = document.querySelector('.common-header');
        const depth1 = document.querySelectorAll('.depth1 > li > a');
        const depth2 = document.querySelectorAll('.depth2 > li > a');
        const lang = document.querySelector('.lang');

        function handleMouseLeave(){
            header.classList.remove(CLASS_ON);
        }

        function handleMouseEnter(){
            header.classList.add(CLASS_ON);
        }

        depth1.forEach(list => {
            list.addEventListener('focus', handleMouseEnter);
            list.addEventListener('mouseenter', handleMouseEnter);
        });

        header.addEventListener('mouseleave', handleMouseLeave);

        lang.addEventListener('blur', handleMouseLeave);

        depth2[depth2.length - 1].addEventListener('focus', handleMouseEnter);

    }

    const mainVideo = function(){

        const video = document.querySelector('#main-video');
        const btn = document.querySelector('.video-btn button');

        function videoToggle(){

            if( btn.classList.contains(CLASS_ON)){
                video.play();    
                btn.classList.remove(CLASS_ON);  
                btn.innerText = "동영상 일시정지";
            } else {
                video.pause();
                btn.classList.add(CLASS_ON);
                btn.innerText = "동영상 재생";    
            }               
        }

        btn.addEventListener('click', videoToggle);
    }

    const newsRoom = function(){
        
        const btn = document.querySelector('.news-room button');
        const content = document.querySelector('.news-room .content');

        function handleClick(){
            btn.classList.toggle(CLASS_ON);
            content.classList.toggle(CLASS_ON);
        }

        btn.addEventListener('click', handleClick);
    }

    
    //실행
    gnb();
    mainVideo();
    newsRoom(); 

};

init();

//# sourceMappingURL=../maps/common.js.map
