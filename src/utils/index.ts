export function displayPokemonNumber(number: number) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = `0${numberString}`;
  }
  return `${numberString}`;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function addPointBeforeLastDigit(num: number) {
  var numStr = num.toString();
  var length = numStr.length;
  return numStr.substring(0, length - 1) + "." + numStr[length - 1];
}
