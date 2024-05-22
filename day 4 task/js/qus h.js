function rotateCalendar(month) {
    var cal = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return cal.concat(cal.splice(0, month));
}