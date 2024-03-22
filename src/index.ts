//Finsweet attributes
// import { linkblockedit } from '@finsweet/attributes-linkblockedit/';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
// import { swipers } from '$utils/swipers';

const fc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-2--fontcolor--fc1'
);
const lc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-2--linkcolor--lc1'
);
const bgc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-2--backgroundcolor--bgc1'
);
const bgc2_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-2--backgroundcolor--bgc2'
);

const fc1 = getComputedStyle(document.documentElement).getPropertyValue('--mode-1--fontcolor--fc1');
const lc1 = getComputedStyle(document.documentElement).getPropertyValue('--mode-1--linkcolor--lc1');
const bgc1 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-1--backgroundcolor--bgc1'
);
const bgc2 = getComputedStyle(document.documentElement).getPropertyValue(
  '--mode-1--backgroundcolor--bgc2'
);

function dark() {
  document.documentElement.style.setProperty('--mode-1--fontcolor--fc1', fc1_mode2);
  document.documentElement.style.setProperty('--mode-1--linkcolor--lc1', lc1_mode2);
  document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc1', bgc1_mode2);
  document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc2', bgc2_mode2);
}

function light() {
  document.documentElement.style.setProperty('--mode-1--fontcolor--fc1', fc1);
  document.documentElement.style.setProperty('--mode-1--linkcolor--lc1', lc1);
  document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc1', bgc1);
  document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc2', bgc2);
}

const bodyAttr = document.querySelector('body') as HTMLElement;

if (localStorage.getItem('switch') === 'dark') {
  // bodyAttr.setAttribute('mode', 'dark');
  dark();
} else {
  // bodyAttr.setAttribute('mode', 'light');
  light();
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
    dark();
  } else {
    localStorage.setItem('switch', 'light');
    light();
  }
});

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // linkblockedit();
  // modal();
  // swipers();
});
