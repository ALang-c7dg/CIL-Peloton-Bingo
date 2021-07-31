import { getPeloClassPool } from './classes.js';

document.getElementById('generateCard').addEventListener('click', () => {
	const welcomeSection = document.getElementById("welcome");
	const bingoCard = document.getElementById("bingoCard");

	const squaresList = document.getElementById("squaresList");
	let childSquares = squaresList.children;

	let peloClassPool = getPeloClassPool();
	let peloClassPoolLen = peloClassPool.length;
	let randomNum = 0;

	for (let square = 0; square < childSquares.length; square++){

		do {
			randomNum = Math.floor(Math.random() * peloClassPoolLen);
		} while (peloClassPool[randomNum].inUse)

		childSquares.item(square).innerText = peloClassPool[randomNum].peloClass;
		peloClassPool[randomNum].inUse = true;

	}

	welcomeSection.classList.replace("show" , "hide");
	document.getElementById("topBar").classList.replace("show", "hide");
	bingoCard.classList.remove("hideCard", "showCard");
});
