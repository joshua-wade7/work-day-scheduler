// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Variable Declarations at top
var userInputEl = $(".description"); //will use for capturing the value the user inputs into the time blocks
var displayDate = $("#currentDay"); //used for displaying the date in the header
var saveButton = $(".saveBtn");
var events;
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
  var currentTime = dayjs().format("dddd MMM, DD");
  displayDate.text(currentTime);
}
//once the function to handle the submission of an event is complete, it will call this function to take the event saved and turn it into a JSON object so localStorage can display it.

function readEventsFromStorage() {
  //call on page load
  var tempEvents = localStorage.getItem("events");
  if (tempEvents) {
    events = JSON.parse(tempEvents);
  } else {
    events = {};
  }
  //need to add code that will 'parse' the item from local storage back into a js object that the user can read.
}

function saveEventsToStorage() {
  localStorage.setItem("events", JSON.stringify(events));
}

function printEventData() {
  // userInputEl = empty();
  // var events = readEventsFromStorage();
  //
  //determine hour of the day (9-17)
  //figure out what current hour you are in
  for (var i = 9; i < 18; i++);
  {
    $("#hour-" + i).addClass();
  }
  //within for loop, if statement
  //loop through our html blocks
  //in the loop, determine if the block is past, present, or future and apply the class.
  //populate textarea from events variable.
}

// function handleEventDelete() {
//   //I don't believe this is needed but want to ask before writing it off.
// }

// function handleEventsSubmit(event) { //Unnecessary because of the saveButton event listener.
//   event.preventDefault();
//   //input code to capture values user inputs in the time blocks
//   var userInput = userInputEl.val().trim();
//   // how do we target the specific id's in the dom for each time block, to capture just that time-blocks value when save button is clicked?
//   //at bottom of function, set up code to add event to localStorage, print the event to the page, and clear the value once event is complete(?).
// }

saveButton.click(function (event) {
  //need to change this to saveButton.on("click", handleEventSubmit) once the function to capture the values (.val()) is created.
  event.preventDefault();
  var timeEl = $(event.target).attr("data-time");
  var textArea = $("#" + timeEl).val();
  events[timeEl] = textArea;
  saveEventsToStorage();
  // console.log(textArea);
  // alert("it works");
});

saveButton.on("click");
readEventsFromStorage();
currentDate();
// printEventData();
