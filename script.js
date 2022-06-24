const content = document.getElementById('content');
const nextButton = document.getElementById('nextButton')

function next(event) {
  content.innerHTML = '';

}

nextButton.addEventListener("click", next);
search.addEventListener('submit', (event) => event.preventDefault());
