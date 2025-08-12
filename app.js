// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;
    if (nombreamigo == ''){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(nombreamigo);
        //console.log(amigos);
        document.getElementById('amigo').value = '';
        mostrarLista();
    }
}

function mostrarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        document.getElementById('listaAmigos').appendChild(li);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    
    let random = Math.floor(Math.random()*amigos.length);
    if(amigos.length === 0 ){
        alert('Su lista esta vacia')
    }else{
        nombreSecreto = amigos[random]
        resultado.innerHTML = `Su amigo secreto es: ${nombreSecreto}`;       
    }
    
}
