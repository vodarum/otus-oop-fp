type fn<T> = () => Promise<T>;
type StreamResult<T> = { idx: number; result: T };

function promisify<T>(stream: fn<T>, idx: number): Promise<StreamResult<T>> {
  return new Promise((resolve) => {
    stream().then((result) => {
      resolve({ idx, result });
    });
  });
}

export default class Parallel {
  streamsNumber = 0;

  constructor(streamsNumber: number) {
    this.streamsNumber = streamsNumber;
  }

  async jobs<T>(...streams: Array<fn<T>>): Promise<Array<T>> {
    const result: Array<T> = [];
    const queue: Map<number, Promise<StreamResult<T>>> = new Map();

    for (let i = 0; i < this.streamsNumber; i++) {
      queue.set(i, promisify(streams[i], i));
    }

    let nextIdx = this.streamsNumber;

    while (result.length < streams.length) {
      const racedStream = await Promise.race(queue.values());

      result.push(racedStream.result);

      if (nextIdx < streams.length) {
        queue.set(
          racedStream.idx,
          promisify(streams[nextIdx], racedStream.idx)
        );

        nextIdx++;
      } else {
        queue.delete(racedStream.idx);
      }
    }

    return result;
  }
}
