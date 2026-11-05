
const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
      // Khi cuộn xuống quá 40px thì thêm class 'is-scrolled'
      if (window.scrollY > 40) {
            siteHeader.classList.add('is-scrolled');
      } else {
            siteHeader.classList.remove('is-scrolled');
      }
}, { passive: true });