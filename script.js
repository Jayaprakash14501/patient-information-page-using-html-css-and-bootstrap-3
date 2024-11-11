function formatSelectedDate(event) {
    const date = new Date(event.target.value);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const monthsOfYear = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${dayOfWeek} ${monthName} ${dayOfMonth}, ${year}`;
    document.getElementById('formattedDateInput').value = formattedDate;
    document.getElementById('formattedDateGroup').style.display = 'block';
    const formattedDatePicker = date.toISOString().split('T')[0];
    document.getElementById('datePicker').value = formattedDatePicker;
  }

  function clearDate() {
    document.getElementById('formattedDateGroup').style.display = 'none';

    document.getElementById('formattedDateInput').value = '';
  }