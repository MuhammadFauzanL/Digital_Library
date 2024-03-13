function scrollPage(getID) {
  var toPage = document.getElementById(getID);
  if (toPage) {
    var set = toPage.offsetTop;
    var liveSet = window.pageYOffset;
    var increment = (set - liveSet) / 15; 

    function scroll() {
      var newPosition = liveSet + increment;
      window.scrollTo(0, newPosition);
      liveSet = window.pageYOffset;
      if ((increment > 0 && liveSet < set) || (increment < 0 && liveSet > set)) {
        requestAnimationFrame(scroll); 
      }
    }
    scroll(); 
  }
}
