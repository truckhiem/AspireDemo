export function CurrencyFormat(num) {
  if (num) {
    const numFormatted = Number.parseInt(num.replace(/,/g, ''), 10);
    return numFormatted.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return num;
}
export function ReCurrencyFormat(num) {
  if (num) {
    const numFormatted = Number.parseInt(num.replace(/,/g, ''), 10);
    return numFormatted;
  }
  return num;
}
