function Project(opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
}

Project.all = [];

Project.prototype.toHtml = function (scriptTemplateId) {
  this.publishedTime = parseInt((new Date() - new Date(this.publishedOn))/ 60 / 60 / 24 / 1000) + ' days ago.';
  var template = Handlebars.compile($(scriptTemplateId).text());
  return template(this);
};

Project.loadAll = function(dataWePassIn) {
  dataWePassIn.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  }).forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  if (localStorage.fakeProjectData) {
    var data = JSON.parse(localStorage.getItem('fakeProjectData'));
    Project.loadAll(data);
    projectView.renderIndexPage();
  } else {
    $.getJSON('../data/fakeprojectdata.json', function(data) {
      localStorage.setItem('fakeProjectData', JSON.stringify(data));
      Project.loadAll(data);
      projectView.renderIndexPage();
    });
  }
};
