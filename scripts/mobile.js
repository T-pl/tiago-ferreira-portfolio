//show navbar mobile
const getsectionLinks = document.querySelector('nav');


function showNavbar(event) {
  if (event.type === 'touchstart') event.preventDefault();
  getsectionLinks.classList.toggle("active");

}

getsectionLinks.addEventListener('click', showNavbar);
getsectionLinks.addEventListener('touchstart', showNavbar);