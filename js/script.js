const butao_menu = document.getElementById('butao-menu');
const fechar_menu = document.getElementById('close-menu');

butao_menu.addEventListener('click', ()=>{
    $('.menu').css("display", "block");
    $('body').css('overflow', "hidden");
});

fechar_menu.addEventListener('click', ()=>{
    $('.menu').css("display", "none");
    $('body').css('overflow', "auto");
});