const introScene = document.querySelector('.intro-scene');
const rickrollScene = document.querySelector('.rickroll-scene');
const rickrollVideo = document.querySelector('.rickroll-video');

const introDurationMs = 3200;

window.setTimeout(() => {
  introScene.classList.add('is-hidden');
  introScene.setAttribute('aria-hidden', 'true');
  rickrollScene.classList.add('is-visible');
  rickrollScene.setAttribute('aria-hidden', 'false');
  rickrollVideo.muted = false;
  rickrollVideo.volume = 1;
  rickrollVideo.play().catch(() => {
    rickrollVideo.play().catch(() => {});
  });
}, introDurationMs);

window.addEventListener('pointerdown', () => {
  if (rickrollScene.classList.contains('is-visible')) {
    rickrollVideo.muted = false;
    rickrollVideo.volume = 1;
    rickrollVideo.play().catch(() => {});
  }
});