var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}






document.addEventListener("DOMContentLoaded", function() {
  const numbers = [10, 24, 25];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetNumber = numbers[entry.target.dataset.index];
        let currentNumber = 0;

        const interval = setInterval(() => {
          entry.target.innerText = currentNumber.toLocaleString();
          currentNumber++;

          if (currentNumber > targetNumber) {
            clearInterval(interval);
          }
        }, 110);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  numbers.forEach((targetNumber, index) => {
    const numberElement = document.getElementById(`number${index + 1}`);
    numberElement.dataset.index = index; // Store the index as a data attribute

    observer.observe(numberElement);
  });
});
