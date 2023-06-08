function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((value, operation) => {
    if (operation == '--X' || operation == 'X--') {
      value--;
    } else if (operation == '++X' || operation == 'X++') {
      value++;
    }

    return value;
  }, 0);
}
