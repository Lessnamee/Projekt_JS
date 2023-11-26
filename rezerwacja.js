function saveAppointment() {
    // Pobierz dane z formularza
    var date = document.getElementById("appointmentDate").value;
    var time = document.getElementById("appointmentTime").value;
    var purpose = document.getElementById("purpose-list").value;

    // Pobierz informacje o lekarzu z Local Storage
    var doctorId = document.getElementById("doctor").value;

    // Utwórz obiekt z danymi rezerwacji
    var appointmentData = {
        date: date,
        time: time,
        purpose: purpose,
        doctor: doctorId
    };

    // Konwertuj obiekt na JSON
    var jsonData = JSON.stringify(appointmentData);

    // Zapisz dane w Local Storage
    localStorage.setItem("appointment", jsonData);

    // Przenieś się do podstrony rezerwacja.html
    window.location.href = 'rezerwacja.html';
}

function getDoctorName(doctorId) {
    // Funkcja zwracająca nazwę lekarza na podstawie identyfikatora
    switch (doctorId) {
        case "lekarz1":
            return {
                name: "Dr. Jan Kowalski",
                speciality: "Pediatra",
            };
        case "lekarz2":
            return {
                name: "Dr. Anna Nowak",
                speciality: "Pediatra",
            };
        case "lekarz3":
            return {
                name: "Dr. Maria Wiśniewska",
                speciality: "Lekarz rodzinny",
            };
        case "lekarz4":
            return {
                name: "Dr. Piotr Nowak",
                speciality: "Lekarz rodzinny",
            };
        default:
            return {};
    }
}

function displayAppointmentData(data) {
    // Uzyskaj dostęp do kontenera HTML
    var container = document.getElementById("appointmentContainer");

    // Utwórz kontener dla danych o wizycie
    var appointmentContainer = document.createElement("div");
    appointmentContainer.classList.add("appointment-container");

    // Pobierz dane o lekarzu
    var doctorData = getDoctorName(data.doctor);

    // Dodaj informacje o wizycie do kontenera
    var dateElement = createAppointmentInfo("Data wizyty: " + data.date);
    var timeElement = createAppointmentInfo("Godzina wizyty: " + data.time);
    var purposeElement = createAppointmentInfo("Rodzaj wizyty: " + data.purpose);

    // Dodaj informacje o lekarzu do kontenera
    var doctorInfoElement = createAppointmentInfo("Lekarz: " + doctorData.name);
    var specialityElement = createAppointmentInfo("Specjalność: " + doctorData.speciality);

    // Dodaj przycisk usuwania
    var deleteButton = createDeleteButton(appointmentContainer);

    // Dodaj elementy do kontenera
    appointmentContainer.appendChild(dateElement);
    appointmentContainer.appendChild(timeElement);
    appointmentContainer.appendChild(purposeElement);
    appointmentContainer.appendChild(doctorInfoElement);
    appointmentContainer.appendChild(specialityElement);

    // Usunięto contactElement, ponieważ nie jest zdefiniowany w kodzie

    appointmentContainer.appendChild(deleteButton);

    // Dodaj kontener do głównego kontenera na stronie
    container.appendChild(appointmentContainer);
}

