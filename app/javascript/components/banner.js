import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Fullstack Developer","I Love Design.",'I am Creative.', "Coding Life" ],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
