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

// 3. Circle Chapta
  function CircleChapta(){
   var crsr2=document.querySelector("#minicircle");

    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    var timeout=null;
    window.addEventListener("mousemove",function(dets){
      clearTimeout(timeout);

      xdiff=dets.clientX-xprev;
      ydiff=dets.clientY-yprev;

      xscale=gsap.utils.clamp(0.8,1.2,xdiff);
      yscale=gsap.utils.clamp(0.8,1.2,ydiff);

      xprev=dets.clientX;
      yprev=dets.clientY;

      mousefollower(xscale,yscale);

      timeout=setTimeout(function(){
        crsr2.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
      },100);
    })

    
  }
  CircleChapta();

// 4. Making moving minicursor
   var crsr=document.querySelector("#minicircle");

// window.addEventListener("mousemove",function(dets){
//         crsr.style.left=dets.x+"px";
//         crsr.style.top=dets.y+"px";
// });

// or

   function mousefollower(xscale,yscale){
       window.addEventListener("mousemove",function(dets){
           crsr.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
       })
   }

   mousefollower();

// 5. Gsap Timeline

   function firstpageanimation(){
    var tl=gsap.timeline();
  
    tl.to(".boundingelem",{
      y:0,
      ease:Expo.easeInOut,
      duration:2,
      stagger:.2
    })
    tl.to(".boundingelemdown",{
      y:0,
      ease:Expo.easeInOut,
      duration:2,
      stagger:.2
    },"-=1.5")
    //delay negative me also you can give instead of =-1.5
    tl.from(".bottom-page1",{
      opacity:0,
      duration:1.5,
      ease:Expo.easeInOut,
    },"-=1.3")
   }
   firstpageanimation(); 

