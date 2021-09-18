function parseDate(str_date) {
  return new Date(Date.parse(str_date));
}

var str_date = "2015-05-01T22:00:00+10:00"; //AEST time
var expiresIn = "3600";

console.log(new Date().getTimezoneOffset() * 60);
// console.log(new Date(new Date().getTime() - new Date().getTimezoneOffset()));
const expirationDate = new Date(
  new Date().getTime() +
    +parseInt(expiresIn) * 1000 -
    new Date().getTimezoneOffset() * 60 * 1000
);

console.log(expirationDate);
// var now_date =  JSON.stringify({date : new Date().toISOString()});
// const transformedData = JSON.parse(now_date);
// const { date } = transformedData;

// // var locale_date = parseDate(now_date);

// var locale_date = new Date(date);
// console.log(locale_date);
