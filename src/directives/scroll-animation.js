const scrollAnimationObserber = new IntersectionObserver(
  (entries, animationObserber) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animationObserber.unobserve(entry.target);
      }
    });
  }
);
export default {
  bind(el) {
    el.classList.add("before-enter");
    scrollAnimationObserber.observe(el);
  },
};
