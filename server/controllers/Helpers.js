import bcrypt from "bcrypt";

class helpers {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static isNumber(number) {
    return !isNaN(number);
  }

  static validateBodyParamsForUpdating(requestBody) {
    const errors = [];

    if (!requestBody.name) {
      errors.push("Name is missing. Product not created");
    }

    if (!requestBody.price) {
      errors.push("Price is missing. Product not created");
    } else if (!helpers.isNumber(requestBody.price)) {
      errors.push("Price is not a number.");
    }

    if (!requestBody.quantity) {
      errors.push("Quantity is missing. Product not created");
    } else if (!helpers.isNumber(requestBody.quantity)) {
      errors.push("Price is not a number.");
    }

    if (errors.length >= 4) {
      return errors;
    }
    return false;
  }

  static validateBodyParamsForCreating(requestBody) {
    const errors = [];
    if (!requestBody.name) {
      errors.push("Name is missing. Product not created");
    }

    if (!requestBody.price) {
      errors.push("Price is missing. Product not created");
    } else if (!helpers.isNumber(requestBody.price)) {
      errors.push("Price is not a number.");
    }

    if (!requestBody.quantity) {
      errors.push("Quantity is missing. Product not created");
    } else if (!helpers.isNumber(requestBody.quantity)) {
      errors.push("Price is not a number.");
    }

    if (errors.length > 0) {
      return errors;
    }
    return false;
  }
}

export default helpers;
