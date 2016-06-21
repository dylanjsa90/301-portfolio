(function(module) {
  var projectView = {};

  projectView.addFilters = function() {
    $('article').not('.template').each(function() {
      console.log($(this));
      // On hold until filter categories are decided
    });
  };

  // projectView.handleNav = function() {
  //   $('.main-nav').on('click', '.tab', function() {
  //     $('.tab-content').hide();
  //     var content = $(this).attr('data-content');
  //     $('#' + content).fadeIn();
  //   });
  //   $('.main-nav .tab:first').click();
  // };

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
      $('#projects').append(a.toHtml('#article-template'));
    });
    // projectView.addFilters();
    // projectView.handleNav();
    projectView.showMore();
    $('.total-projects').text(Project.allProjects.length);
    $('.total-words').text(Project.numWordsAll());
    $('.tapp').text(Project.numWordsAll() / Project.allProjects.length);
  };


  Project.fetchAll();
  module.projectView = projectView;
})(window);
