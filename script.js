//  Most of classes are tailwind
const heading = document.querySelector("#heading");
const description = document.querySelector("#description");
const images = Array.from(document.querySelectorAll("#images img"));
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector("button");
const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#logo");

const texts = [
  {
    heading: "Discover innovative ways to decorate.",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    heading: "We are available all across the globe.",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    heading: "Manufactured with the best materials.",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
hamburgerMenu.addEventListener("click", () => {
  logo.classList.toggle("invisible");
  navbar.classList.toggle("invisible");
  if (header.classList.contains("bg-white")) {
    header.classList.remove("bg-white");
    hamburgerMenu.classList.replace(
      "bg-[url('/images/icon-close.svg')]",
      "bg-[url('/images/icon-hamburger.svg')]"
    );
  } else {
    header.classList.add("bg-white");
    hamburgerMenu.classList.replace(
      "bg-[url('/images/icon-hamburger.svg')]",
      "bg-[url('/images/icon-close.svg')]"
    );
  }
});

count = 0;

const next = (a) => {
  slideRight((count += a));
  resetTimer();
};
const prev = (a) => {
  slideleft((count += a));
  resetTimer();
};
///////////////////////////////////////////////////////
const removeAnimationClass = () => {
  images.forEach((element) => {
    element.classList.remove("toLeftImg");
    element.classList.remove("toRightImg");
  });
  ///////////////////////////////////////////
};
const slideRight = () => {
  if (count > images.length - 1) count = 0;
  removeAnimationClass();
  images[count].classList.remove("invisible");
  images[count].classList.add("toLeftImg");
  images[count + 1 > images.length - 1 ? 0 : count + 1].classList.add(
    "invisible"
  );
  heading.innerHTML = texts[count].heading;
  description.innerHTML = texts[count].description;
};

/////////////////////////////////////////////////////
const slideleft = () => {
  if (count < 0) count = images.length - 1;
  removeAnimationClass();

  images[count].classList.remove("invisible");
  images[count].classList.add("toRightImg");
  images[count - 1 < 0 ? images.length - 1 : count - 1].classList.add(
    "invisible"
  );
  heading.innerHTML = texts[count].heading;
  description.innerHTML = texts[count].description;
};

/ /; ////////touch event

let touchstartX = 0;
let touchendX = 0;

const imagesDiv = document.querySelector("#images");

function handleGesture() {
  if (touchendX < touchstartX) next(1);
  if (touchendX > touchstartX) prev(-1);
}

imagesDiv.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

imagesDiv.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
/////////////////auto slide
let timer = setInterval(() => {
  next(1);
}, 5000);

const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    next(1);
  }, 5000);
};
