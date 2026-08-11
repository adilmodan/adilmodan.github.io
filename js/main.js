/* Subtle interaction sounds via Web Audio API */
var audioCtx;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTick() {
  var ctx = getAudioCtx();
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 1800;
  osc.type = 'sine';
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.06);
}

function playPop() {
  var ctx = getAudioCtx();
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
  osc.type = 'sine';
  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.08);
}

/* Tab switching with smooth transitions */
function switchTab(name) {
  var active = document.querySelector('.tab-panel--active');
  if (active) {
    active.classList.remove('tab-panel--active');
  }
  document.querySelectorAll('.pill-nav__item').forEach(function(i) {
    i.classList.toggle('pill-nav__item--active', i.getAttribute('data-tab') === name);
  });
  var panel = document.getElementById('tab-' + name);
  if (panel) {
    panel.classList.add('tab-panel--active');
    // Re-trigger scroll reveals for newly visible cards
    panel.querySelectorAll('.card').forEach(function(card) {
      observer.observe(card);
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playTick();
}

/* Scroll-triggered card reveals via IntersectionObserver */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card').forEach(function(card) {
  observer.observe(card);
});

/* Nav pill press effect + sound */
document.querySelectorAll('.pill-nav__item').forEach(function(btn) {
  btn.addEventListener('mousedown', function() {
    btn.style.transform = 'scale(0.95)';
  });
  btn.addEventListener('mouseup', function() {
    btn.style.transform = '';
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = '';
  });
});

/* Card click sounds */
document.querySelectorAll('.card[href], .card[data-tab-link]').forEach(function(card) {
  card.addEventListener('mousedown', function() {
    playPop();
  });
});
