/*Audio*/
var audio = $("#audio")[0];
$("nav-one a").mouseenter(function() {
  audio.play();
});
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*EMAIL SUBSCRIPTION*/

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    alert(document.getElementById("#email") );
  });
});
