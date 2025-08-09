
document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if(hamb){
    hamb.addEventListener('click', ()=>{
      if(nav.style.display==='flex') nav.style.display='';
      else nav.style.display='flex';
    });
  }
  const links = document.querySelectorAll('#main-nav a');
  links.forEach(a=>{
    try{
      if(location.pathname.endsWith(a.getAttribute('href')) || location.pathname.endsWith(a.getAttribute('href').replace('./',''))){
        a.style.color = 'var(--accent)';
      }
    }catch(e){}
  });
});
