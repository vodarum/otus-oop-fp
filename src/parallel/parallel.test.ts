import Parallel from "./parallel";

const testData = [
  {
    streamsNumber: 2,
    jobs: [
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
    ],
    result: [1, 3, 2, 5, 4],
  },
  {
    streamsNumber: 2,
    jobs: [
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 40, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 70, 5)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 6)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 7)),
    ],
    result: [1, 3, 2, 5, 4, 6, 7],
  },
  {
    streamsNumber: 3,
    jobs: [
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 40, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 70, 5)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 6)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 7)),
    ],
    result: [1, 3, 2, 6, 5, 4, 7],
  },
  {
    streamsNumber: 3,
    jobs: [
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 10, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
    ],
    result: [1, 3, 4, 2, 5],
  },
];

describe.each(testData)("parallel", ({ streamsNumber, jobs, result }) => {
  it(`returns [${result}] for threadsNumber = ${streamsNumber} and jobs = [${jobs}]`, async () => {
    const runner = new Parallel(streamsNumber);

    expect(await runner.jobs(...jobs)).toEqual(result);
  });
});
