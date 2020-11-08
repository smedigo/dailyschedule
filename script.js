// Get the current hour of the day using moment.js

// Option 1
var currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDay = moment().format("D");
var currentHour = moment().format("H");
console.log(currentHour)
console.log(currentDay)
console.log(currentDateTime)

$("#currentDay").text(currentDateTime)

//FOR Loop over the hours of the day from i=9 to i<== 17

// for (var i=9; i<17; i++) {
// }
        if (9 < currentHour){
            $("#9a").addClass("past")
        }
        else if (9 == currentHour){
            $("#9a").addClass("present")
        }
        else if (9 > currentHour){
            $("#9a").addClass("future")
        }

        // if statements for row 10am
        if (10 < currentHour){
            $("#10a").addClass("past")
        }
        else if (10 == currentHour){
            $("#10a").addClass("present")
        }
        else if (10 > currentHour){
            $("#10a").addClass("future")
        }
        // if statements for row 11am
        if (11 < currentHour){
            $("#11a").addClass("past")
        }
        else if (11 == currentHour){
            $("#11a").addClass("present")
        }
        else if (11 > currentHour){
            $("#11a").addClass("future")
        }
        // if statements for row 12pm
        if (12 < currentHour){
            $("#12p").addClass("past")
        }
        else if (12 == currentHour){
            $("#12p").addClass("present")
        }
        else if (12 > currentHour){
            $("#12p").addClass("future")
        }

        if (1 < currentHour){
            $("#1p").addClass("past")
        }
        else if (1 == currentHour){
            $("#1p").addClass("present")
        }
        else if (12 > currentHour){
            $("#1p").addClass("future")
        }

        if (2 < currentHour){
            $("#2p").addClass("past")
        }
        else if (2 == currentHour){
            $("#2p").addClass("present")
        }
        else if (2 > currentHour){
            $("#12p").addClass("future")
        }

        if (3 < currentHour){
            $("#3p").addClass("past")
        }
        else if (3 == currentHour){
            $("#3p").addClass("present")
        }
        else if (3 > currentHour){
            $("#3p").addClass("future")
        } 

        if (4 < currentHour){
            $("#4p").addClass("past")
        }
        else if (4 == currentHour){
            $("#4p").addClass("present")
        }
        else if (4 > currentHour){
            $("#4p").addClass("future")
        }

        if (5 < currentHour){
            $("#5p").addClass("past")
        }
        else if (5 == currentHour){
            $("#5p").addClass("present")
        }
        else if (5 > currentHour){
            $("#5p").addClass("future")
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