// Toggle style switcher
const styleSwitcherToggler = doucment.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("onclick", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
