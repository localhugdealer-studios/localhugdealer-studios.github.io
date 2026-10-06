// Clips play like GIFs, but only load and play while on screen.
const clips = document.querySelectorAll(".clip");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  clips.forEach((clip) => clip.setAttribute("controls", ""));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.play().catch(() => target.setAttribute("controls", ""));
      } else {
        target.pause();
      }
    });
  }, { threshold: 0.25 });

  clips.forEach((clip) => observer.observe(clip));
}
