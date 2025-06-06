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
    location.href= "http://127.0.0.1:5500/web2%20trabalho%20final/GDY/GDY.html"
}