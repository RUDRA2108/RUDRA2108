
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('theme-toggle');
  const body = document.body;
  const stored = localStorage.getItem('theme');
  if(stored === 'light') body.classList.remove('theme-dark'), body.classList.add('theme-light');
  else body.classList.remove('theme-light'), body.classList.add('theme-dark');
  btn.addEventListener('click', ()=>{
    if(body.classList.contains('theme-dark')){
      body.classList.remove('theme-dark'); body.classList.add('theme-light'); localStorage.setItem('theme','light');
    } else {
      body.classList.remove('theme-light'); body.classList.add('theme-dark'); localStorage.setItem('theme','dark');
    }
  });
});
