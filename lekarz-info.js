document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek', // Widok tygodnia z godzinami
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        },
        selectable: true, // Możliwość zaznaczenia terminu
        select: function (info) {
            // Callback wywoływany po zaznaczeniu terminu
            var selectedDate = info.startStr;
            // Tutaj możesz dodać obsługę wyboru godziny wizyty
            // Na przykład poprzez modal lub inne interakcje
            alert('Wybrano termin: ' + selectedDate);
        }
    });

    calendar.render();
});

