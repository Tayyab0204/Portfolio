

(function () {
  'use strict';

  // 1. Init AOS (scroll animations)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  // 2. Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Navbar scroll state
  var nav = document.querySelector('.custom-nav');
  var backToTop = document.getElementById('backToTop');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', y > 30);
    if (backToTop) backToTop.classList.toggle('show', y > 600);
    activateNavLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 4. Active nav link based on scroll position
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.custom-nav .nav-link');

  function activateNavLink() {
    var pos = window.scrollY + 120;
    var current = '';
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === '#' + current);
    });
  }

  // 5. Auto-close mobile nav on link click
  var mobileLinks = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .btn');
  var collapseEl = document.getElementById('navMenu');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
        var inst = bootstrap.Collapse.getInstance(collapseEl);
        if (inst) inst.hide();
      }
    });
  });

  // 6. Contact form (no real submission — just show toast)
var form = document.getElementById('contactForm');
var toast = document.getElementById('formToast');
var submitBtn = document.getElementById('submitBtn');
var btnDefault = submitBtn ? submitBtn.querySelector('.btn-default') : null;
var btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;

function setLoading(isLoading) {
  if (!submitBtn) return;
  submitBtn.disabled = isLoading;
  if (btnDefault && btnLoading) {
    btnDefault.classList.toggle('d-none', isLoading);
    btnLoading.classList.toggle('d-none', !isLoading);
  }
}

function showToast(message, isError) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.toggle('error', !!isError);
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    setLoading(true);

    var data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      showToast("Message Sent Successfully!", false);
      form.reset();
    })
    .catch(function () {
      showToast("Error sending message. Please try again.", true);
    })
    .then(function () {
      setLoading(false);
    });
  });
}

  // 7. Subtle parallax on hero blobs
  var blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', function (e) {
    if (window.innerWidth < 992) return;
    var x = (e.clientX / window.innerWidth - 0.5) * 30;
    var y = (e.clientY / window.innerHeight - 0.5) * 30;
    blobs.forEach(function (b, i) {
      var k = (i + 1) * 0.5;
      b.style.transform = 'translate(' + x * k + 'px,' + y * k + 'px)';
    });
  });
})();
