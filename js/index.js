
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

var btnTrans = document.getElementById('translateBtn');


function idiomaClick(){
    console.log('le estoy dando click');
    var idiomaSet = localStorage.getItem('idioma');
    if(idiomaSet === 'esp'){
        btnTrans.innerHTML = "Esp";
    }
    if(idiomaSet === 'eng'){
        btnTrans.innerHTML = "Eng";
    }
    if(idiomaSet == null){
        localStorage.setItem('idioma', 'esp');
        btnTrans.innerHTML = "Esp";
    }
}


function idiomaCambio(){
    var idiomaSet = localStorage.getItem('idioma');
    if(idiomaSet === 'esp'){
        body.classList.remove('esp');
        localStorage.setItem('idioma', 'eng');

    }
    if(idiomaSet === 'eng'){
        body.classList.add('esp'); 
        localStorage.setItem('idioma', 'esp');    
    }
}

window.onload = function(){
    var idiomaSet = localStorage.getItem('idioma');
    
    if(idiomaSet === 'esp'){
        console.log('el local storage esta en español')
        body.classList.add('esp');
    }
    if(idiomaSet === 'eng'){
        console.log('el local storage esta en ingles')
        body.classList.remove('esp'); 
    }
    if(idiomaSet == null){
        console.log('el local storege debe estar vacio');
        localStorage.setItem('idioma', 'eng')
    }
    
}

btnTrans.addEventListener('click', function(){
    idiomaCambio();  
    idiomaClick();

});




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


// observer.observe(element) 

//  ========= modal btn =======

var btnWorks = document.getElementById("btnWorks");
var wrapWorks = document.getElementById("wrapWorks");
// var modalBack = document.querySelectorAll(".modal-back");
var modalBack = document.querySelectorAll(".btn-back");

var modalWrap = document.querySelectorAll(".modal-wrap");
var headerWrap = document.querySelector('.header-wrap');


btnWorks.addEventListener('click', function(){
    console.log('click al boton de works');
    wrapWorks.classList.add('open');
    headerWrap.classList.add('open')
})

function removeOpen(){

    for (w = 0; w < modalWrap.length; ++w){
        modalWrap[w].classList.remove('open');
    }
    headerWrap.classList.remove('open');
}


for (i = 0; i < modalBack.length; ++i) {

    modalBack[i].addEventListener('click', function(){
        
        removeOpen()

    });
    
}

