function set_the_doge() {
  var occluder = document.createElement('div');
  occluder.id = "occluder";
  occluder.style.width = window.innerWidth + 'px';
  occluder.style.height = window.innerHeight + 'px';
  document.body.appendChild(occluder);
  document.getElementsByTagName('spinner')[0].style.display = 'block';
}

window.onresize = function() {
  set_the_doge();
}

setTimeout(function() {
  set_the_doge();
}, 500);
