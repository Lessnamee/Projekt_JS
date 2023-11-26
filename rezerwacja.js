document.addEventListener("DOMContentLoaded", function() {
    // Sprawdź, czy dane rezerwacji są dostępne w Local Storage
    if (localStorage.getItem("appointment")) {
      // Pobierz dane z Local Storage
      var jsonData = localStorage.getItem("appointment");

      // Parsuj dane JSON
      var appointmentData = JSON.parse(jsonData);

      // Pobierz identyfikator lekarza z Local Storage
      var doctorId = localStorage.getItem("doctorId");

      // Wyświetl dane na stronie
      displayAppointmentData(appointmentData, doctorId);
    }

    // Dodaj obsługę kliknięcia na przycisku dodawania wizyty
    var addButton = document.getElementById("addButton");
    if (addButton) {
      addButton.addEventListener("click", saveAppointment);
    }
  });

  function displayAppointmentData(data, doctorId) {
    // Uzyskaj dostęp do kontenera HTML
    var container = document.getElementById("appointmentContainer");

    // Utwórz kontener dla danych o wizycie
    var appointmentContainer = document.createElement("div");
    appointmentContainer.classList.add("appointment-container");

    // Dodaj informacje o wizycie do kontenera
    var dateElement = createAppointmentInfo("Data wizyty: " + data.date);
    var doctorElement = createAppointmentInfo("Lekarz: " + getDoctorName(doctorId)); // Dodano informacje o lekarzu

    // Dodaj przycisk usuwania
    var deleteButton = createDeleteButton(appointmentContainer);

    // Dodaj elementy do kontenera
    appointmentContainer.appendChild(dateElement);
    appointmentContainer.appendChild(doctorElement); // Dodano informacje o lekarzu
    appointmentContainer.appendChild(deleteButton);

    // Dodaj kontener do głównego kontenera na stronie
    container.appendChild(appointmentContainer);
  }

  function createAppointmentInfo(text) {
    var element = document.createElement("p");
    element.classList.add("appointment-info");
    element.textContent = text;
    return element;
  }

  function createDeleteButton(container) {
    var button = document.createElement("button");
    button.classList.add("delete-button");
    button.textContent = "Usuń rezerwację";

    // Dodaj obsługę kliknięcia na przycisku usuwania
    button.addEventListener("click", function() {
      // Usuń dane z Local Storage
      localStorage.removeItem("appointment");
      localStorage.removeItem("doctorId");

      // Usuń kontener z danymi o wizycie
      container.remove();
    });

    return button;
  }

  function getDoctorName(doctorId) {
    // Funkcja zwracająca nazwę lekarza na podstawie identyfikatora
    switch (doctorId) {
      case "lekarz1":
        return "Imię Nazwisko Lekarza 1";
      case "lekarz2":
        return "Imię Nazwisko Lekarza 2";
      // Dodaj inne przypadki dla lekarzy
      default:
        retu
  function getDoctorName(doctorId) {
    // Funkcja zwracająca nazwę lekarza na podstawie identyfikatora
    switch (doctorId) {
      case "lekarz1":
        return "Dr. Jan Kowalski";
      case "lekarz2":
        return "Dr. Anna Nowak";
      case "lekarz3":
        return "Dr. Maria Wiśniewska";
      case "lekarz4":
        return "Dr. Piotr Nowak";

    }}}
  }
   // Funkcja zapisująca wizytę
   function saveAppointment() {
    // Pobierz dane z formularza
    var date = document.getElementById("appointmentDate").value;

    // Pobierz informacje o lekarzu z Local Storage
    var doctorId = localStorage.getItem("doctorId");

    // Utwórz obiekt z danymi rezerwacji
    var appointmentData = {
      date: date,
      doctor: doctorId
    };

    // Konwertuj obiekt na JSON
    var jsonData = JSON.stringify(appointmentData);

    // Zapisz dane w Local Storage
    localStorage.setItem("appointment", jsonData);

    // Przenieś się do podstrony rezerwacja.html
    window.location.href = 'rezerwacja.html';
  }
