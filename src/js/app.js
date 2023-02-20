export default class Validator {
  validateUsername(value) {
    this.name = value;
    const regexp = /^[a-zA-Z](?=.*\w-)?(?!.*\d{4}).+[a-zA-Z]$/;
    return regexp.test(value);
  }
}
