let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

// Load the saved counts from localStorage when the page loads
window.onload = function() {
    let savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
        saveEl.innerHTML += savedEntries;
    }
}

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";

    // Append the current count to the previous entries in the saveEl paragraph
    saveEl.innerHTML += countStr;
    
    // Save the current entries to localStorage
    localStorage.setItem("entries", saveEl.innerHTML);
    
    // Reset the counter
    countEl.textContent = 0;
    count = 0;
}

function clearEntries() {
    // Clear the displayed entries
    saveEl.innerHTML = "";
    
    // Clear the local storage
    localStorage.removeItem("entries");
}

