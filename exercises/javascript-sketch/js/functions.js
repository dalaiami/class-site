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
    var x = window.matchMedia("(max-width: 420px)")
