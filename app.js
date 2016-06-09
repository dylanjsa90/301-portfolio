var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.url = opts.url;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();
  $newProject.find('h2').html(this.title);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.publishedOn))/ 60 / 60 / 24 / 1000) + ' days ago.');
  $newProject.find('section.project-body').html(this.description);
  $newProject.removeClass('template');

  return $newProject;
};

fakeProjectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

fakeProjectData.forEach(function(ele) {
  projects.push(new Project(ele));
});


projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
