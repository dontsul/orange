import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/tasks.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  animOnScroll();
}
const inputPhone = document.querySelector("#phone");
const inputPhoneStar = document.querySelector("#phone-star");
const inputEmail = document.querySelector("#email");
const inputEmailStar = document.querySelector("#email-star");
const textareaMessage = document.querySelector("#message");
const textareaMessageStar = document.querySelector("#message-star");

inputPhone.addEventListener("input", () =>
  handleStar(inputPhone, inputPhoneStar)
);
inputEmail.addEventListener("input", () =>
  handleStar(inputEmail, inputEmailStar)
);
textareaMessage.addEventListener("input", () =>
  handleStar(textareaMessage, textareaMessageStar)
);

function handleStar(elField, elStar) {
  if (elField.value !== "") {
    elStar.classList.add("hide");
  } else {
    elStar.classList.remove("hide");
  }
}
