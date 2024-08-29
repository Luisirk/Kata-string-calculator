
function splitNextNumberFromExpression(expression: string): [number, string] {
  const firstCommaIndex = expression.indexOf(',', 0);
  if (firstCommaIndex !== -1) {
    const number = parseInt(expression.substring(0, firstCommaIndex));
    const rest = expression.substring(firstCommaIndex + 1);
    return [number, rest];
  }
  return [parseInt(expression), ''];
}

export function add(expression: string): string {
  if (expression === '') {
    return '0';
  }
  if(expression.includes(',')) {
    let sumOfNumbers = 0;
    let rest = expression;
    while (rest !== '') {
      const result = splitNextNumberFromExpression(rest);
      sumOfNumbers += result[0];
      rest = result[1];
    }
    return sumOfNumbers.toString();
  }
  return expression;
}
