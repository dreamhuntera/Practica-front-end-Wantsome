// Adaugati un tag script la final

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
document.body.style.fontFamily = "Arial, sans-serif";

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
let spanName = document.querySelector('#name').innerHTML = "Lizzy";
let spanFavD = document.querySelector('#fav-drink').innerHTML = "vodka sour";
let spanBornP = document.querySelector('#born-place').innerHTML = "planeta Moldova";

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .
let iterator = document.getElementsByTagName('li');
const liIterator = () => {
    for (var item in iterator) {
        let newLi = document.getElementsByTagName('li')[item];
        newLi.className = 'listitem';
        console.log(newLi);
    }
}

document.addEventListener('click', liIterator);

// //listitem sa aiba culoarea rosie
let search = document.getElementsByClassName('listitem');
const modifyColor = () => {
    for (let i in search) {
document.getElementsByClassName("listitem")[i].style.color= 'red';
}
    }

document.addEventListener('dblclick', modifyColor);

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) 
//la pagina noastra

const addImg =() => {
let newImg = document.createElement('img');
newImg.src = "https://httpstatusdogs.com/img/200.jpg";
document.getElementsByTagName('BODY')[0].appendChild(newImg);
}

addImg();