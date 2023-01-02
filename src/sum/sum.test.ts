import sum from "./sum";

describe("sum", () => {
  describe("without arg", () => {
    let fnSum: Function;

    beforeEach(() => {
      fnSum = sum();
    });

    it("returns 1 for 'sum()(1)'", () => {
      expect(Number(fnSum(1))).toBe(1);
    });

    it("returns 3 for 'sum()(1)(2)'", () => {
      expect(Number(fnSum(1)(2))).toBe(3);
    });

    it("returns 12 for 'sum()(3)(4)(5)'", () => {
      expect(Number(fnSum(3)(4)(5))).toBe(12);
    });
  });

  describe("with arg", () => {
    let fnSum3: Function;

    beforeEach(() => {
      fnSum3 = sum(3);
    });

    it("returns 4 for 'sum(3)(1)'", () => {
      expect(Number(fnSum3(1))).toBe(4);
    });

    it("returns 6 for 'sum(3)(1)(2)'", () => {
      expect(Number(fnSum3(1)(2))).toBe(6);
    });

    it("returns 15 for 'sum(3)(3)(4)(5)'", () => {
      expect(Number(fnSum3(3)(4)(5))).toBe(15);
    });
  });
});
