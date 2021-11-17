console.log("Hello World")

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  var isMobileDevice = window.innerWidth <= 640

  if (x.className === 'navtoggle' && isMobileDevice) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
