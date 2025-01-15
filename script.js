// Global array
const lunches = [];

// Functions
function addLunchToEnd(lunch) {
  lunches.push(lunch);
  return `${lunch} added to the end of the lunch menu.`;
}

function addLunchToStart(lunch) {
  lunches.unshift(lunch);
  return `${lunch} added to the start of the lunch menu.`;
}

function removeLastLunch(lunch) {
  if (lunches.length == 0) {
    return `No lunches to remove.`;
  } else {
    const lunchItemRemoved = lunches.pop();
  return `${lunchItemRemoved} removed from the end of the lunch menu.`;

  }
  
}

function removeFirstLunch(lunch) {
  if (lunches.length == 0) {
    return `No lunches to remove.`;
  } else {
    const lunchItemRemoved = lunches.shift();
    return `${lunchItemRemoved} removed from the start of the lunch menu.`;
  }
}

function getRandomLunch() {
  if (lunches.length == 0) {
    return `No lunches available.`;
  }
  const randomIndex = Math.floor(Math.random() * lunches.length);
  const lunchItem = lunches[randomIndex];
  return `Randomly selected lunch: ${lunchItem}`;
}

function showLunchMenu() {
  if (lunches.length == 0) {
    return `The menu is empty.`;
  } else {
    return "Menu items: " + lunches.join(", ");
  }
}

addLunchToEnd("Greens");
addLunchToEnd("Corns");
addLunchToEnd("Beans");
console.log(lunches);
console.log(showLunchMenu());
