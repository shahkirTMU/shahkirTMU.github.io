// Enlarge text size
document.getElementById("increaseTextSize").addEventListener("click", function() {
    document.body.style.fontSize = "larger";
});

// Toggle color scheme
document.getElementById("toggleColors").addEventListener("click", function() {
    document.body.classList.toggle("alt-colors");
});

// Display alt text for images
document.getElementById("showAltText").addEventListener("click", function() {
    const images = document.querySelectorAll(".gallery img"); // Select all images within .gallery
    images.forEach(img => {
        alert(img.alt);
    });
});