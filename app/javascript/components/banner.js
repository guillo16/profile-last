import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I Love Design.",'I am Creative.', "Coding Life"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
