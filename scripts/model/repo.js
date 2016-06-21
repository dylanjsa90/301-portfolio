(function(module) {
  var repos = {};
  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/dylanjsa90/repos?per_page20&sort=updated',
      type: 'GET',
      headers:{'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.allRepos = data;
        callback();
      }
    });
  };

  repos.withAttr = function(attr) {
    return repos.allRepos.filter(function(r) {
      return r[attr];
    });
  };

  module.repos = repos;
})(window);
