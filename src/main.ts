


export function add(expression: string): string {
  if (expression === '') {
    return '0';
  }
  if(expression.includes(',')) {
    const firstCommaIndex = expression.indexOf(',');
    let sumOfNumbers = parseInt(expression.substring(0, firstCommaIndex));

    if (firstCommaIndex !== -1) {
      const secondNumber = expression.substring(firstCommaIndex + 1);
      sumOfNumbers += parseInt(secondNumber);

      const secondCommaIndex = expression.indexOf(',', firstCommaIndex + 1);
      if(secondCommaIndex !== -1) {
        const thirdNumber = expression.substring(secondCommaIndex + 1);
        sumOfNumbers += parseInt(thirdNumber);

        const thirdCommaIndex = expression.indexOf(',', secondCommaIndex + 1);
        if(thirdCommaIndex !== -1) {
          const fourthNumber = expression.substring(thirdCommaIndex + 1);
          sumOfNumbers += parseInt(fourthNumber);
        }

      }
    }
    return sumOfNumbers.toString();
  }
  return expression;
}
