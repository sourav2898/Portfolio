$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0}); 
    });
    
    var typed = new Typed(".typing",{
        strings: ["Computer Science Engineer.","Developer.","Designer.","Freelancer."], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2",{
        strings: ["Computer Science Engineer.","Developer.","Web Designer."], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active'); 
        $('.menu-btn i').toggleClass('active');      
    });
    
});