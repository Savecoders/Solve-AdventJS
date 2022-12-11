// 1. Create a function that takes an array of 0s and 1s and
// returns the number of 7-segment displays that are currently off.

function countTime(leds: string[]): number {
  const lowLeds: string[] = leds.join("").split("1");
  const valuesLowLeds: number[] = lowLeds.map((led, index, arr) => {
    if (index === 0) return (led.length + arr[arr.length - 1].length) * 7;
    return led.length * 7;
  });
  const sortLed = valuesLowLeds.sort((a, b) => b - a);
  return sortLed[0];
}

export { countTime };
