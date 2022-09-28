"use strict"
$(document).ready(function(){
// PARALAX
    let mon1 = document.querySelector('.mouse-parallax-bg-mon-1');
    let mon4 = document.querySelector('.mouse-parallax-bg-mon-4');
    let mon5 = document.querySelector('.mouse-parallax-bg-mon-5');
    let mon6 = document.querySelector('.mouse-parallax-bg-mon-6');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        mon1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 25 + 'px)';
        mon4.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 25 + 'px)';
        mon5.style.transform = 'translate(+' + x * 15 + 'px, -' + y * 86 + 'px)';
        mon6.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 25 + 'px)';
    });


});