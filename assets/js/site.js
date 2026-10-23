(function(){
  var cfg = window.EE_ALL || {};
  document.querySelectorAll('[data-link]').forEach(function(a){
    var url = cfg[a.dataset.link];
    if(url){ a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled','true'); if(!a.dataset.soon){a.dataset.soon='1'; a.textContent += ' (link coming soon)';} }
  });
  document.querySelectorAll('[data-mail]').forEach(function(a){
    if(cfg.email){ a.href = 'mailto:' + cfg.email; a.textContent = cfg.email; } else { a.textContent = 'Email address coming soon'; a.removeAttribute('href'); }
  });
  var b = document.getElementById('menuBtn'), n = document.getElementById('nav');
  if(b && n){ b.addEventListener('click', function(){ var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', String(o)); }); }
})();
