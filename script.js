/* EXERCISE 1 :
1.1/ Create a function to display the following interface: */

function displayInterface(arrayMain) { // I create my function that will generate a graphical interface
  let containerMain = document.createElement("section"); // Create section in variable containerMain
  document.body.appendChild(containerMain); // I add in body

  let createH1 = document.createElement("h1") // Create h1 in variable createH1
  createH1.textContent = "Cinéma Le Dauphin"; // I give a value
  containerMain.appendChild(createH1); // I add in container

  let createP = document.createElement("p") // Create P in variable createP
  createP.textContent = "Une salle de cinéma grand confort, un restaurant et unesélection de vins de qualité. Des avant premières, desrencontres, des ciné-repas, des débats, des ateliers,des ciné-goûters, de 11h30 à 23h du mardi audimanche (jusqu’à minuit le vendredi et le samedi)."; //I give a value
  containerMain.appendChild(createP); // I add in container

  let elementInputButton = document.createElement("input") // Create input Button
  document.body.appendChild(elementInputButton) // I add in body
  elementInputButton.type = "button" // It is a button
  elementInputButton.value = "Voir les films à l’affiche cette semaine" //I give a value


  elementInputButton.addEventListener("click", function formInputButton() { //I put the event listener on the button
    containerMain.hidden = "true"; // I hide the container
    createTableOfArray(arrayMain) // I call my function that allows me to generate an array
  })
}

let arrayMovieInfos = [ // Create array
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"],
];


function createTableOfArray(arrayMain) { // Crete array of film
  let elementTable = document.createElement("table") // table creation
  let crateTableHTML = document.body.appendChild(elementTable) // I add in body

  let elementTableHead = document.createElement("thead") // T header creation
  elementTable.appendChild(elementTableHead) // I add in a table

  let elementTableHeadTR = document.createElement("tr") // tr title
  elementTableHead.appendChild(elementTableHeadTR) // I add Tr in a thead

  let elementTableBody = document.createElement("tbody") // create tbody in table
  elementTable.appendChild(elementTableBody) // I add tbody in elementTable

  let elementCourant;
  let elementCourant2;
  let elementCourant3;
  let i = 0;
  let j = 1;
  let k = 0;

  elementCourant = arrayMain[i]; // The first line of Array
  while (i < elementCourant.length) { // time that i is smaller than the size of the first line
    elementTableHeadTH = document.createElement("th") // Create Th
    elementTableHeadTH.textContent = elementCourant[i] //retrieved the index element i in the text Content
    elementTableHeadTR.appendChild(elementTableHeadTH) // add in HeadTR
    i++ // i +1
  }
  elementCourant2 = arrayMain[j] // Processing of the current element
  while (j < arrayMain.length) { // Processing of the current element
    elementtableTR = document.createElement("tr")
    elementTableBody.appendChild(elementtableTR);
    k = 0;
    while (k < elementCourant.length) {
      elementCourant3 = arrayMain[j][k]
      elementtableTd = document.createElement("td")
      elementtableTd.textContent = elementCourant3
      elementtableTR.appendChild(elementtableTd)
      k++
    }
    j++
  }
  return elementTable//I know it's no use, but you had to return a array
}

// displayInterface(arrayMovieInfos);


/* EXERCICE 2 :
2.1/ Créez un tableau à deux dimensions contenant les informations suivantes :
SUBSTANCES Température de fusion ou
solidification en °C

Température d’ébullition en °C

acide acétique 17 118
acide nitrique -41 86
acide sulfurique 10 290
alcool éthylique -114 78
aluminium 660 2450
*/

let arrayTemperature = [ // Create array
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", 118],
  ["acide nitrique", "-41", 86],
  ["acide sulfurique", "10", 290],
  ["alcool éthylique", "-114", 78],
  ["aluminium", "660", 2450],
];

function temperatureSuperiorDelete(arrayMain, number) {
  let elementTable = document.createElement("table") // table creation
  document.body.appendChild(elementTable)

  let elementTableHead = document.createElement("thead") // T header creation
  elementTable.appendChild(elementTableHead)

  let elementTableHeadTR = document.createElement("tr") // tr title
  elementTableHead.appendChild(elementTableHeadTR)

  let elementTableHeadTH = document.createElement("th")
  elementTableHeadTH.textContent = arrayMain[0][0] + " inférieur à " + number + "°C";
  elementTableHeadTR.appendChild(elementTableHeadTH)

  let elementTableBody = document.createElement("tbody") // create tbody in table
  elementTable.appendChild(elementTableBody);

  let j = 0;
  let i = 1; // second row of the table
  let k = 0;
  while (k < arrayMain.length) { //time that k is less than the length of the array
    j = 2 //J corresponds to Boiling temperature in °C
    if (number > arrayMain[i][j]) {
      stockTemperature = arrayMain[i][0] // we get the name of the substance
      let elementTbodyTR = document.createElement("tr")
      elementTableBody.appendChild(elementTbodyTR); // push TR in Tbody
      elementtableTd = document.createElement("td") // Create TD which contains substance
      elementtableTd.textContent = stockTemperature // we recovered the substance
      elementTbodyTR.appendChild(elementtableTd)
      i++
    }
    k++
  }
}


temperatureSuperiorDelete(arrayTemperature, 300);
