const elements = document.querySelectorAll(".card");
const drop = document.querySelector(".player-zone");

// перенос карты в зону игрока при одном нажатии ЛКМ
elements.forEach(function (element) {
  element.addEventListener("mousedown", function (event) {
    const portableElement = event.target.parentNode; //присваиваем переменной контейнер на который кликнули ЛКМ
    const elemID = "#pz_" + portableElement.parentNode.id; //вычитываем ID из перемещаемого элемента
    const drop_container = document.querySelector(elemID); //присваиваем переменной соответсвующий ID контейнера
    drop_container.appendChild(portableElement); //добавляем в игровую зону карту
  });

  // увеличение карты в 1.5 раза при наведении курсора
  element.addEventListener("mouseover", function (event) {
    const largeIMG = event.target;
    largeIMG.style.transform = "scale(1.4)";
    largeIMG.style.transformOrigin = "center";
    largeIMG.style.position = "relative";
    largeIMG.style.zIndex = "1000";
  });

  // возврат размера в исходное состояние
  element.addEventListener("mouseout", function (event) {
    const largeIMG = event.target;
    largeIMG.style.transform = "";
    largeIMG.style.transformOrigin = "";
    largeIMG.style.position = "";
    largeIMG.style.zIndex = "";
  });
});
