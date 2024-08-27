


export function add(expression: string): string {
  if (expression === '') {
    return '0';
  }
  if(expression.includes(',')) {
    const commaIndex = expression.indexOf(',');
    const firstNumber = expression.substring(0, commaIndex);
    const secondNumber = expression.substring(commaIndex + 1);
    return (parseInt(firstNumber) + parseInt(secondNumber)).toString();
  }
  return expression;
}
