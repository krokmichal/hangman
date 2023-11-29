let clickSound = new Audio("sounds/click.wav");

//          OBSŁUGA TRYBU "WPISZ SŁOWO"

let title = document.querySelector("#title");
let gameMode = document.querySelector("#gameMode");
let tryby = document.querySelector("#tryby");
let yourWord = document.querySelector("#yourWord");
yourWord.addEventListener("click", pickWord);
let createdW = false;
let createdC = false;
let password = "";

// stworzenie pojemnika na input+przycisk
let wordField = document.createElement("div");
wordField.setAttribute("id", "wordField");

let exitButton = document.createElement("div");
exitButton.setAttribute("id", "exit");
exitButton.innerHTML = "WYJDŹ Z GRY";
exitButton.addEventListener("click", exitGame);

function exitGame() {
  window.location.href = "index.html";
}

let input = '<input id="inputWord" type="text"></input>';
let startButton = '<button id="startB" type="button">START</button>';

wordField.innerHTML = input + startButton;

// funkcja pokazująca na ekranie pole do wpisania własnego słowa oraz przycisk START
function pickWord() {
  if (createdW == false) {
    clickSound.play();
    yourWord.classList.add("clicked");
    document.body.append(wordField);
    createdW = true;
    let startB = document.querySelector("#startB");
    startB.addEventListener("click", startCustomGame);
  } else {
    clickSound.play();
    yourWord.classList.remove("clicked");
    wordField.remove();
    createdW = false;
  }
}

let wprowadzoneHaslo = "";

function startCustomGame() {
  if (document.querySelector("#inputWord").value !== "") {
    wprowadzoneHaslo = document.querySelector("#inputWord").value;
    wprowadzoneHaslo = wprowadzoneHaslo.toUpperCase();
    document.querySelector("#gameMode").remove();
    document.querySelector("#tryby").remove();
    wordField.remove();
    title.remove();
    document.body.append(exitButton);
    haslo = wprowadzoneHaslo;
    wypiszHaslo();
  }
}

//          OBSŁUGA TRYBU "KATEGORIE"

// wywolanie funkcji otwierajacej liste z kategoriami
document.querySelector("#categories").addEventListener("click", showCategories);

let categorieRandom = '<div id="catRandom" class="cat">LOSOWA KATEGORIA</div>';
let categorieCars = '<div id="cat1" class="cat">SAMOCHODY</div>';
let categorieComputerGames = '<div id="cat2" class="cat">GRY KOMPUTEROWE</div>';
let categorieMovies = '<div id="cat3" class="cat">FILMY I SERIALE</div>';
let categorieBiology = '<div id="cat4" class="cat">PRZYRODA</div>';
let categories = [
  categorieRandom,
  categorieCars,
  categorieComputerGames,
  categorieMovies,
  categorieBiology,
];

// stworzenie pojemnika na kategorie
let divCategories = document.createElement("div");
divCategories.setAttribute("id", "divCategories");

let kategorie = "";

// wypelnienie pojemnika kategoriami
for (let i of categories) kategorie += [i];

divCategories.innerHTML = kategorie;

// kategorie i slowa w nich zawarte
let cars = [
  "renault",
  "peugeot",
  "rover",
  "saab",
  "volvo",
  "silnik",
  "kierownica",
  "hamulec",
  "bagażnik",
  "opel",
  "fiat",
  "audi",
  "bmw",
  "mercedes",
  "toyota",
  "honda",
  "ford",
  "chevrolet",
  "nissan",
  "mazda",
];
let computerGames = [
  "csgo",
  "legend of zelda",
  "dark and darker",
  "starfield",
  "gta",
  "minecraft",
  "fortnite",
  "overwatch",
  "dota 2",
  "world of warcraft",
  "the witcher",
  "cyberpunk 2077",
  "doom",
  "fallout",
  "counter-strike",
  "league of legends",
  "assassins creed",
  "far cry",
  "red dead redemption",
];
let movies = [
  "avengers",
  "titanic",
  "szklana pułapka",
  "indiana jones i świątynia zagłady",
  "plotkara",
  "gra o tron",
  "teoria wielkiego podrywu",
  "przyjaciele",
  "gwiezdne wojny",
  "mandalorian",
  "forrest gump",
  "skazany na shawshank",
  "ojciec chrzestny",
  "pulp fiction",
  "park jurajski",
  "matrix",
  "avatar",
  "incepcja",
  "powrót do przyszłości",
];
let biology = [
  "kwiat",
  "drzewo",
  "ptak",
  "krokodyl",
  "słoń",
  "serce",
  "nerka",
  "żółw",
  "motyl",
  "ryba",
  "pszczoła",
  "bakteria",
  "grzyb",
  "rekin",
  "dinozaur",
  "mózg",
  "ryż",
  "pingwin",
  "jaguar",
  "bóbr",
];

// funkcja wyswietla kategorie na ekranie, dodaje do kazdej eventListener
function showCategories() {
  if (createdC == false) {
    clickSound.play();
    document.querySelector("#categories").classList.add("clicked");
    document.body.append(divCategories);
    createdC = true;

    let catRandom = document.querySelector("#catRandom");
    catRandom.addEventListener("click", getCatAndWord);

    for (let i = 1; i <= categories.length - 1; i++) {
      document
        .querySelector("#cat" + i + "")
        .addEventListener("click", function () {
          getWord(i);
        });
    }
  } else {
    clickSound.play();
    document.querySelector("#categories").classList.remove("clicked");
    divCategories.remove();
    createdC = false;
  }
}

