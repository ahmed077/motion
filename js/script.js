/*jslint plusplus: true*/
/*global console, alert*/
var btnLeft = document.getElementsByClassName('btnleft')[0],
    btnRight = document.getElementsByClassName('btnright')[0];

btnLeft.addEventListener('click', slide);
btnRight.addEventListener('click', slide);

//slider
function slide(e) {
    var active = document.getElementsByClassName('active')[0],
        btn = e.target.parentElement,
        next = btn.getAttribute('data-next'),
        after = btn.getAttribute('data-after'),
        nextPic = document.getElementsByClassName(next)[0],
        afterPic = document.getElementsByClassName(after)[0];
    console.log(active);
    console.log(next);
    console.log(after);
    removeClass(active, 'active');
    removeClass(nextPic, next);
    removeClass(afterPic, after);
    active.className += ' ' + after;
    nextPic.className += ' active';
    afterPic.className += ' ' + next;
}
//remove class function
function removeClass(elem, cl) {
    'use strict';
    var x = elem.className,
        start = x.search(cl),
        a = x.slice(0, start),
        b = x.slice(start + cl.length);
    elem.className = a.concat(b);
    return elem;
}