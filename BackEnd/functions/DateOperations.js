exports.extractDate = (date) => {
    let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

exports.extractTime = (date) => {
    let time = new Date(date);

    let hour = time.getHours();
    let min = time.getMinutes();

    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;
    //
    return hour + ":" + min;
}
