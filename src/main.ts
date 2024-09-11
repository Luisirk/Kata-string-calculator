function splitNextNumberFromExpression(expression: string): [number, string] {
  const firstCommaIndex = expression.indexOf(',', 0);


  if (firstCommaIndex !== -1) {
    const number = parseInt(expression.substring(0, firstCommaIndex));
    const rest = expression.substring(firstCommaIndex + 1);
    return [number, rest];
  }
  return [parseInt(expression), ''];
}

function sumNumbersSplitByComma(expression: string) {
  let sumOfNumbers = 0;
  let rest = expression;
  while (rest !== '') {
    const result = splitNextNumberFromExpression(rest);
    sumOfNumbers += result[0];
    rest = result[1];
  }
  return sumOfNumbers.toString();
}
function replaceCustomSeparatorByComma(expression: string):string {
  const jumpPosition = expression.indexOf('\n')
  const customSeparator = expression.substring('//'.length, jumpPosition);
  const listOfNumbers = expression.substring(jumpPosition + 1);
  return listOfNumbers.replace(customSeparator,',')
}
export function add(expression: string): string {
  if (expression === '') return '0';
  const evaluateExpression = expression.startsWith('//')
      ? replaceCustomSeparatorByComma(expression)
      : expression
  if (!evaluateExpression.includes(',')) return evaluateExpression;
  return sumNumbersSplitByComma(evaluateExpression);
}

