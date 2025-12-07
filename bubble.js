
  
    function scrollToSection(id){
      const el = document.getElementById(id);
      if(!el) return;
      el.scrollIntoView({ behavior:'smooth', block:'start' });
    }

    /* Theme toggle */
    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      if(document.body.classList.contains('light-mode')) toggleBtn.textContent = '☀️';
      else toggleBtn.textContent = '🌙';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));

    /* resume download */
    function downloadResume(){
  if(confirm('Download resume?')){
    const link = document.createElement('a');
    link.href = 'Assets/GAWTAM-Resume.pdf';
    link.download = 'GAWTAM-2.pdf'; 
    link.click();
  }
}


    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const fill = entry.target.querySelector('.skill-fill');
          if(fill){
            const w = fill.getAttribute('style') || '';
            fill.style.width = fill.style.width || (w.match(/width:\s*([0-9]+)%/) ? w.match(/width:\s*([0-9]+)%/)[1] + '%' : '60%');
          }
        }
      });
    }, { threshold: 0.2 });

    skillCards.forEach(c => skillObserver.observe(c));


    (function headerParallax(){
      const header = document.querySelector('header');
      if(!header) return;
      window.addEventListener('mousemove', (e) => {
        const w = window.innerWidth, h = window.innerHeight;
        const rx = (e.clientX - w/2) / (w/2);
        const ry = (e.clientY - h/2) / (h/2);
        header.style.transform = `translate3d(${rx * 4}px, ${ry * 3}px, 0)`;
      });
    })();


    window.addEventListener('keydown', (e) => {
      if(document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      if(e.key === '1') scrollToSection('about');
      if(e.key === '2') scrollToSection('whatido');
      if(e.key === '3') scrollToSection('skills');
      if(e.key === '4') scrollToSection('projects');
      if(e.key === '5') scrollToSection('contact');
    });
