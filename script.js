(function () {
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus();
      }
    });
  }
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = '\u00a9 ' + new Date().getFullYear() + ' concept demo';
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, status = document.getElementById('form-status');
      if (!f.name.value.trim() || !f.contact.value.trim()) {
        status.textContent = 'Please enter your name and a phone number or email.'; return;
      }
      var body = 'Name: ' + f.name.value + '\nContact: ' + f.contact.value +
        '\nService: ' + f.service.value + '\n\n' + f.msg.value;
      window.location.href = 'mailto:actionjacksonlandscape@gmail.com?subject=' +
        encodeURIComponent('Quote enquiry') + '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open. Nothing has been sent yet.';
    });
  }
})();
