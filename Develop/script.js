// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Variable Declarations at top
var userInputEl = $(".description"); //will use for capturing the value the user inputs into the time blocks
var displayDate = $("#currentDay"); //used for displaying the date in the header
var saveButton = $(".saveBtn");

// function currentDate() {
//   displayDate.text(dayjs().format("dddd MMM, DD"));
// }

// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   //function eventToStorage
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   //function
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
// });

function currentDate() {
  displayDate.text(dayjs().format("dddd MMM, DD"));
}
//once the function to handle the submission of an event is complete, it will call this function to take the event saved and turn it into a JSON object so localStorage can display it.

function readEventsFromStorage() {
  var events = localStorage.getItem("events");
  //need to add code that will 'parse' the item from local storage back into a js object that the user can read.
}

function saveEventsToStorage(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

function printEventData() {
  userInputEl = empty();
  var events = readEventsFromStorage();
}

function handleEventsSubmit(event) {
  event.preventDefault();
  //input code to capture values user inputs in the time blocks
  //at bottom of function, set up code to add event to localStorage, print the event to the page, and clear the value once event is complete(?).
}

saveButton.click(function (event) {
  //need to change this to saveButton.on("click", (function name)) once the function to capture the values (.val()) is created.
  event.preventDefault();
  alert("it works");
});

saveButton.on("click");
currentDate();