// funkcja losująca słowo z tablicy. argument kat to numer kategorii (tablicy)
function getWord(kat) {
  clickSound.play();
  let w = "";
  switch (kat) {
    case 1:
      w = cars[Math.floor(Math.random() * cars.length)];
      break;
    case 2:
      w = computerGames[Math.floor(Math.random() * computerGames.length)];
      break;
    case 3:
      w = movies[Math.floor(Math.random() * movies.length)];
      break;
    case 4:
      w = biology[Math.floor(Math.random() * biology.length)];
      break;
  }
  startCatGame(w);
}

function startCatGame(word) {
  word = word.toUpperCase();
  document.querySelector("#gameMode").remove();
  document.querySelector("#tryby").remove();
  wordField.remove();
  divCategories.remove();
  document.body.append(exitButton);
  haslo = word;
  title.remove();
  wypiszHaslo();
}

// funkcja losująca kategorie a następnie losująca z tej kategorii słowo
function getCatAndWord() {
  clickSound.play();
  let r = Math.floor(Math.random() * 4) + 1;
  getWord(r);
}

//      ^^^^^^ KOD OBSLUGUJACY WYBIERANIE TRYBU GRY ^^^^^^











//      vvvvvv KOD OBSLUGUJACY ROZGRYWKE vvvvvv

// Inicjalizacja tajnego słowa i zamiana go na duże litery
var haslo = "cos";
haslo = haslo.toUpperCase();

var sprawdzoneLitery = [];

// Inicjalizacja zmiennej do wyświetlania słowa z odgadniętymi literam
var haslo1 = "";

// Inicjalizacja zmiennych do śledzenia błędów, ruchów i stanu gry
var liczbaBledow = 0;
var liczbaRuchow = 0;
var gameOver = false;

// Inicjalizacja elementów audio dla różnych zdarzeń w grze
let gameOverSound = new Audio("sounds/gameover.wav");
let gameCompletedSound = new Audio("sounds/gamecompleted.wav");

// Licznik błędów

// Tablica liter
var litery = [];
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

// Funkcja wypisująca hasło na ekranie w formie kresek
function wypiszHaslo() {
  for (var i = 0; i < haslo.length; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
  }

  document.querySelector("#password").innerHTML = haslo1;
  document.querySelector("#graphic").innerHTML =
    '<img src="img/s' + liczbaBledow + '.jpg" alt="Stan gry">';

  wypiszLitery();
  document.querySelector("#licznik").innerHTML =
    "Liczba błędów: " + liczbaBledow + "/10";
}

// Funkcja wypisująca na ekranie alfabet
function wypiszLitery() {
  var tresc = "";

  for (var i = 0; i <= 34; i++) {
    tresc =
      tresc +
      '<div class="litera" id="lit' +
      i +
      '" onclick="sprawdz(' +
      i +
      ')">' +
      litery[i] +
      "</div>";
  }
  document.querySelector("#alphabet").innerHTML = tresc;
}

// Rozszerzenie prototypu String do zamiany znaku na danej pozycji
String.prototype.ustawZnak = function (miejsce, znak) {
  if (miejsce > this.length - 1) return this.toString;
  else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
};

var trafiona = false;

// Funkcja do sprawdzania czy kliknięta litera znajduje się w haśle
function sprawdz(nr) {
  if (gameOver == false) {
    clickSound.play();
    if (sprawdzoneLitery.includes(nr))
      alert("Litera " + litery[nr] + " została już sprawdzona!");
    else {
      liczbaRuchow++;
      for (var i = 0; i < haslo.length; i++) {
        if (haslo.charAt(i) == litery[nr]) {
          haslo1 = haslo1.ustawZnak(i, litery[nr]);
          var trafiona = true;
        }
      }

      sprawdzoneLitery.push(nr);

      console.log(sprawdzoneLitery);
      // Zmiana stylu przycisku litery w przypadku trafienia
      if (trafiona == true) {
        document.querySelector("#lit" + nr + "").style.background = "green";
        document.querySelector("#lit" + nr + "").style.cursor = "default";
      }

      // Zmiana stylu przycisku litery w przypadku BRAKU trafienia
      else {
        document.querySelector("#lit" + nr + "").style.background = "red";
        document.querySelector("#lit" + nr + "").style.cursor = "default";
        liczbaBledow++;
        document.querySelector("#graphic").innerHTML =
          '<img src="img/s' +
          liczbaBledow +
          '.jpg" alt="Stan gry:' +
          liczbaBledow +
          '">';
      }

      // PRZEGRANA
      if (liczbaBledow > 9) {
        gameOverSound.play();
        document.querySelector("#graphic").innerHTML = "Przegrana :(";
        haslo1 = " " + haslo;
        document
          .querySelector("#password")
          .setAttribute(
            "style",
            "text-decoration: underline; text-decoration-color: red"
          );
        gameOver = true;
      }

      // WYGRANA
      if (haslo1 == haslo) {
        gameCompletedSound.play();
        document.querySelector("#graphic").innerHTML =
          "Gratulacje! Udało Ci się wygrać w " + liczbaRuchow + " ruchach!";
        document
          .querySelector("#password")
          .setAttribute(
            "style",
            "text-decoration: underline; text-decoration-color: green"
          );

        gameOver = true;
      }

      document.querySelector("#password").innerHTML = haslo1;
      document.querySelector("#licznik").innerHTML =
        "Liczba błędów: " + liczbaBledow + "/10";
    }
  }
}
