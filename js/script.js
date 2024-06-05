document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Say Hello";
    button.style.display = "block";
    button.style.margin = "1em auto";
    
    document.querySelector(".about-me").appendChild(button);

    button.addEventListener("click", function() {
        alert("Hello! Thank you for visiting my About Me page!");
    });

    includeHTML();
});

function includeHTML() {
    const elements = document.querySelectorAll("[w3-include-html]");
    elements.forEach(function(el) {
        const file = el.getAttribute("w3-include-html");
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute("w3-include-html");
                    includeHTML();
                })
                .catch(error => console.error('Error fetching include file:', error));
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
    showSlides();

    const playButton = document.getElementById("play-music");
    const pauseButton = document.getElementById("pause-music");
    const music = document.getElementById("background-music");

    playButton.addEventListener("click", function() {
        music.play();
    });

    pauseButton.addEventListener("click", function() {
        music.pause();
    });
});

function includeHTML() {
    const elements = document.querySelectorAll("[w3-include-html]");
    elements.forEach(function(el) {
        const file = el.getAttribute("w3-include-html");
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute("w3-include-html");
                    includeHTML();
                })
                .catch(error => console.error('Error fetching include file:', error));
        }
    });
}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

