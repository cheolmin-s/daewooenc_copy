const html = document.querySelector('html,body');
const CLASS_ON = "on";

const daewoo = {

    gnb : function(){
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
    },

    mainVideo : function(){
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
    },

    newsRoom : function(){
        const btn = document.querySelector('.news-room button');
        const content = document.querySelector('.news-room .content');

        function handleClick(){
            btn.classList.toggle(CLASS_ON);
            content.classList.toggle(CLASS_ON);
        }

        btn.addEventListener('click', handleClick);
    },

    lnb : function(){
        const lnbBtn = document.querySelectorAll('.lnb button');
        const list = document.querySelectorAll('.lnb li');
        
        function Sub(){

            this.open = function(){
                this.parentNode.classList.add(CLASS_ON);
            },

            this.close = () => list.forEach(li => li.classList.remove(CLASS_ON));         
        };

        function lnbSubBox(){

            const sub = new Sub();
          
            if( this.parentNode.classList.contains(CLASS_ON) ){
                sub.close();

            } else {
                sub.close();
                sub.open.call(this);
            }

        }

        lnbBtn.forEach(btn => btn.addEventListener('click', lnbSubBox));
    },

    scroll : function(){
    
        function handleScroll(){
            const active = document.querySelectorAll('.scroll-active');
            const scrollTop = window.pageYOffset + window.innerHeight - 200;
            
            active.forEach( ac => {
                const offSet = ac.offsetTop;

                if( scrollTop >= offSet ){
                    ac.classList.add(CLASS_ON);
                } else {
                    ac.classList.remove(CLASS_ON);
                }
            });
        }
        
        window.addEventListener('scroll', handleScroll);

    },

    history : function(){
        const section = document.querySelectorAll('.sec');
        const listWrap = document.querySelector('.history-list-nav');
        const listMenu = document.querySelectorAll('.history-list-nav a');

        function handleClick(idx,event){
            event.preventDefault();
            const position = section[idx].offsetTop + 71;

            window.scrollTo({ 
                top:position,
                behavior: 'smooth'
            });
        }

        function offsetTop(){
            const offset = listWrap.offsetTop + 71;
            const scrollTop = window.pageYOffset - 71
            const scrollY = window.scrollY;

            if(scrollY >= offset){
                listWrap.classList.add(CLASS_ON);
            } else {
                listWrap.classList.remove(CLASS_ON);
            }

            section.forEach(function(li,idx){
                const position = section[idx].offsetTop;

                if(scrollTop >= position ){
                    listMenu.forEach(li => li.classList.remove(CLASS_ON));
                    listMenu[idx].classList.add(CLASS_ON);
                }
            });
        }

        window.addEventListener('scroll', offsetTop);
        listMenu.forEach((li,idx) => li.addEventListener('click', () => handleClick(idx,event)));        
    },

    arcordion : function(){
        const contents = document.querySelectorAll('.faq-list dd');
        const btn = document.querySelectorAll('.faq-list button');
        const list = document.querySelectorAll('.faq-list dl');

        function toggleClick(idx){
            const height = contents[idx].clientHeight + 72

            if(!btn[idx].classList.contains(CLASS_ON)){
                contents.forEach(li => li.style.visibility = "hidden");     
                list.forEach(li => li.style.height = "");     
                btn.forEach(li => li.classList.remove(CLASS_ON));
                contents[idx].style.visibility = "visible";
                list[idx].style.height = height + "px";         
                btn[idx].classList.add(CLASS_ON);
            } else {
                list[idx].style.height = "";
                btn[idx].classList.remove(CLASS_ON);
                contents[idx].style.visibility = "hidden";
            }
        }

        btn.forEach((button,idx) => button.addEventListener('click', () => toggleClick(idx)));
    }
};

daewoo.gnb();

//# sourceMappingURL=../maps/common.js.map
