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

var sections = document.querySelectorAll('section');
var sidebarDots = document.querySelectorAll('.sidebar-dot');

const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const id = entry.target.id;
    const activeAnchor = document.querySelector(`[data-page=${id}]`);
    if (entry.isIntersecting) {
      sidebarDots.forEach(sidebarDot => {
        var sideTruth = sidebarDot.classList.contains('sidebar-dot-select');
        if (sideTruth === true) {
          sidebarDot.classList.remove('sidebar-dot-select');
        }
      });
      activeAnchor.classList.add('sidebar-dot-select');
      if (id === 'title') {
        document.querySelector('.sidebar').classList.add('sidebar-dark');
        document.querySelector('.sidebar').classList.remove('sidebar-light');
      } else {
        document.querySelector('.sidebar').classList.add('sidebar-light');
        document.querySelector('.sidebar').classList.remove('sidebar-dark');
      }
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});
