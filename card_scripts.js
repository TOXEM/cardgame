const elements = document.querySelectorAll(".card");
const drop = document.querySelector(".player-zone");
const dropElements = drop.querySelectorAll(".card-stack");
const coodrStorage = [];

// перенос карты в зону игрока при одном нажатии ЛКМ
elements.forEach(function (element) {
  element.addEventListener("dblclick", function (event) {
    const portableElement = event.target.parentNode; //присваиваем переменной контейнер на который кликнули ЛКМ
    const elemID = "#pz_" + portableElement.parentNode.id; //вычитываем ID из перемещаемого элемента
    const drop_container = document.querySelector(elemID); //присваиваем переменной соответсвующий ID контейнера
    drop_container.appendChild(portableElement); //добавляем в игровую зону карту

    // попытки выяснить перемежение элементов
    let childrens = dropElements[0].children; //намеренно берем самый первый элемент из области
    let lastELEM = childrens[childrens.length - 1]; //из него берем самый нижний элемент
    const bottom0 = lastELEM.getBoundingClientRect().bottom; // получаем координаты его низа
    let top9 = dropElements[9].getBoundingClientRect().top; // здесь храним координаты верха - они не меняются
    //console.log(lastELEM);
    if (bottom0 > top9) {
      vniz = bottom0 - top9 + 2;
      dropElements[9].style.position = "relative";
      dropElements[9].style.top = vniz + "px";
    }
    console.log("bottom", window.window.scrollY + bottom0);
    console.log("top", window.window.scrollY + top9);
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
