document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle shift times
    function toggleShift(button, employee) {
        if (button.classList.contains('red')) {
            button.classList.remove('red');
            button.classList.add('green');
            if (employee === 'Harsh' || employee === 'Geddy') {
                button.textContent = '8:00';
            } else {
                button.textContent = '9:00';
            }
        } else if (button.classList.contains('green')) {
            button.classList.remove('green');
            button.classList.add('red');
            button.textContent = 'Off';
        } else {
            openPopup(button);
        }
    }

    // Function to open the popup to change the shift time
    function openPopup(button) {
        const popupOverlay = document.getElementById('popup-overlay');
        const popup = document.getElementById('popup');
        popupOverlay.style.display = 'block';
        popup.style.display = 'block';

        const shiftForm = document.getElementById('shift-form');
        shiftForm.onsubmit = function (e) {
            e.preventDefault();
            const startTime = document.getElementById('start-time').value;
            button.textContent = startTime;
            button.classList.remove('red');
            button.classList.add('green');
            closePopup();
        };
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById('popup-overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
        document.getElementById('shift-form').reset();
    }

    // Function to export timetable to Excel
    function exportToExcel() {
        const table = document.getElementById('timetable');
        const workbook = XLSX.utils.table_to_book(table);
        XLSX.writeFile(workbook, 'timetable.xlsx');
    }

    // Function to toggle task status
    function toggleStatus(button) {
        if (button.classList.contains('red')) {
            button.classList.remove('red');
            button.classList.add('green');
            button.textContent = 'Completed';
        } else {
            button.classList.remove('green');
            button.classList.add('red');
            button.textContent = 'Pending';
        }
    }

    // Function to open the Assign To popup
    function openAssignPopup(button) {
        const assignPopupOverlay = document.getElementById('assign-popup-overlay');
        const assignPopup = document.getElementById('assign-popup');
        assignPopupOverlay.style.display = 'block';
        assignPopup.style.display = 'block';

        const assignForm = document.getElementById('assign-form');
        assignForm.onsubmit = function (e) {
            e.preventDefault();
            const assignName = document.getElementById('assign-name').value;
            button.textContent = assignName;
            button.classList.remove('red');
            button.classList.add('green');
            closeAssignPopup();
        };
    }

    // Function to close the Assign To popup
    function closeAssignPopup() {
        document.getElementById('assign-popup-overlay').style.display = 'none';
        document.getElementById('assign-popup').style.display = 'none';
        document.getElementById('assign-form').reset();
    }

    // Function to open the Notes popup
    function openNotesPopup(button) {
        const notesPopupOverlay = document.getElementById('notes-popup-overlay');
        const notesPopup = document.getElementById('notes-popup');
        notesPopupOverlay.style.display = 'block';
        notesPopup.style.display = 'block';

        const notesForm = document.getElementById('notes-form');
        notesForm.onsubmit = function (e) {
            e.preventDefault();
            const notes = document.getElementById('notes').value;
            button.textContent = notes;
            closeNotesPopup();
        };
    }

    // Function to close the Notes popup
    function closeNotesPopup() {
        document.getElementById('notes-popup-overlay').style.display = 'none';
        document.getElementById('notes-popup').style.display = 'none';
        document.getElementById('notes-form').reset();
    }

    // Add event listeners to the shift buttons
    document.querySelectorAll('#timetable .btn').forEach(button => {
        const parentRow = button.closest('tr');
        const employee = parentRow.querySelector('td:first-child').textContent;

        button.addEventListener('click', () => toggleShift(button, employee));
    });

    // Export to Excel button
    document.querySelector('button[onclick="exportToExcel()"]').addEventListener('click', exportToExcel);

    // Add event listeners to the status buttons
    document.querySelectorAll('#task-table .btn.red').forEach(button => {
        button.addEventListener('click', () => toggleStatus(button));
    });

    // Add event listeners to the assign buttons
    document.querySelectorAll('#task-table .btn[onclick^="openAssignPopup"]').forEach(button => {
        button.addEventListener('click', () => openAssignPopup(button));
    });

    // Add event listeners to the notes buttons
    document.querySelectorAll('#task-table .btn[onclick^="openNotesPopup"]').forEach(button => {
        button.addEventListener('click', () => openNotesPopup(button));
    });

    // Close popup buttons
    document.querySelector('#popup button[type="button"]').addEventListener('click', closePopup);
    document.querySelector('#assign-popup button[type="button"]').addEventListener('click', closeAssignPopup);
    document.querySelector('#notes-popup button[type="button"]').addEventListener('click', closeNotesPopup);
});