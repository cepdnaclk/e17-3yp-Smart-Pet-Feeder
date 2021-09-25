export const getNumberOfDays = (date) => {
  const duration = new Date(date) - new Date();

  const days = Math.floor(duration / 86400000);
  if (days > 1) return days + " Days";
  else return days + " Day";
};

export const getNumberOfHours = (date) => {
  const duration = new Date(date) - new Date();
  let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " h";
};

export const isExceedDay = (date) => {
  return Math.floor((new Date(date) - new Date()) / 86400000) >= 1;
};

export const extractDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const extractTime = (date) => {
  let time = new Date(date);

  let hour = time.getHours();
  let min = time.getMinutes();

  if (min < 10) min = "0" + min;
  if (hour < 10) hour = "0" + hour;
  //
  return hour + ":" + min;
};

export const dateCompare = (date1, date2) => {
  if (new Date(date1.date_time) > new Date(date2.date_time)) {
    return -1;
  }
  if (new Date(date2.date_time) < new Date(date1.date_time)) {
    return 1;
  }
  return 0;
};

export const isSameDate = (date1, date2) => {
  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

export const combineDateTime = (date, time) => {
  return Date.parse(date + "T" + time + ":00.000+05:30");
};

export const isDelayed = (date) => {
  return new Date(date) - new Date() < 300000;
};
