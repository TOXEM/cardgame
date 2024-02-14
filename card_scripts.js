const card = document.getElementsByClassName("card");
const dropZone = document.getElementsByClassName("player-zone");

card.addEventListener("dragstart", function (event) {
  console.log(event);
});

dropZone.addEventListener("dragover", function (event) {
  event.preventDefault();
});
dropZone.addEventListener("drop", function (event) {
  dropZone.prepend(card);
});
