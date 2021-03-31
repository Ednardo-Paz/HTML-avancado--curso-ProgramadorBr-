

/*let like = document.getElementById('like');

like.addEventListener('click', function(){

    like.setAttribute('src', 'imagens/dislike.png')

}




let lista = document.getElementById('lista');

let num = lista.getAttribute('data-num');

let conteudo = ''

for(let i = 0; i < num; i++){
    conteudo += `<li> número ${i} </li>`
}

lista.innerHTML = conteudo*/



let lista = document.getElementById('lista');

let num = parseInt(lista.dataset.num);


let conteudo = ''

for(let i = 0; i < num; i++){
    conteudo += `<li> número ${i} </li>`
}

lista.innerHTML = conteudo

