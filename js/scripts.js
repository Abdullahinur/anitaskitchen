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
  $('form#email').submit(function (event) {
    event.preventDefault();
    alert("Congratulations! You Have Succesfully been added to our mailing list.");
  });
});
