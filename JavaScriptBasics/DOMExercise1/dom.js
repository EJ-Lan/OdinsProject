const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

container.appendChild(redText);
container.appendChild(redText);

const innerContainer = document.createElement('div');

const innerDivHeading = document.createElement('h1');
innerDivHeading.textContent = "I'm in a div";

const innerDivP = document.createElement('p');
innerDivP.textContent = "ME TOO!";

innerContainer.appendChild(innerDivHeading);
innerContainer.appendChild(innerDivP);

container.appendChild(innerContainer);