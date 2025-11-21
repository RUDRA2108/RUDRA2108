document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  
  if(hamb){
    hamb.addEventListener('click', ()=>{
      nav.classList.toggle('active');
      const icon = hamb.querySelector('i');
      if(nav.classList.contains('active')){
        icon.classList.remove('ri-menu-4-line');
        icon.classList.add('ri-close-line');
      } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-4-line');
      }
    });
  }

  // Highlight active link
  const links = document.querySelectorAll('.nav a');
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(href === currentPath) {
      a.classList.add('active');
    }
  });
});
