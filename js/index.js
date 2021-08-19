
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
    var idiomaSet = localStorage.getItem('idioma');
    if(idiomaSet === 'esp'){
        btnTrans.innerHTML = "Eng";
    }
    if(idiomaSet === 'eng'){
        btnTrans.innerHTML = "Esp";
    }
}


function idiomaCambio(){
    var idiomaSet = localStorage.getItem('idioma');
    if(localStorage.getItem('idioma') === null){
        console.log(' idiomaSet esta vacio');
    }
    if(idiomaSet === 'esp'){
        body.classList.add('esp');
        localStorage.setItem('idioma', 'eng');

    }
    if(idiomaSet === 'eng'){
        body.classList.remove('esp'); 
        localStorage.setItem('idioma', 'esp');
        
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
var modalBack = document.querySelectorAll(".modal-back");
var modalWrap = document.querySelectorAll(".modal-wrap");


btnWorks.addEventListener('click', function(){
    console.log('click al boton de works');
    wrapWorks.classList.add('open');
})

function removeOpen(){

    for (w = 0; w < modalWrap.length; ++w){
        modalWrap[w].classList.remove('open');
    }
}


for (i = 0; i < modalBack.length; ++i) {

    modalBack[i].addEventListener('click', function(){
        
        removeOpen()

    });
    
}

