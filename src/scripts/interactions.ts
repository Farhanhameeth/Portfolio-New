// Page-level micro-interactions. Runs on every `astro:page-load`
// and tears itself down before the next navigation swaps the DOM.

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = () => matchMedia('(hover: hover) and (pointer: fine)').matches;

let cleanups: (() => void)[] = [];
document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((fn) => fn());
  cleanups = [];
});

function on<K extends keyof WindowEventMap>(target: Window, type: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions): void;
function on(target: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions): void;
function on(target: EventTarget, type: string, fn: any, opts?: AddEventListenerOptions) {
  target.addEventListener(type, fn, opts);
  cleanups.push(() => target.removeEventListener(type, fn, opts));
}

/** Fade/slide elements in when they enter the viewport. */
function reveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-split]');
  if (reduced()) { els.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

/** Buttons that lean toward the cursor. */
function magnetic() {
  if (!fine() || reduced()) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.35;
    const move = (e: Event) => {
      const { clientX, clientY } = e as PointerEvent;
      const r = el.getBoundingClientRect();
      const x = (clientX - (r.left + r.width / 2)) * strength;
      const y = (clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const leave = () => { el.style.transform = ''; };
    el.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
    on(el, 'pointermove', move);
    on(el, 'pointerleave', leave);
  });
}

/** Live local time in Colombo. */
function clocks() {
  const els = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const tick = () => els.forEach((el) => (el.textContent = fmt.format(new Date())));
  tick();
  const id = setInterval(tick, 1000);
  cleanups.push(() => clearInterval(id));
}

/** Text that decodes from random glyphs. Cycles through data-words if present. */
function scramble() {
  const glyphs = '!<>-_\\/[]{}—=+*^?#01ABCDEFXYZ';
  document.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el) => {
    const words: string[] = el.dataset.words ? JSON.parse(el.dataset.words) : [el.textContent || ''];
    let i = 0;
    let raf = 0;
    const run = (to: string) => {
      const from = el.textContent || '';
      const len = Math.max(from.length, to.length);
      const q = Array.from({ length: len }, (_, n) => ({ from: from[n] || '', to: to[n] || '', start: Math.floor(Math.random() * 18), end: Math.floor(Math.random() * 18) + 18 }));
      let frame = 0;
      const step = () => {
        let out = '';
        let done = 0;
        for (const c of q) {
          if (frame >= c.end) { done++; out += c.to; }
          else if (frame >= c.start) out += `<span class="accent">${glyphs[Math.floor(Math.random() * glyphs.length)]}</span>`;
          else out += c.from;
        }
        el.innerHTML = out;
        if (done < q.length) { frame++; raf = requestAnimationFrame(step); }
      };
      cancelAnimationFrame(raf);
      step();
    };
    if (reduced()) { el.textContent = words[0]; return; }
    run(words[0]);
    if (words.length > 1) {
      const id = setInterval(() => { i = (i + 1) % words.length; run(words[i]); }, 2600);
      cleanups.push(() => clearInterval(id));
    }
    cleanups.push(() => cancelAnimationFrame(raf));
  });
}

/** Paragraph whose words light up as you scroll through it. */
function scrollWords() {
  const blocks = document.querySelectorAll<HTMLElement>('[data-scroll-words]');
  if (!blocks.length) return;
  const update = () => {
    const vh = innerHeight;
    blocks.forEach((b) => {
      const r = b.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const words = b.querySelectorAll<HTMLElement>('.w');
      const lit = p * words.length;
      words.forEach((w, n) => { w.style.opacity = String(Math.min(1, Math.max(0.14, lit - n + 0.14))); });
    });
  };
  update();
  on(window, 'scroll', update, { passive: true });
  on(window, 'resize', update);
}

/** Vertical scroll drives a horizontal track (pinned section). */
function hscroll() {
  document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
    const track = section.querySelector<HTMLElement>('[data-hscroll-track]');
    const bar = section.querySelector<HTMLElement>('[data-hscroll-bar]');
    if (!track) return;
    const mq = matchMedia('(min-width: 901px)');
    let dist = 0;
    const size = () => {
      if (!mq.matches) { section.style.height = ''; track.style.transform = ''; return; }
      dist = Math.max(0, track.scrollWidth - innerWidth);
      section.style.height = `${dist + innerHeight}px`;
      update();
    };
    const update = () => {
      if (!mq.matches) return;
      const r = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, dist)));
      track.style.transform = `translate3d(${-p * dist}px,0,0)`;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    size();
    on(window, 'resize', size);
    on(window, 'scroll', update, { passive: true });
    // Images may change the track width after load.
    const ro = new ResizeObserver(size);
    ro.observe(track);
    cleanups.push(() => ro.disconnect());
  });
}

/** Numbers that count up when visible. */
function counters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target as HTMLElement;
      const to = Number(el.dataset.count);
      if (reduced()) { el.textContent = String(to); return; }
      const t0 = performance.now();
      const dur = 1600;
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 4))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
  cleanups.push(() => io.disconnect());
}

/** Cards that tilt in 3D toward the pointer, with a moving highlight. */
function tilt() {
  if (!fine() || reduced()) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 6;
    on(el, 'pointermove', ((e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${(0.5 - y) * max}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * max}deg`);
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
    }) as EventListener);
    on(el, 'pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });
}

/** Copy-to-clipboard buttons. */
function copyButtons() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((el) => {
    on(el, 'click', async () => {
      try { await navigator.clipboard.writeText(el.dataset.copy!); } catch { return; }
      const label = el.querySelector<HTMLElement>('[data-copy-label]') || el;
      const prev = label.textContent;
      label.textContent = 'Copied ✓';
      el.classList.add('is-copied');
      setTimeout(() => { label.textContent = prev; el.classList.remove('is-copied'); }, 1600);
    });
  });
}

/** Reading-progress bar for blog posts. */
function progress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const article = document.querySelector<HTMLElement>('[data-article]');
  if (!bar || !article) return;
  const update = () => {
    const r = article.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
    bar.style.transform = `scaleX(${p})`;
  };
  update();
  on(window, 'scroll', update, { passive: true });
}

/** Elements that drift at a different speed while scrolling. */
function parallax() {
  if (reduced()) return;
  const els = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!els.length) return;
  const update = () => els.forEach((el) => {
    const r = el.getBoundingClientRect();
    const speed = Number(el.dataset.parallax) || 0.15;
    const off = (r.top + r.height / 2 - innerHeight / 2) * -speed;
    el.style.transform = `translate3d(0, ${off}px, 0)`;
  });
  update();
  on(window, 'scroll', update, { passive: true });
}

export function initInteractions() {
  reveal();
  magnetic();
  clocks();
  scramble();
  scrollWords();
  hscroll();
  counters();
  tilt();
  copyButtons();
  progress();
  parallax();
}
