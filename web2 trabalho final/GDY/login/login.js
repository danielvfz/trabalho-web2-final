function logar(){
    var usuario=document.getElementById('user').value;
    var senha=document.getElementById('senha').value;

    if(usuario=='admin' && senha=='admin'){
        alert("logado com sucesso")
        location.href='C:/Users/user/Documents/Trabalhos Faculdade/WEB 2/Site/GDY/GDY.html'
    }else{
        alert("Senha ou usuário incorreto")
    }
}

function sair(){
    location.href='C:/Users/user/Documents/Trabalhos Faculdade/WEB 2/Site/GDY/GDY.html'
}