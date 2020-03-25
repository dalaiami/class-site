function toggle() {
    var element = document.getElementById("box");
    element.classList.toggle("open");
    }

    // $('.marquee').marquee({
    // 	duration: 8000,
    // 	gap: 50,
    // 	delayBeforeStart: 0,
    // 	direction: 'right',
    // 	duplicated: false
    // });

    function setup() {
      createCanvas(1440, 790);
      background(255, 255, 255);
    }

    function draw() {
      stroke(255, 255, 0);
      strokeWeight(60);
      if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }

// Responsive

    function setup(x) {
      if (x.matches) { // If media query matches
        createCanvas(500, 701);
      } else {
        createCanvas(1440, 790);
      }
    }

    var x = window.matchMedia("(max-width: 420px)")
    mySetup(x) // Call listener function at run time
    x.addListener(mySetup) // Attach listener function on state changes

    function draw(x) {
      if (x.matches) { // If media query matches
        strokeWeight(10);
      } else {
        strokeWeight(60);
      }
    }

    var x = window.matchMedia("(max-width: 420px)")
    myDraw(x) // Call listener function at run time
    x.addListener(myDraw) // Attach listener function on state changes
