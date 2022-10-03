let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

console.log(val);

// console.log(document.getElementById('my-form'))
// console.log(document.querySelector('.container'))
// console.log(document.querySelector('#my-form'))
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('item'))

const ul = document.querySelector(".items")
// ul.remove()


// ul.lastElementChild.remove();

ul.firstElementChild.innerText = ul.firstElementChild.textContent  + 'Hello';

ul.children[1].innerText = 'The Bridge';

ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//me traigo el botón del formulario
const btn = document.querySelector('#btn');
//pongo el fondo del botón de color rojo
btn.style.background = 'red';


function onSubmit (e){
    e.preventDefault();// quito el evento por defecto (evito que refresque la página)
    document.getElementById('my-form').style.background = '#ccc';//me traigo el formulario
    //y le pongo un fondo gris
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';//cambio el texto del último
    //elemento de la liste desordenada
}

// le digo al botón que he guardado antes que escuche el evento "click" y cuando
//este evento ocurra ejecute la función "onSubmit"
btn.addEventListener('click', onSubmit);


let listaSinOrden = document.createElement("ul");// <ul></ul>
document.body.appendChild(listaSinOrden);// <body>...<ul></ul></body>

let elemento1Lista = document.createElement("li");//<li></li>
elemento1Lista.textContent = "It's funny";// <li>It's funny</li>
listaSinOrden.appendChild(elemento1Lista);//<ul> <li>It's funny</li></ul>


let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";
listaSinOrden.appendChild(elemento2Lista);

btn.setAttribute("name", "helloButton");
btn.setAttribute("disabled", "");




