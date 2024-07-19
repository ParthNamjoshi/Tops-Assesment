function change() {
    var booking = document.getElementById('booking');
    var date = document.getElementById('date');
    var time = document.getElementById('time');
    var slot = document.getElementById('slot');

    if (booking.value === "fullday") {
        date.style.display = "block";
        time.style.display = "none";
        slot.style.display = "none";
    }
    else if (booking.value === "halfday") {
        date.style.display = "block";
        time.style.display = "none";
        slot.style.display = "block";
    }
    else if (booking.value === "hourly") {
        date.style.display = "block";
        time.style.display = "block";
        slot.style.display = "none";
    }
    else {
        date.style.display = "block";
        time.style.display = "block";
        slot.style.display = "block";
    }
}