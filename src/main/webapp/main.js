// Basit scroll-reveal: section'ları görünür hale getirir
(function(){
  const els = document.querySelectorAll('main section, .feature-card, .contact');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        // stagger cards a bit
        if(entry.target.classList.contains('feature-card')){
          setTimeout(()=>entry.target.classList.add('in-view'), 120 * (Array.from(document.querySelectorAll('.feature-card')).indexOf(entry.target) + 1));
        } else {
          entry.target.classList.add('in-view');
        }
      }
    });
  },{threshold:0.15});
  els.forEach(el=>io.observe(el));

  // küçük etkileşim: butona tıklanınca basit ripple efekti
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.btn');
    if(!btn) return;
    btn.animate([{transform:'scale(0.98)'},{transform:'scale(1)'}],{duration:180,easing:'ease-out'});
  });
})();
