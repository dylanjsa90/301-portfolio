(function(module) {
  var projectView = {};

  projectView.showMore = function() {
    $('.project-body *:nth-of-type(n+2)').hide();
    $('#projects').on('click', 'a.show-more', function() {
      event.preventDefault();
      $(this).parent().find('*').fadeIn('fast');
      $(this).text('Show less').attr('class', 'show-less').removeClass('show-more');
    });

    $('#projects').on('click', 'a.show-less', function() {
      event.preventDefault();
      $('.project-body *:nth-of-type(n+2)').hide();
      $(this).text('Show more').attr('class', 'show-more').removeClass('show-less');

    });
  };

  projectView.renderIndexPage = function() {
    Project.allProjects.forEach(function(a) {
      $('#projects').append(a.toHtml('#project-template'));
    });

    // projectView.handleNav();
    projectView.showMore();
    $('.total-projects').text(Project.allProjects.length);
    $('.total-words').text(Project.numWordsAll());
    $('.tapp').text(Project.numWordsAll() / Project.allProjects.length);
  };


  Project.fetchAll();
  module.projectView = projectView;
})(window);
