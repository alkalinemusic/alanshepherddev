/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// sliding menu and burger icon animation
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle nav
		nav.classList.toggle('nav-active');
		//animate links
		navLinks.forEach((link, index)=>{
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.2}s`;
			}
		});
		//Burger animation
		burger.classList.toggle('toggle');
	});

}

navSlide();