// 1. Adding real time
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
  
  // Convert hours to 12-hour format
  hours = hours % 12;
  // hours = hours ? hours : 12; // Handle midnight (0 hours)
  
  // Add leading zeros if necessary
  // hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  
  var timeString = hours + ':' + minutes + ' ' + ampm + ' EST'; // Construct time string
  document.getElementById("time").innerHTML = timeString; // Display time

// 2. Adding smooth scroll to main    
  const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
  });

// 3. Making moving minicursor
   var crsr=document.querySelector("#minicircle");

// window.addEventListener("mousemove",function(dets){
//         crsr.style.left=dets.x+"px";
//         crsr.style.top=dets.y+"px";
// });

// or

   function mousefollower(){
       window.addEventListener("mousemove",function(dets){
           crsr.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
       })
   }
   mousefollower()

// 4. 