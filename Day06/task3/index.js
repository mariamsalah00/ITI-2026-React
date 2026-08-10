function getMonthName(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var d = new Date(date);

    console.log(d.getMonth()+1);

    console.log(months[d.getMonth()]);
}

getMonthName("2026-07-13");
