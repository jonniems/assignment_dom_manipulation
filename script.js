const spottedAnimalList = document.querySelector('#spotted-animals-list');
const btnAnimals = document.querySelectorAll('.big-five-list-item');
btnAnimals.forEach(function (button) {
    button.addEventListener('click', animalSpotted = animal => {
        console.log('Gespot: ', animal.target.textContent);
        const spottedAnimal = animal.target.textContent;
        const newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(spottedAnimal));
        spottedAnimalList.appendChild(newLi);
    });
});
const btnRemoveFirst = document.getElementById('remove-first-item-button');
btnRemoveFirst.addEventListener('click', removeFirst = () => {
    const firstAnimal = spottedAnimalList.getElementsByTagName('li')[0];
    spottedAnimalList.removeChild(firstAnimal);
});

const btnRemoveAll = document.querySelector('#remove-all-button');
btnRemoveAll.addEventListener('click', removeAll = () => {
    while (spottedAnimalList.firstChild) {
        spottedAnimalList.removeChild(spottedAnimalList.firstChild);
    }
});