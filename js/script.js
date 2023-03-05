$(document).ready(function() {
  const menuIcon = $('.menu-icon');
  const closeIcon = $('.close-icon');
  const menu = $('.menu');

  menuIcon.click(function() {
    menu.addClass('show-menu');
    menuIcon.hide();
    closeIcon.show();
  });

  closeIcon.click(function() {
    menu.removeClass('show-menu');
    menuIcon.show();
    closeIcon.hide();
  });

  $('.menu a').click(function() {
    menu.removeClass('show-menu');
    menuIcon.show();
    closeIcon.hide();
  });

  function fade(element, action) {
    let opacity = action === 'in' ? 0.1 : 1;
    const timer = setInterval(() => {
      if (action === 'in' ? opacity >= 1 : opacity <= 0.1) {
        clearInterval(timer);
        if (action === 'out') {
          element.hide();
        }
      }
      element.css('opacity', opacity);
      opacity += opacity * 0.1 * (action === 'in' ? 1 : -1);
    }, 10);
  }

  menuIcon.click(function() {
    fade(closeIcon, 'in');
    fade(menuIcon, 'out');
  });

  closeIcon.click(function() {
    fade(menuIcon, 'in');
    fade(closeIcon, 'out');
  });
});
