const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
const modeLabel = document.getElementById('mode-label');
const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');
const shoppingBag = document.getElementById('shopping-bag'); // Reference to shopping bag image

// Function to set dark mode or light mode
function setMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        modeLabel.textContent = "Dark Mode";
        toggleSwitch.checked = true; // Ensure the switch stays in dark mode position
        logo.src = "./images/lightlogoo.png"; // Dark version of logo
        logo2.src = "/images/light.png"; // Dark version of logo 2
        shoppingBag.src = "/images/lightbag.png"; // Dark version of shopping bag
    } else {
        document.body.classList.remove('dark-mode');
        modeLabel.textContent = "Light Mode";
        toggleSwitch.checked = false; // Ensure the switch stays in light mode position
        logo.src = "/images/logo.png"; // Light version of logo
        logo2.src = "/images/logo2.png"; // Light version of logo 2
        shoppingBag.src = "/images/shoping.png"; // Light version of shopping bag
    }
}

// Load the saved mode from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode') || 'light'; // Default to light mode
    setMode(savedMode);
});

// Add event listener for the toggle switch
toggleSwitch.addEventListener('change', function() {
    const mode = toggleSwitch.checked ? 'dark' : 'light';
    setMode(mode);

    // Save the selected mode to localStorage
    localStorage.setItem('mode', mode);
});


