function compare(str1: string, str2: string): number {
  if (str1 === str2) {
    return 0;
  }

  const str1AsArray = str1.split(".");
  const str2AsArray = str2.split(".");

  let largerArray = str1AsArray;
  let smallerArray = str2AsArray;
  let coefficient = 1;

  if (str1AsArray.length < str2AsArray.length) {
    largerArray = str2AsArray;
    smallerArray = str1AsArray;
    coefficient = -1;
  }

  for (let i = 0; i < largerArray.length; i++) {
    if (
      typeof smallerArray[i] === "undefined" ||
      +largerArray[i] > +smallerArray[i]
    ) {
      return 1 * coefficient;
    }

    if (+largerArray[i] < +smallerArray[i]) {
      return -1 * coefficient;
    }
  }

  return 0;
}

function sort(array: Array<string>): Array<string> {
  return array.sort(compare);
}

export { compare, sort };
