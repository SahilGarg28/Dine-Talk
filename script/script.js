function openMenu() {
  document.getElementById("navbar").style.width = "30%";
  document.getElementById("myP2").style.visibility="hidden";
  document.getElementById("close").style.position="fixed";
  document.getElementById("quote").style.color ="black";
}
function openrMenu(){
  document.getElementById("rnavbar").style.width = "30%";
  document.getElementById("rmyP2").style.visibility="hidden";
  document.getElementById("rclose").style.position="fixed";
}


function closeMenu() {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("myP2").style.visibility="visible";
  document.getElementById("close").style.position="absolute";
  document.getElementById("quote").style.color ="rgb(241, 255, 240)";

}
function closerMenu(){
  document.getElementById("rnavbar").style.width = "0";
  document.getElementById("rmyP2").style.visibility="visible";
  document.getElementById("rclose").style.position="absolute";
}
// function on(){
//   document.getElementById("myP2").style.color ="rgb(255,215,0)";

// }
// function off()
// {
//   document.getElementById("myP2").style.color ="rgb(212, 200, 200)";
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "black";
  } else {
    document.getElementById("header").style.backgroundColor = "rgba(51, 51, 51, 0.623)";
  }
}