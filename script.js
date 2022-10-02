let subscribeBtn = document.querySelector(".subscribeBtn");
let unSubscribeBtn = document.querySelector(".unSubscribeBtn");
let input = document.getElementById("input");
let cookies = document.getElementById("cookies");
let acceptBtn = document.getElementById("acceptBtn");
let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let logo = document.querySelector(".inner");

logo.addEventListener("click", toggleDoor);

function toggleDoor() {
  logo.classList.toggle("doorOpen");
}
acceptBtn.addEventListener("click", () => {
  cookies.style.display = "none";
});

function disableBtns() {
  if (!input.value) {
    subscribeBtn.disabled = true;
    unSubscribeBtn.disabled = true;
  }
  input.addEventListener("input", () => {
    if (input.value.length > 5) {
      subscribeBtn.disabled = false;
      unSubscribeBtn.disabled = false;
    } else if (input.value.length < 5) {
      subscribeBtn.disabled = true;
      unSubscribeBtn.disabled = true;
    }
  });
}
function disableSearchBtn() {
  if (!searchInput.value) {
    searchBtn.disabled = true;
  }
  searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
      searchBtn.disabled = false;
    } else if (searchInput.value.length == 0) {
      searchBtn.disabled = true;
    }
  });
}
window.addEventListener("load", () => {
  disableBtns();
  disableSearchBtn();
});
