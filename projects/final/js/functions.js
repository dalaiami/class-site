function menutoggle() {
    var element = document.getElementById("menu");
    element.classList.toggle("menu-open");
    }

function abouttoggle() {
    var element = document.getElementById("about");
    element.classList.toggle("about-open");
    }

function worktoggle() {
    var element = document.getElementById("work");
    element.classList.toggle("work-open");
    }

function playtoggle() {
    var element = document.getElementById("play");
    element.classList.toggle("play-open");
    }

function contacttoggle() {
    var element = document.getElementById("contact");
    element.classList.toggle("contact-open");
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
      strokeWeight(80);
      if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }

// Responsive
    var x = window.matchMedia("(max-width: 420px)")
