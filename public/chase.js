// get Ducky from HTML
const ducky = document.getElementById("Ducky");
// get movement buttons from HTML
const btnClick = document.getElementById("btn-click")
const btnFollow = document.getElementById("btn-follow")
const btnStop = document.getElementById("btn-stop")
const btnToggle = document.getElementById("btn-toggle")
// set the movement mode to default
let duckyMode = "follow"
// set the ducky coordinates
let duckyX = window.innerWidth / 2;
let duckyY = window.innerHeight / 2;

// dom elements needed for the bread game
const num404 = document.getElementById("num404") // the 404
// base64 string for a bread image
const bread = "data:image/png;base64,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"

let spawningBread = true // start by spawning bread
let breadSpawner = setInterval(spawnBread, 2000)

// toggle buttons
btnClick.addEventListener("click", (event) => {
    // this stops event bubbling (limits the click to this element, click doesent reach underneath)
    event.stopPropagation();

    // update button classes
    btnClick.classList.add("active");
    btnFollow.classList.remove("active");
    btnStop.classList.remove("active");

    // check if the ducky was on stop mode before this event
    const wasStopped = (duckyMode === "stop")

    // set duckyMode
    duckyMode = "click";
    if (!spawningBread){
        spawningBread = !spawningBread
    }

    if (wasStopped) {
        updateDucky();
    }
});

btnFollow.addEventListener("click", (event) => {
    // this stops event bubbling (limits the click to this element, click doesent reach underneath)
    event.stopPropagation();

    // update button classes
    btnFollow.classList.add("active");
    btnClick.classList.remove("active");
    btnStop.classList.remove("active");

    // check if the ducky was on stop mode before this event
    const wasStopped = (duckyMode === "stop")

    // set duckyMode
    duckyMode = "follow";
    if (!spawningBread){
        spawningBread = !spawningBread
    }


    if (wasStopped) {
        updateDucky();
    }
});

btnStop.addEventListener("click", (event) => {
    // this stops event bubbling (limits the click to this element, click doesent reach underneath)
    event.stopPropagation();

    // update button classes
    btnStop.classList.add("active");
    btnClick.classList.remove("active")
    btnFollow.classList.remove("active")

    // calculates the center of the screen
    duckyX = window.innerWidth / 2;
    duckyY = window.innerHeight / 2;

    // update css before killing the animation loop
    ducky.style.left = duckyX + "px";
    ducky.style.top = duckyY + "px";

    // set duckyMode
    duckyMode = "stop"
    if(spawningBread) {
        spawningBread = !spawningBread
    }
})

btnToggle.addEventListener("click", (event) => {
    // this stops event bubbling (limits the click to this element, click doesent reach underneath)
    event.stopPropagation();

    // Check if Ducky is currently hidden
    if (ducky.style.opacity === "0") {
        // if hidden, show ducky
        ducky.style.opacity = "1";
        btnToggle.textContent = "Hide Ducky";
        btnToggle.classList.remove("active");

        // Re-enable the movement buttons
        btnClick.disabled = false;
        btnFollow.disabled = false;
        btnStop.disabled = false;

    } else {
        // if not hidden, hide him
        ducky.style.opacity = "0";
        btnToggle.textContent = "Show Ducky";
        btnToggle.classList.add("active");

        // Force Ducky into "stop" mode so he doesn't move while invisible
        duckyMode = "stop";
        if(spawningBread) {
            spawningBread = !spawningBread
        }

        // Update the button visuals to reflect that he is stopped
        btnStop.classList.add("active");
        btnClick.classList.remove("active");
        btnFollow.classList.remove("active");

        // Disable the movement buttons so they cannot be clicked
        btnClick.disabled = true;
        btnFollow.disabled = true;
        btnStop.disabled = true;

        setTimeout(() => {
            // Temporarily turn off his movement transition
            ducky.style.transition = "none";

            // Calculate the center and teleport him instantly
            duckyX = window.innerWidth / 2;
            duckyY = window.innerHeight / 2;
            ducky.style.left = duckyX + "px";
            ducky.style.top = duckyY + "px";

            // Wait a tiny fraction of a second for the browser to register the move,
            // then remove the "none" so he gets his smooth CSS transitions back
            setTimeout(() => {
                ducky.style.transition = "";
            }, 50);

        }, 300);
    }
})

