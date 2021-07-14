var faqAccordion = document.getElementsByClassName("accordion-title");
var i;

for (i = 0; i < faqAccordion.length; i++) {
  faqAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var accordionAnswer = this.nextElementSibling;
    if (accordionAnswer.style.display === "block") {
      accordionAnswer.style.display = "none";
    } else {
      accordionAnswer.style.display = "block";
    }
  });
}