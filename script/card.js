import { getPeloClassPool } from '../classes.js';

const element = document.getElementById('displayCard');

// element.addEventListener("click", displayCard);

// element.addEventListener("click", 
function(){

// function displayCard() {






var row = [];
// var docHead = '<body>';
// var docFooter = '</body>';
var tableDataStart = '<td>';
var tableDataEnd = '</td>';
var tableRowEnd = '</tr>';
var tableHead = '<table style="width:100%"><tr><th></th><th>B</th><th>I</th><th>N</th><th>G</th><th>O</th></tr>';
row[0] = "<tr><td class='firstcol'>P</td>";
row[1] = "<tr><td class='firstcol'>E</td>";
row[2] = "<tr><td class='firstcol'>L</td>";
row[3] = "<tr><td class='firstcol'>O</td>";
row[4] = "<tr><td class='firstcol'>T</td>";
row[5] = "<tr><td class='firstcol'>O</td>";
row[6] = "<tr><td class='firstcol'>N</td>";

var endTable = "</table>";

var peloBingoCard = [];

var randomNum = 0;

var peloClassPoolLen = 0;

var peloClassPool = getPeloClassPool();


element.innerText = "Hello!";
// peloClassPoolLen = peloClassPool.length;


// for (i = 0; i < 35; i++) {

// 	 do {
// 		randomNum = Math.floor(Math.random() * peloClassPoolLen);
		
// 	} while (peloClassPool[randomNum].inUse)
	
// 	peloBingoCard[i] = peloClassPool[randomNum].peloClass;
// 	peloClassPool[randomNum].inUse = true;
// }

// peloBingoCard[33] = "3 Homecoming Classes";
// peloBingoCard[13] = "80s Rock Ride on 4/15 with Leanne";

let myMessage = peloClassPool[18].peloClass;
if (peloClassPool.length = 0) {
	myMessage = 'pool length is 0';
}


const bingoCard = document.createElement("div");
let bingoCardContent = document.createTextNode(myMessage);
bingoCard.appendChild(bingoCardContent);

element.appendChild(bingoCard);

// for (i = 0; i<7; i++){
// 	for (j = i * 5; j < i * 5 + 5; j++){
// 		row[i] = row[i] + tableDataStart + peloBingoCard[j] + tableDataEnd;
// 	};
// 	row[i] = row[i] + tableRowEnd;
// };
	
// displayPage = docHead + tableHead + row[0] + row[1] + row[2] + row[3] + row[4] + row[5] + row[6] + endTable + docFooter;

// document.write(displayPage);
// };

});
