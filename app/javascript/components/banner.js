import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I Love Design", "Coding"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
