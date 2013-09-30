(function() {
  var toggleMenu;

  toggleMenu = function() {
    $("#menu-container .menu").toggleClass("open");
    return $("#menu-container button").toggleClass("open");
  };

  $(function() {
    $("#menu-container button").click(function(e) {
      return toggleMenu();
    });
    return $("#menu-container .menu ul li").click(function(e) {
      return toggleMenu();
    });
  });

}).call(this);
