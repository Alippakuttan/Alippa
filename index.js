var nav = document.querySelector('nav');

nav.addEventListener('click', navOpenClose);

function navOpenClose() {
  var navTruth = nav.classList.contains('nav-close');
  if (navTruth === true) {
    nav.classList.add('nav-open');
    nav.classList.remove('nav-close');
  } else {
    nav.classList.add('nav-close');
    nav.classList.remove('nav-open');
  }
}

var lastScrollTop = 0;

window.addEventListener('scroll', function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      nav.classList.remove('nav-engaged');
   } else {
      nav.classList.add('nav-engaged');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
