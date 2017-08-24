alert("Welcome to NYC! How should we get to Galvanize?");

var howToGo = prompt("Please choose one of the following: Subway, Bus, Walk, or Car");

if (howToGo === "Subway" || howToGo === "subway") {
  alert("Good luck with that...");
  alert("Estimated journey length: 20 min to delayed indefinitely");
} else if (howToGo === "Bus" || howToGo === "bus") {
  alert ("Better not miss it");
  alert("Estimated journey length: 25-30 min");
} else if (howToGo === "Walk" || howToGo === "walk") {
  alert ("I was hoping you wouldn't say that...");
  alert("Estimated journey length: 30 min");
} else if (howToGo === "Car" || howToGo === "car") {
  alert ("Uber pool / Lyft Line FTW");
} else {
  alert ("Please choose a valid transportation option. What do you think this is... build your own adventure? This is NYC.")
}
