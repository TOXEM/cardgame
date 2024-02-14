const elements = document.querySelectorAll('.card');
const drop = document.querySelector('.player-zone');

elements.forEach(function(element) {
    element.addEventListener('mousedown', function(event) {
        const hoveredElement = event.target;
        hoveredElement.classList.add('player-zone');
        hoveredElement.classList.add('card');
        drop.appendChild(hoveredElement);
        console.log(hoveredElement.alt);
    });
});

