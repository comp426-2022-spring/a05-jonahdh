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

  var active = Buttons.Home;

  // When a button is clicked, hide the current div and show the clicked div
  function navButton(div) {
    clearCurrentDiv();
    showDiv(div);
    console.log("Active div: " + active);
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
homenav.addEventListener("click", () => console.log("HOME BUTTON CLICKED!"));

singlenav.addEventListener("click", () => navButton(Buttons.Single));
singlenav.addEventListener("click", () => console.log("NAV BUTTON CLICKED!"));

multinav.addEventListener("click", () => navButton(Buttons.Multi));

guessnav.addEventListener("click", () => navButton(Buttons.Guess));