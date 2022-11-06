// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button

const Buttons = {
    Home: "home",
    Single: "single",
    Multi: "multi",
    Guess: "guess"
  };

  var active = Buttons.Multi;
  document.getElementById(active).style.display = "block";

  // When a button is clicked, hide the current div and show the clicked div
  function navButton(div) {
    clearCurrentDiv();
    showDiv(div);
  }

  // Take the current div and hide it
  function clearCurrentDiv() {
    document.getElementById(active).style.display = "none";
  }

  function showDiv(div) {
    active = div;
    document.getElementById(active).style.display = "block";
  };


const homenav = document.getElementById("homenav");
const singlenav = document.getElementById("singlenav");
const multinav = document.getElementById("multinav");
const guessnav = document.getElementById("guessnav");

homenav.addEventListener("click", () => navButton(Buttons.Home));

singlenav.addEventListener("click", () => navButton(Buttons.Single));

multinav.addEventListener("click", () => navButton(Buttons.Multi));

guessnav.addEventListener("click", () => navButton(Buttons.Guess));

// Start for single flip calls:

const singleflipButton = document.getElementById("singleflip");
const coinpic = document.getElementById("coinpic");
const value = document.getElementById("value");

singleflipButton.addEventListener("click", flipcoin);
function flipcoin() {
  fetch('http://localhost:3000/app/flip/', {mode: 'cors'})
  .then(response => {return response.json()})
  .then(result => {
    if (result.flip === 'heads') {
      coinpic.src = 'assets/img/heads.png';
      value.textContent = "Heads!"
    }
    else {
      coinpic.src = 'assets/img/tails.png';
      value.textContent = "Tails!"
    }
  });
  
  //.then(result => console.log(result))
}

// Scripting for multiguess - taken from w11
const coins = document.getElementById("coins")
			// Add event listener for coins form
			coins.addEventListener("submit", flipCoins)
			// Create the submit handler
			async function flipCoins(event) {
				event.preventDefault();
				
				const endpoint = "app/flip/coins/"
				const url = document.baseURI+endpoint

				const formEvent = event.currentTarget

				try {
					const formData = new FormData(formEvent);
					const flips = await sendFlips({ url, formData });

					console.log(flips);
					document.getElementById("heads").innerHTML = "Heads: "+flips.summary.heads;
					document.getElementById("tails").innerHTML = "Tails: "+flips.summary.tails;
				} catch (error) {
					console.log(error);
				}
			}
			// Create a data sender
			async function sendFlips({ url, formData }) {
				const plainFormData = Object.fromEntries(formData.entries());
				const formDataJson = JSON.stringify(plainFormData);
				console.log(formDataJson);

				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					},
					body: formDataJson
				};

				const response = await fetch(url, options);
				return response.json()
			}