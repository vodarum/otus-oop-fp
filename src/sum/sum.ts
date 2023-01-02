export default function sum(value?: number) {
  let s = value ?? 0;

  function foo(newValue: number) {
    s += newValue;

    return sum(s);
  }

  foo.valueOf = () => s;

  return foo;
}
