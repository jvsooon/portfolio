$(document).ready(function() {
  $(".sidenav").sidenav();

  $(".materialboxed").materialbox();
});

const rows = document.querySelectorAll(".row");

window.onresize = () => {
  rows.forEach(row => {
    if (window.innerWidth > 992) row.classList.add("valign-wrapper");
    else row.classList.remove("valign-wrapper");
  });
};
