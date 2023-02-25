$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Шунгитовая Баня", "Шунгитовые Купели", "Шунгитовая Комната"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

function banaya(){
    $('.lsa20').addClass('active');
  };

function close_banaya(){
    $('.lsa20').removeClass('active');
  };
  
function swim(){
    $('.lsa21').addClass('active');
  };
  
function close_swim(){
    $('.lsa21').removeClass('active');
  };

function room(){
    $('.lsa22').addClass('active');
  };
  
function close_room(){
    $('.lsa22').removeClass('active');
  };
  
$(function() {

    $("#submit").click(function() {
        // получаем то, что написал пользователь
        var name    = $("#name").val();
        var message = $("#message").val();
        // Формируем строку запроса
        var data            = 'name='+ name +'&amp;message='+ message;

        // ajax вызов
        $.ajax({
            type: "POST",
            url: "shout.php",
            data: data,
            success: function(html){ // после получения результата
                $("#shout").slideToggle(500, function(){
                    $(this).html(html).slideToggle(500);
                    $("#message").val("");
                });
          }
        });
        return false;
    });
});