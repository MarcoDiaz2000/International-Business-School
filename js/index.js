
document.querySelector('.custom-toggler').addEventListener('click', function() {
  document.getElementById('fullscreenMenu').style.display = 'flex';
  });

  document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('fullscreenMenu').style.display = 'none';
  });

  document.querySelectorAll('.mainmenu a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.getElementById('fullscreenMenu').style.display = 'none';
    });
  });





