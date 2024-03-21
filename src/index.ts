//Finsweet attributes
// import { linkblockedit } from '@finsweet/attributes-linkblockedit/';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
// import { swipers } from '$utils/swipers';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // linkblockedit();
  // modal();
  // swipers();

  const bodyAttr = document.querySelector('body') as HTMLElement;

  if (localStorage.getItem('switch') === 'dark') {
    bodyAttr.setAttribute('mode', 'dark');
  } else {
    bodyAttr.setAttribute('mode', 'light');
  }

  setTimeout(() => {
    const elLogo = document.querySelector('.logo_embed') as HTMLElement;
    if (!elLogo) return;
    elLogo.style.color = 'var(--mode-1--backgroundcolor--bgc1)';
  }, 1700);

  const switchEl = document.querySelector('[switcher]');
  switchEl?.addEventListener('click', (e) => {
    const storageSwitch = localStorage.getItem('switch');
    if (storageSwitch === 'light') {
      localStorage.setItem('switch', 'dark');
      bodyAttr.setAttribute('mode', 'dark');
    } else {
      localStorage.setItem('switch', 'light');
      bodyAttr.setAttribute('mode', 'light');
    }
  });
});
