const mySlide = function(){
  const bar = document.querySelector('.bars');
  const nav = document.querySelector('.nav-links')

  bar.addEventListener('click', function(){
    nav.classList.toggle('nav-active');
  });
}

mySlide();