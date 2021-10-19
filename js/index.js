
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

var wrapSkills = document.getElementById("wrapSkills");
var btnSkills = document.getElementById("btnSkills");


var wrapAbout = document.getElementById("wrapAbout");
var btnAbout = document.getElementById("btnAbout");


var wrapTalk = document.getElementById("wrapTalk");
var btnTalk = document.getElementById("btnTalk");


var modalBack = document.querySelectorAll(".btn-back");
var modalWrap = document.querySelectorAll(".modal-wrap");
var headerWrap = document.querySelector('.header-wrap');
var mailFoot = document.getElementById('mailFoot');


function addOpen(seccion){
    seccion.classList.add('open');
    headerWrap.classList.add('open');
    body.classList.add('block');
}

function removeOpen(){
    for (w = 0; w < modalWrap.length; ++w){
        modalWrap[w].classList.remove('open');
    }
    headerWrap.classList.remove('open');
    body.classList.remove('block');
}


for (i = 0; i < modalBack.length; ++i) {
    modalBack[i].addEventListener('click', function(){
        removeOpen()
    });
}


btnWorks.addEventListener('click', function(){
    addOpen(wrapWorks);
});

btnSkills.addEventListener('click', function(){
    addOpen(wrapSkills);
});


btnAbout.addEventListener('click', function(){
    addOpen(wrapAbout);
});

btnTalk.addEventListener('click', function(){
    addOpen(wrapTalk);
});

mailFoot.addEventListener('click', function(evt){
    addOpen(wrapTalk);
    evt.preventDefault();
});

const btnScroll = document.querySelector(".btn-scrollDown");
const scrollTo = document.querySelector(".menuMain");
// const btnScroll1 = btnScroll[0];

btnScroll.addEventListener('click', function(){
    // console.log('click en el scrool');
    scrollTo.scrollIntoView({behavior:"smooth"});
})

// FUNCIONALIDAD FORMULARIO

const $form = document.querySelector("#form");
const $formTks = document.querySelector(".modal__tks");
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            Accept:'application/json'
        }
    })
    if(response.ok){
        this.reset()
        // alert('espero sirva');
        $formTks.classList.add('open');
    }
}