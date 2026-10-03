export function setTheme(t: 'light' | 'dark') {
  const root = document.documentElement;
  const apply = () => {
    root.dataset.theme = t;
    try { localStorage.setItem('theme', t); } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'light' ? '#f1eee7' : '#0b0b0c');
    window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  };
  // Circular wipe from the toggle when the browser supports it.
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('theme-wipe');
    const vt = doc.startViewTransition(apply) as { finished: Promise<void> };
    vt.finished.finally(() => root.classList.remove('theme-wipe'));
  } else apply();
}

export function toggleTheme() {
  setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
}
