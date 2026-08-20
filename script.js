const buttons=document.querySelectorAll('.filter-btn');
const cards=document.querySelectorAll('.component-card');
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display=(f==='all'||card.dataset.category===f)?'grid':'none';
    });
  });
});
const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalDesc=document.getElementById('modalDesc');
const modalCat=document.getElementById('modalCat');
cards.forEach(card=>{
  card.addEventListener('click',()=>{
    modalTitle.textContent=card.dataset.title;
    modalDesc.textContent=card.dataset.desc;
    modalCat.textContent=card.dataset.category.toUpperCase();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
});
document.querySelector('.close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}

const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  const open=nav.dataset.open==='1';
  nav.dataset.open=open?'0':'1';
  nav.style.display=open?'none':'flex';
  nav.style.position='absolute';
  nav.style.right='5vw';
  nav.style.top='70px';
  nav.style.flexDirection='column';
  nav.style.gap='14px';
  nav.style.padding='16px';
  nav.style.background='white';
  nav.style.border='1px solid #dce6eb';
  nav.style.borderRadius='16px';
  nav.style.boxShadow='0 18px 40px rgba(11,45,69,.12)';
});
