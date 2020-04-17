


var container = document.querySelector(".anime-container");

// note: All the particles are created before animation so to many slowed it down during tests

//Density of the spiran
var a = 20;
//length of the spiral
var l = 110;


// math for a "Archimedean spiral" (I guess)
for (var i = 0; i <= l; i += 1) {
  var angle = 0.1 * i;
  //shift the particles to the center of the window 
  //by adding half of the screen width and screen height
  var x = (a*angle) * Math.cos(angle) + window.innerWidth / 2;
  var y = (a*angle) * Math.sin(angle) + window.innerHeight / 2;

  var n = 15;
  
  
  for (var j = 0; j < n; j++) {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    container.appendChild(dot);
    //this helper method is from animejs -for altering the initial size of the particles a bit within this range
    var size = anime.random(5, 10);
   
    dot.style.width = size + "px";
    dot.style.height = size + "px";

        //this helper method is from animejs -for altering the initial position of the particles a bit within this range

    dot.style.left = x + anime.random(-15, 15) + "px";
    dot.style.top = y + anime.random(-15, 15) + "px";
    //invisible before start    
    dot.style.opacity = "0";
  
  }
}

anime({
  loop: true,
  easing: "linear",
  // as soon as created

 //What is anime.stagger doing? it is incresing the delay by *ms per element 

  opacity: [
    { value: 1, duration: 50, delay: anime.stagger(2) },
    { value: 0, duration: function(){return anime.random(500,1500);}}
  ],
  width: { value: 2, duration: 500, delay: anime.stagger(2) },
  height: { value: 2, duration: 500, delay: anime.stagger(2) },
  //this is cool - target based on class
  targets: document.querySelectorAll(".dot"),
 
  translateX: {
    value: function() {
      return anime.random(-30, 30);
    },
    duration: 1500,
    delay: anime.stagger(2)
  },
  translateY: {
    value: function() {
      return anime.random(-30, 30);
    },
    duration: 1500,
    delay: anime.stagger(2)
  }
});