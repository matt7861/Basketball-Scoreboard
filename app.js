const homeScore = document.querySelector(".home-score");
const guestScore = document.querySelector(".guest-score");
const resetScore = document.querySelector(".reset");
const incrementButtonHome = document.querySelectorAll(".increment--home");
const incrementButtonGuest = document.querySelectorAll(".increment--guest");

let home = 0;
let guest = 0;

homeScore.innerHTML = home;
guestScore.innerHTML = guest;

incrementButtonHome.forEach((button) => {
  button.addEventListener("click", (e) => {
    home += parseInt(e.target.dataset.increment);
    homeScore.innerHTML = home;
  });
});

incrementButtonGuest.forEach((button) => {
  button.addEventListener("click", (e) => {
    guest += parseInt(e.target.dataset.increment);
    guestScore.innerHTML = guest;
  });
});

resetScore.addEventListener("click", (e) => {
  home = 0;
  guest = 0;

  homeScore.innerHTML = home;
  guestScore.innerHTML = guest;
});
