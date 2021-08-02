
// ================= funcion dia noche ================

var body = document.getElementsByTagName('body')[0];
var btnDay = document.getElementById('btnDay');
var btnNight = document.getElementById('btnNight');
var mainDiv = document.getElementById('mainDiv');

btnDay.addEventListener('click', function(){
    mainDiv.classList.remove('night');
});

btnNight.addEventListener('click', function(){
    mainDiv.classList.add('night');
})


// =======  local storage ==========

var btnEsp = document.getElementById('esp');
var btnEng = document.getElementById('eng');

localStorage.setItem('idioma', 'eng')

btnEsp.addEventListener('click', function(){
    idiomaCambio('esp');
});


btnEng.addEventListener('click', function(){
    idiomaCambio('eng');
});

var idiomaSet = localStorage.getItem('idioma');

function idiomaCambio(valIdioma){
    if(valIdioma === 'esp'){
        localStorage.setItem('idioma', 'esp');
        console.log('deneria estar en español')
        body.classList.add('esp');
    }
    if(valIdioma === 'eng'){
        localStorage.setItem('idioma', 'eng');
        console.log('deberia estar en ingles')
        body.classList.remove('esp');
    }
}

idiomaCambio();


