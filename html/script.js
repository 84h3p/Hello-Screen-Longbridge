const content = document.getElementById('content');
const nextButton = document.getElementById('nextButton');
const header = document.getElementById('header');

// переход текста к департаментам
function next(event) {
  header.remove();
  content.innerHTML = `
  <div id="textInfo">
    <b> Здесь вы можете играть в следующих департаментах: </b>
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

<button id="nextButtonSecond" name="button2"> Далее </button>
  `;

  header.innerHTML = '';
  const nextButtonSecond = document.getElementById('nextButtonSecond');
  nextButtonSecond.addEventListener("click", next2);
}


function next2(event) {
  header.remove();
  content.innerHTML = `

  <div id="textInfo">
    <b> Если вы хотите поиграть с нами </b>
  </div>

  <div class="wrapper_links">
    <div>
      <h2 id="endPageH"> Форум </h2>
      <img src='assets/img/forum.png' height='200px' weidth='200px'>
       <br> <span style="font-size: 20px;">заполните заявку и пройдите интервью </span> <br>
      <a href='http://longbridge.cf/'> ссылка </a>
    </div>
    <div>
      <h2 id="endPageH"> Discord </h2>
      <img src='assets/img/discord.png' height='200px' weidth='200px'>
      <br> <span style="font-size: 20px;">площадка общения нашего сообщества </span> <br>
      <a href='https://discord.gg/KbMEYYhzXA'> ссылка </a>
    </div>
  </div>

  <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
  <div id="checkText">
    Больше не <br> показывать
  </div>
  <button id="close" name="button3"> Закрыть </button>

  `;
  
}


nextButton.addEventListener("click", next);

