let circle = document.getElementsByClassName('cursor')[0];
let circle1 = document.getElementsByClassName('cursor-1')[0];

const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';

  circle1.animate([{left: e.pageX + 'px', top: e.pageY + 'px', opacity: '1'}], {duration: 1000}, {easing: 'ease-in-out'});
  circle1.animate([{opacity: '0'}], {duration: 1000}, {easing: 'ease-in-out'});
  circle1.style.left = e.pageX + 'px';
  circle1.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span class="letter">$&</span>');

const element = document.querySelectorAll('span');

const difference = 360/element.length;

for(let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate("+i*difference+"deg)";
}