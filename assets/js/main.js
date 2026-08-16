const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn&&nav){
  btn.addEventListener('click',()=>{
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
  });
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>nav?.classList.remove('open'));
});
