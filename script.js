/* ============================================================
   Key Lime Maritime — shared site script
   Used across index.html, removal.html, transport.html
   ============================================================ */

// Nav scroll state
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  }, { passive: true });
}

// Hero photo subtle zoom on load
const heroPhoto = document.getElementById('hero-photo');
if (heroPhoto) {
  window.addEventListener('load', () => heroPhoto.classList.add('loaded'));
}

// Hamburger / mobile nav
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('nav-overlay');
if (hamburger && overlay) {
  hamburger.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

// Smooth scroll with nav offset (in-page anchors only)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));
}

// Chip toggle (boat type selector)
function toggleChip(el) { el.classList.toggle('on'); }

// Validation helper
function validateField(id, errId, check) {
  const el = document.getElementById(id);
  if (!el) return true;
  const err = errId ? document.getElementById(errId) : null;
  const ok = check(el.value.trim());
  el.classList.toggle('error', !ok);
  if (err) err.classList.toggle('show', !ok);
  return ok;
}

const WEB3FORMS_KEY = 'f2699280-1aa1-4234-b7cd-acbfd6855ac8';

// Hero quick-quote form
async function submitHeroForm() {
  const nameEl  = document.getElementById('hc-name');
  const phoneEl = document.getElementById('hc-phone');
  const name  = nameEl.value.trim();
  const phone = phoneEl.value.trim();
  if (!name || !phone) {
    if (!name)  nameEl.style.borderColor  = 'oklch(55% 0.2 25)';
    if (!phone) phoneEl.style.borderColor = 'oklch(55% 0.2 25)';
    return;
  }
  const btn = document.getElementById('hc-btn');
  const card = document.querySelector('.hero-card');
  const subject = (card && card.dataset.subject) || 'Quick Quote';
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject:    subject + ' — ' + name,
        from_name:  'Key Lime Maritime Website',
        name, phone,
        state:       document.getElementById('hc-state') ? document.getElementById('hc-state').value : '',
        vessel_type: document.getElementById('hc-type')  ? document.getElementById('hc-type').value  : '',
      }),
    });
    const data = await res.json();
    if (data.success) {
      document.getElementById('hc-fields').style.display = 'none';
      document.getElementById('hc-success').classList.add('show');
    } else throw new Error(data.message);
  } catch(err) {
    alert('Something went wrong. Please call (424) 410-3376.\n\n(' + err.message + ')');
    btn.disabled = false; btn.textContent = 'Request Free Quote';
  }
}

// Main quote form
async function submitLead() {
  const nameOk  = validateField('f-name',  'f-name-err',  v => v.length >= 2);
  const phoneOk = validateField('f-phone', 'f-phone-err', v => /^[\d\s\(\)\-\+\.]{7,}$/.test(v));
  const stateOk = validateField('f-state', 'f-state-err', v => v !== '');
  if (!nameOk || !phoneOk || !stateOk) return;
  const btn = document.getElementById('btn-submit');
  const box = document.getElementById('form-box');
  const subject = (box && box.dataset.subject) || 'Quote Request';
  btn.disabled = true; btn.textContent = 'Sending…';
  const chips = [...document.querySelectorAll('.chip.on')].map(c => c.textContent.trim());
  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key:  WEB3FORMS_KEY,
        subject:     subject + ' — ' + document.getElementById('f-name').value.trim(),
        from_name:   'Key Lime Maritime Website',
        name:        document.getElementById('f-name').value.trim(),
        phone:       document.getElementById('f-phone').value.trim(),
        email:       document.getElementById('f-email').value || '—',
        state:       document.getElementById('f-state').value,
        location:    document.getElementById('f-city').value   || '—',
        length:      document.getElementById('f-length').value || '—',
        vessel_loc:  document.getElementById('f-loc') ? (document.getElementById('f-loc').value || '—') : '—',
        vessel_type: chips.length ? chips.join(', ') : '—',
        message:     document.getElementById('f-details').value || '—',
      }),
    });
    const data = await res.json();
    if (data.success) {
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    } else throw new Error(data.message);
  } catch(err) {
    alert('Something went wrong. Please call (424) 410-3376 or email keylimemaritime@gmail.com.\n\n(' + err.message + ')');
    btn.disabled = false; btn.textContent = 'Request My Free Quote';
  }
}

// Live blur validation
[['f-name','f-name-err', v=>v.length>=2], ['f-phone','f-phone-err', v=>/^[\d\s\(\)\-\+\.]{7,}$/.test(v)], ['f-state','f-state-err', v=>v!=='']].forEach(([id,errId,check]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('blur',  () => validateField(id, errId, check));
  el.addEventListener('input', () => { el.classList.remove('error'); const e = document.getElementById(errId); if(e) e.classList.remove('show'); });
});

// FAQPage accordion -> keep only one open at a time within the same faq-items group (optional polish)
document.querySelectorAll('.faq-items').forEach(group => {
  group.querySelectorAll('details.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        group.querySelectorAll('details.faq-item').forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
