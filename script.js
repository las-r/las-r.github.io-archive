// Constants
const darkModeToggle = document.getElementById("darkMode");
const links = document.getElementsByTagName("a");

// Variables
let isDarkMode = true;

let scrollStyle = document.createElement("style");
scrollStyle.rel = "stylesheet";
document.head.appendChild(scrollStyle); // Append the style element to the head

// Check for saved dark mode preference on page load
window.onload = function() {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "false") {
        isDarkMode = false;
        disableDarkMode();
    } else {
        enableDarkMode(); // Set initial state correctly
    }
}

// Dark mode function
function darkMode() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        enableDarkMode();
        localStorage.setItem("darkMode", "true");
    } else {
        disableDarkMode();
        localStorage.setItem("darkMode", "false");
    }
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "lightgrey";
    }

    scrollStyle.innerHTML = `
        ::-webkit-scrollbar-thumb {
            background: #111
        }
    `;

    darkModeToggle.textContent = "light mode";
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "grey";
    }

    scrollStyle.innerHTML = `
        ::-webkit-scrollbar-thumb {
            background: #ddd;
        }
    `;

    darkModeToggle.textContent = "dark mode";
}