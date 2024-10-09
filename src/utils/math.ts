export class FMath {
  static plus(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a + b;
  }

  static minus(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a - b;
  }

  static multiple(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a * b;
  }

  static divide(a: number|string, b: number|string): number {
    if(typeof a === 'string')
      a = Number(a);
    if(typeof b === 'string')
      b = Number(b);
    return a / b;
  }

  static squareRoot(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return Math.sqrt(a);
  }

  static square(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return Math.pow(a, 2);
  }

  static reciprocal(a: number|string) {
    if(typeof a === 'string')
      a = Number(a);
    return this.divide(1, a);
  }

  static negate(a: number|string ) {
    if(typeof a === 'string')
      a = Number(a);
    return this.minus(0, a);
  }
}