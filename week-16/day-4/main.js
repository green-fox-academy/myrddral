// console.log(document.querySelector('.transformed-text').getAnimations());

const availWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;

console.log(`w = ${availWidth}, h = ${availHeight}`);

// Legacy
// only on window
// window.addEventListener('resize', () => {
//   console.log(window.screen);
// });

// New
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    console.log('resized', entry);
  }
});

resizeObserver.observe(document.querySelector('main'));
resizeObserver.observe(document.querySelector('header'));
resizeObserver.unobserve(document.querySelector('header'));

resizeObserver.disconnect();