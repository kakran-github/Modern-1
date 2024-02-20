var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // Handle midnight (0 hours)

// Add leading zeros if necessary
// hours = (hours < 10) ? '0' + hours : hours;
minutes = (minutes < 10) ? '0' + minutes : minutes;

var timeString = hours + ':' + minutes + ' ' + ampm + ' EST'; // Construct time string
document.getElementById("time").innerHTML = timeString; // Display time

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});