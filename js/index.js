
// ================= funcion dia noche ================

var body = document.getElementsByTagName('body')[0];
var btnDay = document.getElementById('btnDay');
var btnNight = document.getElementById('btnNight');
var mainDiv = document.getElementById('mainDiv');

// btnDay.addEventListener('click', function(){
//     mainDiv.classList.remove('night');
// });

btnNight.addEventListener('click', function(){
    mainDiv.classList.toggle('night');
})


// =======  local storage ==========

var btnEsp = document.getElementById('esp');
var btnEng = document.getElementById('eng');



btnEsp.addEventListener('click', function(){
    idiomaCambio('esp');
    localStorage.setItem('idioma', 'esp');
});


btnEng.addEventListener('click', function(){
    idiomaCambio('eng');
    localStorage.setItem('idioma', 'eng');
});



var idiomaSet = localStorage.getItem('idioma');

function idiomaCambio(valIdioma){
    if(valIdioma === 'esp'){
        console.log('deneria estar en español')
        body.classList.add('esp');
    }
    if(valIdioma === 'eng'){
        console.log('deberia estar en ingles')
        body.classList.remove('esp');
    }
}

function reLoad(){
    var idiomaSet2 = localStorage.getItem('idioma');
    if(idiomaSet2==='esp'){
        body.classList.add('esp');
    }else{
        body.classList.remove('esp');
    }
}

idiomaCambio();
reLoad();


// ================= intersection observer =========
let menuBtn = document.querySelectorAll(".menuMain-row");

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('menuMain-enter');
        }else{
            entry.target.classList.remove('menuMain-enter')
        }
    });
});

menuBtn.forEach(menuBtn =>{
    observer.observe(menuBtn);
});


observer.observe(element)