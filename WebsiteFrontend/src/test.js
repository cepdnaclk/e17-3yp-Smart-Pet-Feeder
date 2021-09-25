function parseDate(str_date) {
  return new Date(Date.parse(str_date));
}

var str_date = "2015-05-01T22:00:00+10:00"; //AEST time
var expiresIn = "3600";

const expirationDate = new Date(
  new Date().getTime() +
    +parseInt(expiresIn) * 1000 -
    new Date().getTimezoneOffset() * 60 * 1000
);

// var now_date =  JSON.stringify({date : new Date().toISOString()});
// const transformedData = JSON.parse(now_date);
// const { date } = transformedData;

// // var locale_date = parseDate(now_date);

// var locale_date = new Date(date);
