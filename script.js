const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu){menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.right='14px';nav.style.top='68px';nav.style.flexDirection='column';nav.style.alignItems='stretch';nav.style.background='#fff';nav.style.padding='14px';nav.style.border='1px solid #e2e8eb';nav.style.borderRadius='14px';nav.style.boxShadow='0 15px 35px #102d4320';});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<901&&nav)nav.style.display='none';}));
