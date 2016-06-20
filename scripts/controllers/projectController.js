(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  projectView.renderIndexPage();
  module.projectController = projectController;
})(window);
