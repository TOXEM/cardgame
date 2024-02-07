function moveCard(card) {
  var playerZone = document.querySelector(".player-zone");
  playerZone.appendChild(card);
  setTimeout(function () {
    checkEmpty(source);
  }, 0); // Проверяем, остались ли в исходном стеке карты
}

function dragStart(ev) {
  draggedCard = ev.target;
  source = ev.target.parentNode;
  ev.dataTransfer.setData("text/plain", ev.target.id);
  setTimeout(function () {
    ev.target.style.display = "none";
  }, 0);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var playerZone = document.querySelector(".player-zone");
  playerZone.appendChild(draggedCard); // Добавляем карту к зоне игрока
  draggedCard.style.display = "block";
  checkEmpty(source); // Проверяем, остались ли в исходном стеке карты
}

function dragEnd(ev) {
  if (draggedCard.parentNode === source) {
    draggedCard.style.display = "block";
  }
}

var cardStacks = document.querySelectorAll(".card-stack");
cardStacks.forEach(function (stack) {
  var cards = stack.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
    card.addEventListener("dblclick", function (ev) {
      moveCard(card);
    }); // Используем функцию moveCard для перемещения карты при двойном клике
  });
});

function checkEmpty(stack) {
  var cardsInStack = stack.querySelectorAll(".card");
  if (cardsInStack.length === 0) {
    stack.classList.add("empty"); // Добавляем класс 'empty', если карт не осталось
  }
}

var playerZone = document.querySelector(".player-zone");
playerZone.addEventListener("dragover", allowDrop);
playerZone.addEventListener("drop", drop);
