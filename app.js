(function(){
  const KEY = 'toggleState';
  const toggle = document.getElementById('toggle');
  const stateText = document.getElementById('state');
  const resetBtn = document.getElementById('reset');

  function updateUI(checked){
    toggle.checked = checked;
    toggle.setAttribute('aria-checked', String(checked));
    stateText.textContent = checked ? 'On' : 'Off';
  }

  function save(checked){
    try{ localStorage.setItem(KEY, checked ? '1' : '0'); }catch(e){ /* ignore */ }
  }

  function load(){
    try{
      const v = localStorage.getItem(KEY);
      return v === '1';
    }catch(e){ return false }
  }

  // init
  const initial = load();
  updateUI(initial);

  toggle.addEventListener('change', (e)=>{
    const val = e.target.checked;
    updateUI(val);
    save(val);
  });

  resetBtn.addEventListener('click', ()=>{
    localStorage.removeItem(KEY);
    updateUI(false);
  });
})();

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registered'))
      .catch(err => console.warn('Service Worker registration failed', err));
  });
}