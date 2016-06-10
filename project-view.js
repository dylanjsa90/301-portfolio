var projectView = {};

projectView.addFilters = function() {
  $('article').not('.template').each(function() {
    console.log($(this));
    // var filter = $('"' + $(this) + '":first-child').text();
    // console.log(filter);
    // var optionTag = '<option value"' + filter + '">' + filter + '</option>';
    // $('#a-filter').append(optionTag);
  });
};

projectView.handleNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var content = $(this).attr('data-content');
    $('#' + content).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

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

$(document).ready(function() {
  projectView.addFilters();
  projectView.handleNav();
  projectView.showMore();
});
