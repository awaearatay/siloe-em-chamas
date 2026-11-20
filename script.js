const content={louvor:{title:'Louvor e adoração',description:'Momentos de louvor e adoração fazem parte dos cultos e celebrações da igreja.'},infantil:{title:'Ministério infantil',description:'Um espaço voltado às crianças. Consulte a igreja sobre as atividades e os encontros atuais.'},biblico:{title:'Ensino bíblico',description:'A igreja anuncia a Escola Bíblica Dominical e um curso de teologia. Consulte horários e informações atualizadas.'},social:{title:'Obra social',description:'A fachada da igreja anuncia aulas de música, jiu-jítsu e judô. Consulte a igreja sobre vagas e horários.'}};const modal=document.querySelector('#details');document.querySelectorAll('[data-ministry]').forEach(button=>button.addEventListener('click',()=>{const item=content[button.dataset.ministry];document.querySelector('#detail-title').textContent=item.title;document.querySelector('#detail-text').textContent=item.description;modal.showModal()}));document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu');function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false')}menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menu.hidden=isOpen;menuButton.setAttribute('aria-expanded',String(!isOpen))});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus()}});


/* Faixa de depoimentos: pausa acessível e retorno contínuo. */
(()=>{
 const section=document.querySelector('.testimonies');
 if(!section)return;
 const toggle=section.querySelector('.testimonies-toggle');
 let paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function refresh(){section.classList.toggle('is-paused',paused);toggle.textContent=paused?'Reproduzir':'Pausar';toggle.setAttribute('aria-pressed',String(paused));toggle.setAttribute('aria-label',paused?'Reproduzir movimento dos depoimentos':'Pausar movimento dos depoimentos')}
 toggle.addEventListener('click',()=>{paused=!paused;section.classList.add('motion-enabled');refresh()});
 refresh();
})();

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();
