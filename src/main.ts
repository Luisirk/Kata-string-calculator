


export function add(expression: string): string {
  if (expression === '') {
    return '0';
  }
  if(expression.includes(',')) {
    const firstNumber = expression[0]
    const secondNumber = expression[2]
    return (parseInt(firstNumber) + parseInt(secondNumber)).toString();
  }
  return expression;
}
