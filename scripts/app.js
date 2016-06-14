(function(module) {

  function Project(opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }

  Project.allProjects = [];

  Project.prototype.toHtml = function (scriptTemplateId) {
    this.publishedTime = parseInt((new Date() - new Date(this.publishedOn))/ 60 / 60 / 24 / 1000) + ' days ago.';
    var template = Handlebars.compile($(scriptTemplateId).text());
    return template(this);
  };

  Project.loadAll = function(dataWePassIn) {
    Project.allProjects = dataWePassIn.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    })
    .map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(nextFunction) {
    if (localStorage.fakeProjectData) {
      var data = JSON.parse(localStorage.getItem('fakeProjectData'));
      Project.loadAll(data);
      nextFunction();
    } else {
      Project.getAll(nextFunction);
    };
  };

  Project.getAll = function(nextFunction) {
    $.getJSON('../data/fakeprojectdata.json', function(data) {
      localStorage.setItem('fakeProjectData', JSON.stringify(data));
      Project.loadAll(data);
      nextFunction();
    });
  };

  Project.numWordsAll = function() {
    return Project.allProjects.map(function(project) {
      return project.description.match(/\w+/g).length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  module.Project = Project;
})(window);
