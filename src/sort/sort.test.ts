import { compare, sort } from "./sort";

const testData = {
  compare: [
    {
      str1: "12.5",
      str2: "0.5.0",
      result: 1,
    },
    {
      str1: "0.5.0",
      str2: "0.10.3",
      result: -1,
    },
    {
      str1: "1.0.13",
      str2: "1.0.13",
      result: 0,
    },
  ],
  sort: [
    {
      array: [
        "1.0.5",
        "2.5.0",
        "0.12.0",
        "1",
        "1.23.45",
        "1.4.50",
        "1.2.3.4.5.6.7",
      ],
      result: [
        "0.12.0",
        "1",
        "1.0.5",
        "1.2.3.4.5.6.7",
        "1.4.50",
        "1.23.45",
        "2.5.0",
      ],
    },
    {
      array: ["12.5", "0.5.0", "0.12.0", "1", "1"],
      result: ["0.5.0", "0.12.0", "1", "1", "12.5"],
    },
    {
      array: ["0.5.0", "0.1.3", "0.10.3", "0", "0.0.1"],
      result: ["0", "0.0.1", "0.1.3", "0.5.0", "0.10.3"],
    },
  ],
};

describe.each(testData.compare)("compare", ({ str1, str2, result }) => {
  it(`returns '${result}' for ('${str1}', '${str2}')`, () => {
    expect(compare(str1, str2)).toBe(result);
  });
});

describe.each(testData.sort)("sort", ({ array, result }) => {
  it(`returns [${result}] for [${array}]`, () => {
    expect(sort(array)).toEqual(result);
  });
});
