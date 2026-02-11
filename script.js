// Optional: Add a fade-out effect or redirect after a few seconds
setTimeout(() => {
  document.querySelector('.splash-container').style.opacity = 0;
  // window.location.href = 'main.html'; // Uncomment to redirect
}, 2000);

// Redirect after 3 seconds
setTimeout(() => {
  window.location.href = 'welcome.html';
}, 3000); 