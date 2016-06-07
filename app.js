var projects = [];

function Project(title, description, url, publishedOn) {
  this.title = title;
  this.description = description;
  this.url = url;
  this.publishedOn = publishedOn;
}

Project.prototype.toHtml = function () {
  var $newProject = $('template').clone();
  $newProject.find('h1').html(this.title);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.publishedOn))) + ' days ago.');
  $newProject.find('project-body').html(this.description);
  $newProject.removeClass('template');

  return $newProject;
};

fakeProjectData.forEach(function(ele) {
  projects.push(new Project(ele));
});


projects.forEach(function(a) {
  $('.projects').append(a.toHtml());
});
