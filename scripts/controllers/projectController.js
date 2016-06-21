(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  };

  projectView.renderIndexPage();
  module.projectController = projectController;
})(window);
