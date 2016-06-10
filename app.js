var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.url = opts.url;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function (scriptTemplateId) {
  this.publishedTime = parseInt((new Date() - new Date(this.publishedOn))/ 60 / 60 / 24 / 1000) + ' days ago.';
  var template = Handlebars.compile($(scriptTemplateId).text());
  return template(this);
};

fakeProjectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

fakeProjectData.forEach(function(ele) {
  projects.push(new Project(ele));
});


projects.forEach(function(a) {
  $('#projects').append(a.toHtml('#article-template'));
});
