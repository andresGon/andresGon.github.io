

var btnDay = document.getElementById('btnDay');
var btnNight = document.getElementById('btnNight');
var mainDiv = document.getElementById('mainDiv');

btnDay.addEventListener('click', function(){
    mainDiv.classList.remove('night');
});

btnNight.addEventListener('click', function(){
    mainDiv.classList.add('night');
})