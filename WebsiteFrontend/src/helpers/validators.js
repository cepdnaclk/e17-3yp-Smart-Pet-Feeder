module.exports.isPassword = (value) => {
  const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return !!value.match(password_regex);
};

module.exports.isEmail = (value) => {
  const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !!value.match(email_regex);
};

module.exports.isValidString = (value) => {
  return value.trim().length >= 5;
};

module.exports.isNotEmpty = (value) => {
  return value.trim().length >= 1;
};

module.exports.isMobileNumber = (value) => {
  const mobile_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return !!value.match(mobile_regex);
};

module.exports.isConfirmPassword = (password, value) => {
  return password === value;
};

module.exports.isValidDateTime = (value) => {
  return value - new Date() > 600000;
};

module.exports.isValidMessage = (value) => {
  return value.trim().length >= 20;
};
