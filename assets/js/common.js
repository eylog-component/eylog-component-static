$(document).ready(function() {
  Prism.highlightAll();
  $(".mCustomScrollbar-h").mCustomScrollbar({
    theme:"dark",
    axis:"x",
    scrollbarPosition: "outside"
  });

  $('#example-getting-started').multiselect({
    selectAllText: 'All',
    nonSelectedText: 'Select Nursery/Branch(s)',
    includeSelectAllOption: true,
    maxHeight: 140,
    onInitialized: function(select, container) {
      $('.multiselect-container.dropdown-menu').addClass('mCustomScrollbar-v');
      $(".mCustomScrollbar-v").mCustomScrollbar({
        theme:"dark",
        axis:"y",
      });
    }
  });
});