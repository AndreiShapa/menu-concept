toggleMenu = ->
  $("#menu-container .menu").toggleClass("open")
  $("#menu-container button").toggleClass("open")

$ ->
  $("#menu-container button").click (e) ->
    toggleMenu()

  $("#menu-container .menu ul li").click (e) ->
    toggleMenu()

