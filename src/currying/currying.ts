export default function currying(foo: Function): Function {
  return function ff(...args: Array<number>) {
    if (args.length >= foo.length) {
      return foo(...args);
    }

    return (...newArgs: Array<number>) => ff(...args, ...newArgs);
  };
}
