<script>
// ===== Scroll Progress Bar =====
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.background = '#00adb5';
progressBar.style.width = '0%';
progressBar.style.zIndex = '9999';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});

// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.background = '#00adb5';
backToTop.style.color = 'white';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '9999';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>
