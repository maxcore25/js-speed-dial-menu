// for Internet Explorer
(function () {
  var speedDialContainer = document.querySelector('.speed-dial');
  var primaryButton = speedDialContainer.querySelector(
    '.speed-dial__button--primary'
  );

  document.addEventListener('click', e => {
    var classList = 'speed-dial';
    var primaryButttonClicked =
      e.target === primaryButton || primaryButton.contains(e.target);
    var speedDialIsActive =
      speedDialContainer.getAttribute('class').indexOf('speed-dial--active') !==
      -1;

    if (primaryButttonClicked && !speedDialIsActive) {
      classList += ' speed-dial--active';
    }

    speedDialContainer.setAttribute('class', classList);
  });
})();
