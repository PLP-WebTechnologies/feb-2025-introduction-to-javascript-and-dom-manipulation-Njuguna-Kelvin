// Select elements
const changeTextBtn = document.getElementById('changeTextBtn');
const textElement = document.getElementById('text');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const container = document.getElementById('container');

// Function to change text content
changeTextBtn.addEventListener('click', () => {
    textElement.textContent = "The text has been changed!";
});

// Function to change text color
changeStyleBtn.addEventListener('click', () => {
    textElement.style.color = "blue";
});

// Function to add a new element
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added paragraph!";
    container.appendChild(newElement);
});

// Function to remove the last added element
removeElementBtn.addEventListener('click', () => {
    const lastElement = container.lastElementChild;
    if (lastElement) {
        container.removeChild(lastElement);
    }
});