// movement logic

// event listener for clicks
document.addEventListener("click", (event) => {
    if (event.target.closest("#ModeDuck")) { // if click was on the div with the buttons stop updating the coordinates
        return;
    }
    if (duckyMode === "click") { // update ducky coordinates according to event position and duckyMode
        duckyX = event.clientX;
        duckyY = event.clientY;
    }
})

// event listener for mouse move
document.addEventListener("mousemove", (event) => {
    if (event.target.closest("#ModeDuck")) { // if mouse move was on the div with the buttons stop updating the coordinates
        return;
    }
    if (duckyMode === "follow") { // update ducky coordinates according to event position and duckyMode
        duckyX = event.clientX;
        duckyY = event.clientY;
    }
})

// update the duck's position every frame
function updateDucky() {
    if (duckyMode === "follow") {
        // updates css coordinates
        ducky.style.left = duckyX + "px";
        ducky.style.top = duckyY + "px";
        checkCollision()
    }
    else if (duckyMode === "click") {
        // updates css coordinates
        ducky.style.left = duckyX + "px";
        ducky.style.top = duckyY + "px";
        checkCollision()
    }

    if (duckyMode !== "stop") {
        requestAnimationFrame(updateDucky);
    }
}
// run the loop when the page first loads
updateDucky();

document.addEventListener("DOMContentLoaded", function () {

    const settingsBtn = document.getElementById("settings");
    const settingsMenu = document.getElementById("settings-menu");
    const darkModeToggle = document.getElementById("dark-mode-toggle");


    if (settingsBtn && settingsMenu) {
        settingsBtn.addEventListener("click", function (event) {
            settingsMenu.classList.toggle("show");
            event.stopPropagation(); // Εμποδίζει το κλείσιμο την ώρα που το ανοίγεις
        });


        window.addEventListener("click", function (event) {
            if (!settingsMenu.contains(event.target) && event.target !== settingsBtn) {
                settingsMenu.classList.remove('show');
            }
        });
    }


    if (darkModeToggle) {

        const savedTheme = localStorage.getItem("userTheme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            darkModeToggle.checked = true;
        }


        darkModeToggle.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-theme");
                localStorage.setItem("userTheme", "dark");
            } else {
                document.body.classList.remove("dark-theme");
                localStorage.setItem("userTheme", "light");
            }
        });
    }
});

// this function is responsible for spawning the bread
function spawnBread() {
    
    if(!spawningBread){
        return
    }

    // this will be the bread
    const img = document.createElement('img');

    img.src = bread

    img.style.position = 'absolute';
    img.style.width = '50px';
    img.className = "bread";

    // making sure it does not spawn outside of the screen
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    // putting the bread in the screen and making it despawn smoothly
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transition = 'opacity 0.5s ease';

    // appending it to the page
    document.body.appendChild(img);

    // this is how often they will despawn. it is set for 2,5 seconds
    setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => img.remove(), 500);
    }, 2500);
}

// this function handles the ducky eating the bread
function checkCollision() {
    // giving the ducky a hitbox
    const duckyHitbox = ducky.getBoundingClientRect();

    // the 404 serves as a counter for how many breads have been eaten
    let counter = num404.innerText

    // getting all the bread elements
    const allBread = document.querySelectorAll(".bread")

    allBread.forEach(bread => {
        // each bread gets a hitbox
        const breadRect = bread.getBoundingClientRect();

        // we check if the ducky is touching the bread
        const isTouching = !(
            duckyHitbox.right < breadRect.left ||
            duckyHitbox.left > breadRect.right ||
            duckyHitbox.bottom < breadRect.top ||
            duckyHitbox.top > breadRect.bottom
        );

        // if it is touchinng, the counter drops
        if (isTouching) {
            eatBread(bread);
            console.log("he eated the bread")
            counter -= 1
            num404.innerHTML = String(counter)
        }
    });
}

// this just removes the bread from the document
function eatBread(breadElement){
    breadElement.remove()

}