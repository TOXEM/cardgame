const elements = document.querySelectorAll(".card");
const drop = document.querySelector(".player-zone");
const dropElements = drop.querySelectorAll(".card-stack");
const coodrStorage = [];
let vniz = 0;

function coordWriter() {
  coodrStorage.splice(0, coodrStorage.length);
  for (let i = 0; i < dropElements.length; i++) {
    coodrStorage.push(
      dropElements[i].getBoundingClientRect().left + window.scrollX
    );
  }
}
coordWriter();
window.addEventListener("resize", function () {
  coordWriter();
});
// перенос карты в зону игрока при двойном нажатии ЛКМ
elements.forEach(function (element) {
  element.addEventListener("dblclick", function (event) {
    //объявление переменных и перенос карты в .player-zone
    const portableElement = event.target.parentNode; //присваиваем переменной контейнер на который кликнули ЛКМ
    const elemID = "#pz_" + portableElement.parentNode.id; //вычитываем ID из перемещаемого элемента
    const drop_container = document.querySelector(elemID); //присваиваем переменной соответсвующий ID контейнера
    drop_container.appendChild(portableElement); //добавляем в игровую зону карту

    /*начало цикла:
    1. Поиск контейнра в который попала карточка
    2. Вычисление контейнера под ним
    3. Смещение нижнего контейера при перемежении границ контейнера сверху*/
    let j = 0; // объявляем переменную в которой потом будем хранить индекс добавленного элемента
    let approve = false; // эта переменная нужна чтобы условие по совпадению не работало с этим j = 0
    // Пункт 1
    for (let i = 0; i < dropElements.length; i++) {
      if ("#" + dropElements[i].id == elemID) {
        j = i;
        approve = true;
      }

      let coordLeft = dropElements[i].getBoundingClientRect().left;
      let coordTop = dropElements[i].getBoundingClientRect().top;
      let coordBottom = dropElements[j].getBoundingClientRect().bottom;
      let raznica = dropElements[j].getBoundingClientRect().height;
      // Пункт 2
      if (
        coordLeft == coodrStorage[j] &&
        coordTop > coordBottom &&
        coordTop - coordBottom < raznica &&
        approve
      ) {
        // Пункт 3
        const child = dropElements[j].children;
        const lastElem = child[child.length - 1];
        const bottomJ = lastElem.getBoundingClientRect().bottom;
        if (bottomJ > coordTop) {
          vniz += bottomJ - coordTop + 2;
          dropElements[i].style.position = "relative";
          dropElements[i].style.top = vniz + "px";
        }
      }
    }
  });

  element.addEventListener("mousedown", function (event) {
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
