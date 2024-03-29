function checkStepNumbers(
  systemNames: string[],
  stepNumbers: number[],
): boolean {
  return systemNames.every((e, i) =>
    stepNumbers[i] <= stepNumbers[
      i + systemNames.slice(i + 1).indexOf(e) + 1
    ]
  );
}

export { checkStepNumbers };
