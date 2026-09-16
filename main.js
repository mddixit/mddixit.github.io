/* Shared site behavior: nav, theme, scroll reveal, project cards and project pages.
   You normally don't need to edit this file. Project content lives in projects.js. */
(function () {
  const PROJECTS = window.PROJECTS || [];
  const ART = window.PROJECT_ART || {};
  const isLocal = location.protocol === 'file:';   // previewing on your computer

  /* ---------- Nav ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false);
    }));
  }

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  /* ---------- Helpers ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const list = a => Array.isArray(a) ? a : [];
  const href = p => `project.html?p=${encodeURIComponent(p.slug)}`;
  const tint = c => `color-mix(in srgb, var(--${c || 'blue'}) 45%, var(--surface))`;

  // Cover area: photo if given, otherwise the built-in illustration, otherwise a colored block
  function coverHTML(p) {
    const fallback = ART[p.slug] || `<div class="art-initial">${esc((p.title || '?').charAt(0))}</div>`;
    if (p.cover) {
      return `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy" style="object-position:${esc(p.coverPosition || '50% 50%')}"
                onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'art-fallback',innerHTML:this.dataset.fb}))"
                data-fb="${esc(fallback)}">`;
    }
    return fallback;
  }

  /* ---------- Reveal on scroll ---------- */
  function reveal() {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Homepage cards ---------- */
  const grid = document.getElementById('projectGrid');
  if (grid) {
    let featuredDone = false;
    grid.innerHTML = PROJECTS.map(p => {
      const feature = p.featured && !featuredDone;
      if (feature) featuredDone = true;
      const tags = list(p.skills).slice(0, 4).map(t => `<span class="tag">${esc(t)}</span>`).join('');
      return `
        <a class="card ${feature ? 'feature' : 'half'} reveal" href="${href(p)}">
          <div class="art" style="background:${tint(p.color)}">${coverHTML(p)}</div>
          <div class="body">
            <span class="pill ${esc(p.color)}" style="align-self:flex-start">${esc(p.label)}</span>
            <h3>${esc(p.title)}</h3>
            <div class="role">${esc(p.org)} · ${esc(p.dates)}</div>
            <p class="summary">${p.summary || ''}</p>
            <div class="tags">${tags}</div>
            <span class="more">View project <span aria-hidden="true">→</span></span>
          </div>
        </a>`;
    }).join('');
  }

  /* ---------- Project page ---------- */
  const page = document.getElementById('projectPage');
  if (page) {
    const slug = new URLSearchParams(location.search).get('p');
    const i = PROJECTS.findIndex(p => p.slug === slug);
    if (i < 0) {
      page.innerHTML = `
        <section class="block"><div class="wrap">
          <h1 class="p-title">Project not found</h1>
          <p class="p-lede">That project doesn't exist (anymore). <a href="index.html#projects">See all projects →</a></p>
        </div></section>`;
    } else {
      const p = PROJECTS[i];
      document.title = `${p.title} | Maitreyi Dixit`;
      const color = p.color || 'blue';

      const meta = [['Role', p.role], ['Organization', p.org], ['Timeline', p.dates], ['Team', p.team]]
        .filter(([, v]) => v)
        .map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('');

      const results = list(p.results).length ? `
        <div class="p-results">
          ${list(p.results).map(r => `
            <div class="stat reveal" style="--c: var(--${color})"><b class="${String(r.value).length > 6 ? 'sm' : ''}">${esc(r.value)}</b><span>${esc(r.label)}</span></div>`).join('')}
        </div>` : '';

      const links = list(p.links).length ? `
        <div class="side-block">
          <h3>Links</h3>
          <div class="p-links">${list(p.links).map(l => `<a class="btn secondary" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
        </div>` : '';

      const gallery = list(p.images).map((m, n) => {
        if (m.youtube) {
          return `<figure class="g-item g-video"><div class="g-frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(m.youtube)}" title="${esc(m.caption || p.title)}" allowfullscreen loading="lazy"></iframe></div>${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ''}</figure>`;
        }
        return `<figure class="g-item" data-n="${n}">
            <button class="g-frame" type="button" aria-label="Enlarge: ${esc(m.caption || 'image')}">
              <img src="${esc(m.src)}" alt="${esc(m.caption || p.title)}" loading="lazy">
            </button>
            ${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ''}
          </figure>`;
      }).join('');

      // Videos (own files or YouTube), shown large near the top
      const videos = list(p.videos).map(v => `
        <figure class="v-item">
          <div class="v-frame">
            ${v.youtube
              ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtube)}" title="${esc(v.caption || p.title)}" allowfullscreen loading="lazy"></iframe>`
              : `<video controls preload="metadata" playsinline ${v.poster ? `poster="${esc(v.poster)}"` : ''}><source src="${esc(v.src)}" type="video/mp4">Your browser can't play this video. <a href="${esc(v.src)}">Download it</a>.</video>`}
          </div>
          ${v.caption ? `<figcaption>${esc(v.caption)}</figcaption>` : ''}
        </figure>`).join('');

      // Design highlights: small titled cards
      const details = list(p.details).map(d => `
        <div class="d-card"><h3>${esc(d.title)}</h3><p>${d.text || ''}</p></div>`).join('');

      // Posters: static image + PDF, and/or an interactive poster that loads on click
      const posters = list(p.posters).map((ps, n) => {
        const buttons = [
          ps.interactive ? `<a class="btn primary" href="${esc(ps.interactive)}" target="_blank" rel="noopener">Open interactive poster ↗</a>` : '',
          ps.pdf ? `<a class="btn secondary" href="${esc(ps.pdf)}" target="_blank" rel="noopener">View PDF ↗</a>` : '',
          ps.image ? `<a class="btn secondary" href="${esc(ps.image)}" target="_blank" rel="noopener">Full-size image ↗</a>` : ''
        ].join('');
        const preview = ps.image
          ? `<button class="poster-img" type="button" data-full="${esc(ps.image)}" data-cap="${esc(ps.title)}" aria-label="Enlarge poster">
               <img src="${esc(ps.image)}" alt="Poster: ${esc(ps.title)}" loading="lazy"></button>`
          : (ps.interactive && ps.embed !== false)
            ? `<div class="poster-embed" data-src="${esc(ps.interactive)}">
                 <button class="poster-load" type="button">
                   <span class="pl-icon" aria-hidden="true">▶</span>
                   <b>Load interactive poster</b>
                   <small>Zoom into figures and play the videos right here</small>
                 </button>
               </div>`
            : '';
        return `
          <article class="poster ${ps.image ? 'has-img' : 'is-embed'} reveal">
            ${preview}
            <div class="poster-info">
              ${ps.venue ? `<span class="pill ${esc(color)}">${esc(ps.venue)}</span>` : ''}
              <h3>${esc(ps.title)}</h3>
              ${ps.text ? `<p>${ps.text}</p>` : ''}
              <div class="poster-btns">${buttons}</div>
            </div>
          </article>`;
      }).join('');

      const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
      const next = PROJECTS[(i + 1) % PROJECTS.length];
      const pager = PROJECTS.length > 1 ? `
        <nav class="pager" aria-label="More projects">
          <a href="${href(prev)}" class="pager-link"><small>← Previous</small><span>${esc(prev.title)}</span></a>
          <a href="${href(next)}" class="pager-link next"><small>Next →</small><span>${esc(next.title)}</span></a>
        </nav>` : '';

      page.innerHTML = `
        <section class="p-hero">
          <div class="wrap">
            <a class="back" href="index.html#projects">← All projects</a>
            <span class="pill ${esc(color)}">${esc(p.label)}</span>
            <h1 class="p-title">${esc(p.title)}</h1>
            <p class="p-lede">${p.summary || ''}</p>
            <dl class="p-meta">${meta}</dl>
          </div>
        </section>

        <div class="wrap">
          <div class="p-cover" style="background:${tint(color)}">${coverHTML(p)}</div>
          ${results}

          ${videos ? `<section class="p-sec p-videos reveal"><h2>See it in action</h2>${videos}</section>` : ''}

          <div class="p-body">
            <div class="p-main">
              <section class="p-sec reveal">
                <h2>Overview</h2>
                ${list(p.overview).map(t => `<p>${t}</p>`).join('')}
              </section>

              ${details ? `
              <section class="p-sec reveal">
                <h2>${esc(p.detailsTitle || 'Design highlights')}</h2>
                <div class="d-grid" style="--c: var(--${color})">${details}</div>
              </section>` : ''}

              <section class="p-sec reveal">
                <h2>My contributions</h2>
                <ul class="checks" style="--c: var(--${color})">${list(p.contributions).map(t => `<li>${t}</li>`).join('')}</ul>
              </section>

              <section class="p-sec reveal">
                <h2>What I learned</h2>
                <ol class="learn">${list(p.learnings).map(t => `<li>${t}</li>`).join('')}</ol>
              </section>
            </div>

            <aside class="p-side">
              <div class="side-block reveal" style="--c: var(--${color})">
                <h3>Skills gained</h3>
                <div class="chips">${list(p.skills).map(s => `<span>${esc(s)}</span>`).join('')}</div>
              </div>
              ${list(p.tools).length ? `
              <div class="side-block reveal">
                <h3>Tools</h3>
                <div class="chips plain">${list(p.tools).map(s => `<span>${esc(s)}</span>`).join('')}</div>
              </div>` : ''}
              ${links}
            </aside>
          </div>

          ${posters ? `<section class="p-sec p-posters"><h2>Posters &amp; presentations</h2><div class="posters">${posters}</div></section>` : ''}

          <section class="p-sec p-gallery-sec" id="gallery" ${gallery ? '' : 'hidden'}>
            <h2>Gallery</h2>
            <div class="gallery">${gallery}</div>
          </section>

          ${pager}
        </div>

        <div class="lightbox" id="lightbox" hidden>
          <button class="lb-close" type="button" aria-label="Close">✕</button>
          <button class="lb-nav lb-prev" type="button" aria-label="Previous image">‹</button>
          <figure><img alt=""><figcaption></figcaption></figure>
          <button class="lb-nav lb-next" type="button" aria-label="Next image">›</button>
        </div>`;

      setupGallery(p);
    }
  }

  /* ---------- Gallery: missing photos + lightbox ---------- */
  function setupGallery(p) {
    const sec = document.getElementById('gallery');
    if (!sec) return;
    const items = [...sec.querySelectorAll('.g-item[data-n]')];

    items.forEach(fig => {
      const img = fig.querySelector('img');
      const onFail = () => {
        if (isLocal) {
          // While previewing locally, show where the photo should go
          fig.classList.add('missing');
          img.replaceWith(Object.assign(document.createElement('div'), {
            className: 'g-missing',
            innerHTML: `<b>Add photo</b><code>${esc(img.getAttribute('src'))}</code>`
          }));
        } else {
          // On the live site, quietly hide photos that aren't uploaded yet
          fig.remove();
          if (!sec.querySelector('.g-item')) sec.hidden = true;
        }
      };
      if (img.complete && img.naturalWidth === 0) onFail(); else img.addEventListener('error', onFail);
    });

    const lb = document.getElementById('lightbox');
    const lbImg = lb.querySelector('img');
    const lbCap = lb.querySelector('figcaption');
    let current = 0;
    const photos = () => [...sec.querySelectorAll('.g-item[data-n]:not(.missing) img')];
    const show = k => {
      const list = photos(); if (!list.length) return;
      current = (k + list.length) % list.length;
      lbImg.src = list[current].src; lbImg.alt = list[current].alt;
      lbCap.textContent = list[current].closest('figure').querySelector('figcaption')?.textContent || '';
    };
    let single = false;   // true when showing one poster image (no prev/next)
    const reveal_ = () => { lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus(); };
    const open = k => { single = false; lb.classList.remove('single'); show(k); reveal_(); };
    const openSingle = (src, cap) => {
      single = true; lb.classList.add('single');
      lbImg.src = src; lbImg.alt = cap; lbCap.textContent = cap; reveal_();
    };

    // Poster image → enlarge
    document.querySelectorAll('.poster-img').forEach(b =>
      b.addEventListener('click', () => openSingle(b.dataset.full, b.dataset.cap)));

    // Interactive poster → load the embed only when asked
    document.querySelectorAll('.poster-embed').forEach(box => {
      box.querySelector('.poster-load').addEventListener('click', () => {
        const src = box.dataset.src;
        box.innerHTML = `<iframe src="${esc(src)}" title="Interactive poster" allowfullscreen></iframe>`;
        box.insertAdjacentHTML('afterend',
          `<p class="embed-note">Poster not showing? <a href="${esc(src)}" target="_blank" rel="noopener">Open it in a new tab ↗</a></p>`);
      });
    });

    const close = () => { lb.hidden = true; document.body.style.overflow = ''; };

    sec.addEventListener('click', e => {
      const btn = e.target.closest('button.g-frame'); if (!btn) return;
      const img = btn.querySelector('img'); if (!img) return;
      open(photos().indexOf(img));
    });
    lb.querySelector('.lb-close').addEventListener('click', close);
    lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
    lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (single) return;
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  reveal();
})();
