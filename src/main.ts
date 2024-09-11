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
//Lo primero que vamos a hacer es separar el separador personalizado de los numeros
//Reemplazar en los numeros el separar personalizado por la coma
//(Para evitar reciclar el resto del codigo)
export function add(expression: string): string {
  if (expression === '') return '0';
  let evaluateExpression = expression;

  if (evaluateExpression.startsWith('//')) {
    const jumpPosition = evaluateExpression.indexOf('\n')
    const customSeparator = evaluateExpression.substring('//'.length, jumpPosition);
    const listOfNumbers = evaluateExpression.substring(jumpPosition + 1);
    evaluateExpression = listOfNumbers.replace(customSeparator,',')

  }
  if (!evaluateExpression.includes(',')) return evaluateExpression;
  return sumNumbersSplitByComma(evaluateExpression);
}

