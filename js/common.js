document.addEventListener('DOMContentLoaded', function (e) {
  function header() {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('shrink')
    } else {
      $('.header').removeClass('shrink')
    }
  }
  window.addEventListener('scroll', header)
})
