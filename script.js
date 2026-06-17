/* Key Lime Maritime v2 — shared script */

// Nav scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Hamburger
const burger  = document.getElementById('hamburger');
const overlay = document.getElementById('nav-overlay');
if (burger && overlay) {
  burger.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  revealEls.forEach(el => obs.observe(el));
}

// Form validation helpers
function val(id) { return (document.getElementById(id) || {}).value || ''; }
function markField(id, ok) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('invalid', !ok);
  const err = document.getElementById(id + '-err');
  if (err) err.classList.toggle('show', !ok);
}

const WEB3KEY = 'f2699280-1aa1-4234-b7cd-acbfd6855ac8';

async function submitForm(subjectPrefix) {
  const name  = val('f-name').trim();
  const phone = val('f-phone').trim();
  const state = val('f-state');

  let ok = true;
  if (name.length < 2)                        { markField('f-name',  false); ok = false; } else markField('f-name',  true);
  if (!/^[\d\s\(\)\-\+\.]{7,}$/.test(phone)) { markField('f-phone', false); ok = false; } else markField('f-phone', true);
  if (!state)                                 { markField('f-state', false); ok = false; } else markField('f-state', true);
  if (!ok) return;

  const btn = document.getElementById('f-submit');
  btn.disabled = true; btn.textContent = 'Sending…';

  const payload = {
    access_key: WEB3KEY,
    subject:    subjectPrefix + ' — ' + name,
    from_name:  'Key Lime Maritime Website',
    name, phone, state,
    email:   val('f-email')   || '—',
    city:    val('f-city')    || '—',
    length:  val('f-length')  || '—',
    loc:     val('f-loc')     || '—',
    details: val('f-details') || '—',
  };

  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.success) {
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    } else throw new Error(data.message);
  } catch (err) {
    alert('Something went wrong — please call (424) 410-3376\n\n' + err.message);
    btn.disabled = false; btn.textContent = 'Submit Request';
  }
}

// Live blur validation
[['f-name', v => v.trim().length >= 2], ['f-phone', v => /^[\d\s\(\)\-\+\.]{7,}$/.test(v.trim())], ['f-state', v => !!v]].forEach(([id, check]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('blur',  () => markField(id, check(el.value)));
  el.addEventListener('input', () => { el.classList.remove('invalid'); const e = document.getElementById(id+'-err'); if(e) e.classList.remove('show'); });
});
