exports.extractDate = (date) => {
    let correct_date = new Date(new Date(date).getTime() + 5.5* 3600 * 1000);

    let d = new Date(correct_date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

exports.extractTime = (date) => {
    let time = new Date(new Date(date).getTime() + 5.5* 3600 * 1000);


    let hour = time.getHours();
    let min = time.getMinutes();

    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;

    return hour + ":" + min;
}
