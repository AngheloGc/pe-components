export const REGULAR_EXPRESSIONS = {
  onlyLetters: /^[a-zA-Z\u00C0-\u00FF ]*$/,
  onlyNumbers: /^[0-9]+$/,
  onlyLettersAndNumbers: /^[a-zA-Z\u00C0-\u00FF 0-9]+$/,
} as const