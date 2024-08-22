//Finsweet attributes
// import { linkblockedit } from '@finsweet/attributes-linkblockedit/';

//Modal
// import { modal } from '$modal/modal';

//Nest
// import { nestedElement } from './nest/nestElement';

//Utils
// import { swipers } from '$utils/swipers';

import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  // nestedElement();
  // linkblockedit();
  // modal();
  // swipers();

  function dark() {
    gsap.to('html', { '--mode-1--fontcolor--fc1': 'white', duration: 0.3 });
    gsap.to('html', { '--mode-1--linkcolor--lc1': 'white', duration: 0.3 });
    gsap.to('html', { '--mode-1--backgroundcolor--bgc1': 'white', duration: 0.3 });
    gsap.to('html', { '--mode-1--backgroundcolor--bgc2': 'black', duration: 0.3 });
  }

  function light() {
    gsap.to('html', { '--mode-1--fontcolor--fc1': 'black', duration: 0.3 });
    gsap.to('html', { '--mode-1--linkcolor--lc1': 'black', duration: 0.3 });
    gsap.to('html', { '--mode-1--backgroundcolor--bgc1': 'black', duration: 0.3 });
    gsap.to('html', { '--mode-1--backgroundcolor--bgc2': 'white', duration: 0.3 });
  }

  // Set variable on logo after animation
  setTimeout(() => {
    const elLogo = document.querySelector('.logo_embed') as HTMLElement;
    if (!elLogo) return;
    elLogo.style.color = 'var(--mode-1--backgroundcolor--bgc1)';
  }, 1700);

  // const htmlEl = document.querySelector('html');
  // htmlEl?.removeAttribute('mode');
  const switchEl = document.querySelector('[switcher]');
  switchEl?.addEventListener('click', (e) => {
    const storageSwitch = localStorage.getItem('switch');
    if (storageSwitch === 'dark') {
      localStorage.setItem('switch', 'light');
      light();
    } else {
      localStorage.setItem('switch', 'dark');
      dark();
    }
  });
});

// Code at the end of head in Webflow
// <!-- Script for getting switch without flash -->
// <script>
// 	 // Colors mode dark
//   const fc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-2--fontcolor--fc1'
//   );
//   const lc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-2--linkcolor--lc1'
//   );
//   const bgc1_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-2--backgroundcolor--bgc1'
//   );
//   const bgc2_mode2 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-2--backgroundcolor--bgc2'
//   );

//   // Colors mode light
//   const fc1 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-1--fontcolor--fc1'
//   );
//   const lc1 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-1--linkcolor--lc1'
//   );
//   const bgc1 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-1--backgroundcolor--bgc1'
//   );
//   const bgc2 = getComputedStyle(document.documentElement).getPropertyValue(
//     '--mode-1--backgroundcolor--bgc2'
//   );

// 	const storageSwitch = localStorage.getItem('switch');
// 	if (storageSwitch === "dark") {
//   	document.documentElement.style.setProperty('--mode-1--fontcolor--fc1', fc1_mode2);
//     document.documentElement.style.setProperty('--mode-1--linkcolor--lc1', lc1_mode2);
//     document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc1', bgc1_mode2);
//     document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc2', bgc2_mode2);
//   } else {
//   	 document.documentElement.style.setProperty('--mode-1--fontcolor--fc1', fc1);
//     document.documentElement.style.setProperty('--mode-1--linkcolor--lc1', lc1);
//     document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc1', bgc1);
//     document.documentElement.style.setProperty('--mode-1--backgroundcolor--bgc2', bgc2);
//   }
// </script>
