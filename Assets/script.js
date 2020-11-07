// Get the current hour of the day using moment.js
var currentMoment = moment();
var data = currentMoment. format();

// Option 1
var currentHourOne= parseInt(moment().format("H"));

// Option 2
var currentHourTwo = currentMoment.hour();

//FOR Loop over the hours of the day from i=9 to i<== 17

for (var i=9; i<; i++) {
    
}

// var = 9
// Element ID ="#hour-" =i;
// Currently checking 9am < current hour
//9am is in the past

// Option A -Select matching element - $(Element ID).css("background");

// Option B -Select matching element - $(Element ID).css("background");

// Add a click event ON A PARENT ELEMENT  that can listen to my save button clicks

// WHEN the user clicks a save button
//THEN I need to save the associated text for the associated hour

//GET the current hour for the 'event.target' (the clicked button)

// < var theClicked Hour = $(event.target).data("hour")  //got the number 9

// > var $(event.target).prev()   // got the text

// localStorage.setItem("scheduler-hour-" + theClickedValue, value)