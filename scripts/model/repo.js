(function(module) {
  var repos = {};
  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/dylanjsa90/repos?per_page=10&sorted=updated')
      .done(function(data) {
        repos.allRepos =data;
      }).done(callback);
  };

  repos.withAttr = function(attr) {
    return repos.allRepos.filter(function(r) {
      return r[attr];
    });
  };

  module.repos = repos;
})(window);
