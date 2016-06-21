(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.render = function() {
    $('#about ul').empty().append(repos.withAttr('name').map(repoCompiler));
  };

  repos.requestRepos(repoView.render);
  module.repoView = repoView;
})(window);
