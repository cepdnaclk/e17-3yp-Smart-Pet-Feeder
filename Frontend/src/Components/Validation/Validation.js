// Validation funcs
exports.isNotEmpty = (value) => value.trim() !== "";

exports.isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

exports.isValidMobileNumber = (number) => {
  const re = /^\d{10}$/;
  return re.test(String(number));
};

exports.isValidPassword = (password) => {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  return re.test(String(password));
};

exports.isValidConfirmPassword = (password, confirmPassword) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};
