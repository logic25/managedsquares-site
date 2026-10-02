document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.dataset.copy), t = el.textContent;
      var done = function () { b.textContent = 'Copied'; document.getElementById('status').textContent = b.getAttribute('aria-label').replace('Copy', 'Copied'); setTimeout(function () { b.textContent = 'Copy'; }, 1600); };
      var pick = function () { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, pick); else pick();
    });
  });
