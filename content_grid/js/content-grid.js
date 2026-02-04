(function (Drupal, once) {
  Drupal.behaviors.contentGrid = {
    attach(context) {
      once('contentGrid', '.content-grid', context).forEach(() => {
        // Reserved for future enhancements
      });
    }
  };
})(Drupal, once);
