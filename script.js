function toggleShift(button) {
    if (button.classList.contains('red')) {
        button.classList.remove('red');
        button.classList.add('green');
        button.textContent = "On";
    } else {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = "Off";
    }
}

function exportToExcel() {
    alert("Export to XLSX functionality is not implemented.");
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
}

function openAssignPopup(button) {
    const popup = document.getElementById('assign-popup');
    const overlay = document.getElementById('assign-popup-overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closeAssignPopup() {
    const popup = document.getElementById('assign-popup');
    const overlay = document.getElementById('assign-popup-overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

function toggleStatus(button) {
    if (button.textContent === "Pending") {
        button.textContent = "Completed";
        button.classList.remove('red');
        button.classList.add('green');
    } else {
        button.textContent = "Pending";
        button.classList.remove('green');
        button.classList.add('red');
    }
}

function openNotesPopup(button) {
    alert("Open notes functionality is not implemented.");
}