const content = document.getElementById('content');
const nextButton = document.getElementById('nextButton')
const header = document.getElementById('header')

function next(event) {
  content.innerHTML = `




  <div id="textInfo">
    Здесь вы можете играть в следующих департаментах:
  </div>

  <div class="wrapper">
    <div>
      <h2> LSPD </h2> хранители городских улиц
    </div>
    <div>
      <h2> BCSO </h2> защитники округа
    </div>
    <div>
      <h2> SAHP </h2> контроль шоссе
    </div>
    <div>
      <h2> Civill Department </h2> жители Лос-Сантоса
    </div>
    <div>
      <h2> DPS </h2> безопасность улиц
    </div>
    <div>
      <h2> Dispatch Department </h2> координация
    </div>
  </div>



<button id="nextButton" name="button"> Далее </button>
  `;
  header.innerHTML = ''

}

nextButton.addEventListener("click", next);
search.addEventListener('submit', (event) => event.preventDefault());
