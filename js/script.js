const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector('#menu').cloneNode(1);



hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle('active');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}









// ------------------------------ TABS -------------------------------------------

const tabBtns = Array.from(document.querySelectorAll(".tab__btn"));
const tabIndicator = document.querySelector("#tab_indicator");
const tabSlide = Array.from(document.querySelectorAll(".tab__slide"));
const root = document.querySelector(":root");

const numBtns = tabBtns.length;

root.style.setProperty("--num-btns", numBtns);

tabBtns[0].classList.add("active");
tabSlide[0].classList.add("active");

let activeBtn = tabBtns[0];
let activeSlide = tabSlide[0];

tabBtns.forEach((el) => {
  el.addEventListener("click", onTabBtnClick);
});

function onTabBtnClick(e) {
  e.preventDefault();
  const btn = e.target.closest(".tab__btn");
  changeBtn(btn);
}

function changeBtn(btn) {
  if (btn.classList.contains("active")) {
    return;
  }
  activeBtn.classList.remove("active");
  btn.classList.add("active");
  activeBtn = btn;
  changeIndicator(btn);
}

function changeIndicator(btn) {
  const indexBtn = tabBtns.indexOf(btn);
  tabIndicator.style.left = `calc(${indexBtn}*100%/${numBtns})`;
  changeSlide(indexBtn);
}

function changeSlide(index) {
  activeSlide.classList.remove("active");
  tabSlide[index].classList.add("active");
  activeSlide = tabSlide[index];
}



// обрезка длинного имени кофе, если оно не влезает
const mediaQuery = window.matchMedia('(max-width: 370px)');
if (mediaQuery.matches) {
  let namesOfCoffee = document.querySelectorAll('.namesOfCoffee');
  namesOfCoffee.forEach(element => {
    if (element.innerText.length >= 13) {
      element.innerText = element.innerText.slice(0, 12) + "...";
    }
  });
}





// ------------------------------ TABS -------------------------------------------













