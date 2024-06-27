// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buttonproject");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the content area and buttons
var modalButtons = document.getElementById("modalButtons");
var modalContent = document.getElementById("modalContent");
var contentArea = document.getElementById("contentArea");
var backBtn = document.getElementById("backBtn");

// Event listener to open the modal
btn.onclick = function(event) {
    event.preventDefault(); // Prevent the default action
    modal.style.display = "block";
}

// Event listener to close the modal
span.onclick = function() {
    modal.style.display = "none";
    resetModal();
}

// Event listener to close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetModal();
    }
}

// Event listeners for Advance Web Development and Simple Pages buttons
document.getElementById("advWebDevBtn").onclick = function() {
    showContent('advance');
}

document.getElementById("simplePagesBtn").onclick = function() {
    showContent('simple');
}

// Event listener for back button
backBtn.onclick = function() {
    resetModal();
}

// Function to show content based on the button clicked
function showContent(type) {
    modalButtons.style.display = "none";
    modalContent.style.display = "block";

    if (type === 'advance') {
        contentArea.innerHTML = `
            <h2>Advance Web Development</h2>
            <div class="card">
                <img src="./" alt="Advance Project 1">
                <h3>Project 1</h3>
                <p>Description of advance project 1...</p>
            </div>
            <div class="card">
                <img src="path/to/advance2.jpg" alt="Advance Project 2">
                <h3>Project 2</h3>
                <p>Description of advance project 2...</p>
            </div>
            <div class="card">
                <img src="path/to/advance3.jpg" alt="Advance Project 3">
                <h3>Project 3</h3>
                <p>Description of advance project 3...</p>
            </div>
        `;
    } else if (type === 'simple') {
        contentArea.innerHTML = `
            <h2>Simple Pages</h2>
            <p>Details about simple pages projects...</p>
            <img src="path/to/simple-image.jpg" alt="Simple Pages">
        `;
    }
}

// Function to reset the modal to initial state
function resetModal() {
    modalButtons.style.display = "block";
    modalContent.style.display = "none";
    contentArea.innerHTML = "";
}
