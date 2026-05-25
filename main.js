const introScene = document.querySelector('.intro-scene');
const rickrollScene = document.querySelector('.rickroll-scene');
const rickrollVideo = document.querySelector('.rickroll-video');

let hasAdvanced = false;

function advanceToRickroll() {
  if (hasAdvanced) {
    return;
  }

  hasAdvanced = true;
  introScene.classList.add('is-hidden');
  introScene.setAttribute('aria-hidden', 'true');
  rickrollScene.classList.add('is-visible');
  rickrollScene.setAttribute('aria-hidden', 'false');
  rickrollVideo.muted = false;
  rickrollVideo.volume = 1;
  rickrollVideo.play().catch(() => {
    rickrollVideo.play().catch(() => {});
  });
}

introScene.addEventListener('pointerdown', advanceToRickroll, { once: true });