var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor = "black";
  } else {
    document.getElementById("navbar").style.top = "-60px";
      document.getElementById("navbar").style.backgroundColor = "black";
  }
    prevScrollpos = currentScrollPos;
}