
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


function idiomaCambio(){
    var idiomaSet = localStorage.getItem('idioma');
    if(localStorage.getItem('idioma') === null){
        console.log(' idiomaSet esta vacio');
        localStorage.setItem('idioma', 'eng');
    }
    if(idiomaSet === 'esp'){
        body.classList.add('esp');
        localStorage.setItem('idioma', 'eng');
        console.log(idiomaSet);
        btnTrans.innerHTML = "Eng";
    }
    if(idiomaSet === 'eng'){
        body.classList.remove('esp'); 
        localStorage.setItem('idioma', 'esp');
        console.log(idiomaSet);
        btnTrans.innerHTML = "Esp";
    }
}

btnTrans.addEventListener('click', function(){
    idiomaCambio();  
});

idiomaCambio();  


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