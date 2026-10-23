(function(){
  var D = window.EE_COURSE_DEFAULTS || {}, C = (window.EE_COURSES || []).slice();
  C.sort(function(a,b){ return a.code.localeCompare(b.code, undefined, {numeric:true}); });
  C.forEach(function(c){
    var m = c.code.match(/[A-Za-z]+(?=\s*\d)/g);
    c.depts = (m && m.length) ? m : [c.code];
  });
  function esc(s){ return String(s).replace(/[&<>"]/g, function(ch){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]; }); }
  function norm(s){ return s.toLowerCase().replace(/[^a-z0-9]/g,''); }

  /* course list */
  var grid = document.getElementById('cGrid');
  if(grid){
    var q = document.getElementById('q'), chips = document.getElementById('chips'), count = document.getElementById('cCount');
    var seen = {}, depts = [];
    C.forEach(function(c){ c.depts.forEach(function(d){ if(!seen[d.toLowerCase()]){ seen[d.toLowerCase()] = 1; depts.push(d); } }); });
    var active = 'all';
    chips.innerHTML = ['All'].concat(depts).map(function(d){
      var k = d.toLowerCase();
      return '<button type="button" class="chip" data-d="' + (d==='All'?'all':esc(k)) + '" aria-pressed="' + (d==='All') + '">' + esc(d) + '</button>';
    }).join('');
    function draw(){
      var term = norm(q.value);
      var list = C.filter(function(c){
        var okD = active === 'all' || c.depts.some(function(d){ return d.toLowerCase() === active; });
        var okQ = !term || norm(c.code + (c.title || '')).indexOf(term) !== -1;
        return okD && okQ;
      });
      grid.innerHTML = list.map(function(c){
        return '<a class="tile ctile" href="course/#' + esc(c.id) + '"><span class="kicker">' + esc(c.depts.join(' / ')) + '</span><h3>' + esc(c.code) + '</h3>' + (c.title ? '<p>' + esc(c.title) + '</p>' : '') + '<span class="go">Open course page</span></a>';
      }).join('');
      count.textContent = list.length ? list.length + ' of ' + C.length + ' courses' : 'No course matches. Try fewer characters, or ask your course staff.';
    }
    q.addEventListener('input', draw);
    chips.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      active = b.dataset.d;
      [].forEach.call(chips.querySelectorAll('button'), function(x){ x.setAttribute('aria-pressed', String(x === b)); });
      draw();
    });
    draw();
  }

  /* single course page */
  var cards = document.getElementById('cCards');
  if(cards){
    var sw = document.getElementById('sw');
    sw.innerHTML = '<option value="">Choose a course</option>' + C.map(function(c){ return '<option value="' + esc(c.id) + '">' + esc(c.code) + '</option>'; }).join('');
    function show(){
      var id = decodeURIComponent(location.hash.replace('#',''));
      var c = C.filter(function(x){ return x.id === id; })[0];
      sw.value = c ? c.id : '';
      var extras = document.getElementById('cExtras');
      if(!c){
        document.getElementById('cName').textContent = id ? 'Course not found' : 'Choose a course';
        document.getElementById('cTitle').textContent = id ? 'Pick a course from the list, or ask your course staff.' : 'Pick a course to see its access information.';
        document.getElementById('crumbCode').textContent = 'Course';
        cards.innerHTML = ''; extras.innerHTML = ''; document.title = 'Course | EE Active Learning Labs'; return;
      }
      document.title = c.code + ' | EE Active Learning Labs';
      document.getElementById('cName').textContent = c.code;
      document.getElementById('crumbCode').textContent = c.code;
      document.getElementById('cTitle').textContent = c.title || 'Access information, tech support and lab guide.';
      var access = c.access || D.access || '';
      var canvas = c.canvas ? '<p><a class="btn" href="' + esc(c.canvas) + '" target="_blank" rel="noopener">Open course Canvas</a></p>' : '';
      var guideBtn = c.labGuide ? '<a class="btn primary" href="' + esc(c.labGuide) + '" target="_blank" rel="noopener">' + esc(c.labGuideLabel || 'Open the lab guide') + '</a>' : '';
      var guideNote = c.labGuide ? 'The latest published lab activities for this course.' : 'The latest lab activities for this course will be linked here.';
      cards.innerHTML =
        '<div><span class="kicker">Before you come</span><h3>Access</h3><p>' + esc(access) + '</p>' + canvas + '</div>' +
        '<div><span class="kicker">When you need help</span><h3>Tech support</h3><p>Book time with the lab team for help with equipment, software or setup.</p><a class="btn primary" data-link="booking">Book tech support</a></div>' +
        '<div><span class="kicker">While you work</span><h3>Lab guide</h3><p>' + guideNote + '</p>' + guideBtn + '</div>';
      extras.innerHTML = (c.extras && c.extras.length) ? '<div class="s-head" style="margin-top:40px"><h2>More for ' + esc(c.code) + '</h2></div><ul class="rules">' + c.extras.map(function(x){ return '<li><a href="' + esc(x.href) + '">' + esc(x.label) + '</a></li>'; }).join('') + '</ul>' : '';
      if(window.EE_wire) window.EE_wire(cards);
    }
    sw.addEventListener('change', function(){ location.hash = sw.value; });
    window.addEventListener('hashchange', show);
    show();
  }
})();
