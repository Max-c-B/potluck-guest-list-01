// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
// console.log(assignButton);
const assignedItem = document.querySelector(".assigned-items");
// console.log(assignedItem);

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
  }
  updateGuestCount();
});
const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "halloumi and melon skewers",
    "peach and prosciutto bruschetta",
    "veggie nori rolls",
    "tomato and mozzarella caprese skewers",
    "stuffed peppadews with parmesan and salami",
    "3 cheese tomato tart",
    "zuchinni noodles with tomatoes and corn",
    "sandwich for a crowd"
  ];

  let allGuests = document.querySelectorAll(".guest-list li");
  // console.log(allGuests);

  for (let guest of allGuests) {
    const randomPotLuckIndex = Math.floor(Math.random() * potluckItems.length);
    const randomPotLuckItem = potluckItems.splice(randomPotLuckIndex, 1);
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`;
    assignedItem.append(listItem);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
