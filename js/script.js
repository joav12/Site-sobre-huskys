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

if(document.getElementById('butao_env') != null){
    const butao_env = document.getElementById('butao_env');
    
    butao_env.addEventListener('click', ()=>{
        const email = document.getElementById('email').value;
        const idade_dogo = document.getElementById('idade_dogo').value;
    
        if(email == "" && idade_dogo == "" || email == "" || idade_dogo == ""){
            alert('Por favor preencher campos obrigatórios');
        }
        else{
            $('.idade_doquinho p').css('color','green');
    
            if(idade_dogo == 1){
                $('.idade_doquinho p span').text(`${idade_dogo} ano`);
            }
            else{
                $('.idade_doquinho p span').text(`${idade_dogo} anos`);
            }
        }
    })
}