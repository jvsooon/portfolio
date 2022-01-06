const rows = document.querySelectorAll('.row');

$(document).ready(function () {
	$('.sidenav').sidenav();
	$('.tabs').tabs();
	$('.materialboxed').materialbox();
});

window.onresize = () => {
	rows.forEach((row, index) => {
		if (window.innerWidth > 992 && index != 0)
			row.classList.add('valign-wrapper');
		else row.classList.remove('valign-wrapper');
	});
};
