const closeBtn = document.getElementById("close-btn");
const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const logo = document.getElementById("logo");
const submitBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("emailInput");
const err = document.getElementById("error-icon");
const errorMsg = document.getElementById("errorMsg");
const bookmarking = document.getElementById("bookmarking");
const sharing = document.getElementById("sharing");
const speddy = document.getElementById("speddy");
const sectionThree = document.getElementById("section-three");
const sectionTwo = document.getElementById("section-two");
const sectionOne = document.getElementById("section-one");
const sectionThreeImg = document.getElementById("section-three-img");
const sectionTwoImg = document.getElementById("section-two-img");
const sectionOneImg = document.getElementById("section-one-img");
const arrow = document.querySelectorAll("#arrow");
const commentContainer = document.querySelectorAll('.question');

commentContainer.forEach((question)  => {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
  })
})


submitBtn.addEventListener("click", () => {

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(!emailPattern.test(emailInput.value.trim())){
    err.style.display = "inline-flex";
    errorMsg.style.display = "block";
    errorMsg.innerText = "Whoops, make sure it's an email";
    emailInput.style.borderColor = "#fa5757";
  }else {
    err.style.display = "none";
    errorMsg.style.display = "none";
    emailInput.style.borderColor = "transparent";
  }
})

speddy.addEventListener("click", () => {
  sectionTwo.style.display = "block";
  sectionOne.style.display = "none";
  sectionThree.style.display = "none";
  sectionTwoImg.style.display = "block";
  sectionOneImg.style.display = "none";
  sectionThreeImg.style.display = "none";
  speddy.style.borderBottomColor = "#fa5757";
  bookmarking.style.borderBottomColor = "transparent";
  sharing.style.borderBottomColor = "transparent";
})

bookmarking.addEventListener("click", () => {
  sectionTwo.style.display = "none";
  sectionOne.style.display = "block";
  sectionThree.style.display = "none";
  sectionTwoImg.style.display = "none";
  sectionOneImg.style.display = "block";
  sectionThreeImg.style.display = "none";
  speddy.style.borderBottomColor = "transparent";
  bookmarking.style.borderBottomColor = "#fa5757";
  sharing.style.borderBottomColor = "transparent";
})

sharing.addEventListener("click", () => {
  sectionTwo.style.display = "none";
  sectionOne.style.display = "none";
  sectionThree.style.display = "block";
  sectionTwoImg.style.display = "none";
  sectionOneImg.style.display = "none";
  sectionThreeImg.style.display = "block";
  speddy.style.borderBottomColor = "transparent";
  bookmarking.style.borderBottomColor = "transparent";
  sharing.style.borderBottomColor = "#fa5757";
})

hamburger.addEventListener("click", () =>{
  navigation.style.display = "flex";
  hamburger.style.display = "none";
  logo.style.display = "none";
})

closeBtn.addEventListener("click", () =>{
  navigation.style.display = "none";
  logo.style.display = "inline-flex";
  hamburger.style.display ="inline-flex"
})