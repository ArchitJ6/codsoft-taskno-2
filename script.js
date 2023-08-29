var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

function pressed() {
    navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(progressBar => {
        const progressValueElement = progressBar.querySelector(".progress-value");
        const value = parseFloat(progressValueElement.getAttribute("data-value"));
        progressBar.style.setProperty("--value", value);
    });
});
