$(document).ready(function(){ // só executa o codigo quando a página carregar totalmente

    // scroll para seções -------------------------------------------------------------------------------------------
    let navBtn = $('.nav-item');    //?????

    let homeSection = $('#lp-bg-home');
    let gameSection = $('#lp-bg-game-block');

    let scrollTo = '';

    $(navBtn).click(function(){

        let btnId = $(this).attr('id');

        // console.log(btnId);
        
        if(btnId == 'home-menu'){
            scrollTo = homeSection;
        } else if(btnId == 'games-menu') {
            scrollTo = gameSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70    // 70 é o tamanho da barra de navegação
        }, 1500);                                       // 1500 é 1s5 para fazer a animação

    });

    /* -------------------------------------------- */

});

// console.log(document.documentElement.scrollTop);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}