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
