const shareButton = document.querySelector(".article-card__share");
const shareButtonSvgPath = document.querySelector(".article-card__share path");
const socialBlock = document.querySelector(".article-card__social");
const card = document.querySelector(".article-card__content");
const mql = window.matchMedia("(max-width: 768px)");

shareButton.addEventListener("click", () => {
  const state = socialBlock.dataset.state;

  if (state === "closed") {
    socialBlock.classList.add("show");
    socialBlock.classList.remove("hide");
    socialBlock.dataset.state = "opened";
    shareButton.style.background = "var(--desaturated-dark-blue)";
    shareButtonSvgPath.style.fill = "var(--white)";

    if (mql.matches) {
      card.style.padding = "2rem 2.5rem 1rem";
    }
  } else {
    socialBlock.classList.add("hide");
    socialBlock.classList.remove("show");
    socialBlock.dataset.state = "closed";
    shareButton.style.background = "var(--light-grayish-blue)";
    shareButtonSvgPath.style.fill = "var(--desaturated-dark-blue)";

    if (mql.matches) {
      card.style.padding = "2rem 2.5rem 1.7rem";
    }
  }
});
