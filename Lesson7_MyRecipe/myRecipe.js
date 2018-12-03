/*
Program Name: Recipe Display Application 
Author: Jonathan Poteet
Date: 12/2/2018
Filename:script.js
*/
/* global$*/

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
    $(this).css("background-color", "orange");
}
//end of display
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

$("div").last().after("<center>Enjoy!!!</center>");
