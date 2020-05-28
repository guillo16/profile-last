const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-container');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 0.2) {
        navbar.classList.add('navbar-container-black');
      } else {
        navbar.classList.remove('navbar-container-black');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
