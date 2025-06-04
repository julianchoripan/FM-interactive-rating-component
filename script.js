const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit");
const howDidWeDoSection = document.querySelector(".how-did-we-do");
const thankYouSection = document.querySelector(".thank-you");
const dynamicTxt = document.querySelector(".dynamic-txt");
let buttonSelection = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    buttonSelection = button.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (buttonSelection !== null) {
    howDidWeDoSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
    dynamicTxt.textContent = `You selected ${buttonSelection} out of 5`;
  } else {
    alert("Select an option before submiting.");
  }
});
