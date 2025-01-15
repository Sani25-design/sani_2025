document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'transform 0.3s, color 0.3s';
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});
