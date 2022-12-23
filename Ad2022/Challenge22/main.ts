function checkStepNumbers(
  systemNames: string[],
  stepNumbers: number[],
): boolean {
  interface Hash {
    [key: string]: number[];
  }

  const hash = {} as Hash;
  return systemNames.every((systemName, index) => {
    hash[systemName] = hash[systemName] || [];
    hash[systemName].push(stepNumbers[index]);
    return hash[systemName].at(-1) > (hash[systemName].at(-2) || 0);
  });
}

export { checkStepNumbers };
