const doctors = [
    {
        name: "Dr. Jan Kowalski",
        specialization: "Pediatra",
        image: "img/lek1.jpg",
        availableDates: ["2023-11-01", "2023-11-05", "2023-11-10"],
        profileLink: "lekarz1.html"
    },
    {
        name: "Dr. Anna Nowak",
        specialization: "Pediatra",
        image: "img/lek2.jpg",
        availableDates: ["2023-11-02", "2023-11-06", "2023-11-11"],
        profileLink: "lekarz2.html"
    },
    {
        name: "Dr. Maria Wiśniewska",
        specialization: "Lekarz Rodzinny",
        image: "img/lek3.jpg",
        availableDates: ["2023-11-03", "2023-11-07", "2023-11-12"],
        profileLink: "lekarz3.html"

    },
    {
        name: "Dr. Piotr Nowak",
        specialization: "Lekarz Rodzinny",
        image: "img/lek4.jpg",
        availableDates: ["2023-11-04", "2023-11-08", "2023-11-13"],
        profileLink: "lekarz4.html"

    }
];

function renderDoctorCards() {
    const doctorList = document.getElementById("doctor-list");

    doctors.forEach(doctor => {
        const card = document.createElement("div");
        card.classList.add("doctor-card");

        const imageLink = document.createElement("a");
        imageLink.href = doctor.profileLink;
        const image = document.createElement("img");
        image.src = doctor.image;
        image.alt = doctor.name;
        image.classList.add("doctor-image");
        imageLink.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = doctor.name;

        const specialization = document.createElement("p");
        specialization.textContent = doctor.specialization;

        const availability = document.createElement("p");
        availability.textContent = "Dostępne terminy w tym tygodniu: " + doctor.availableDates.join(", ");

        card.appendChild(imageLink);
        card.appendChild(name);
        card.appendChild(specialization);
        card.appendChild(availability);

        doctorList.appendChild(card);
    });
}

renderDoctorCards();
