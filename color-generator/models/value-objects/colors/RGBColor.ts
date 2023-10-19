import { Color } from "./Color";

export class RGBColor implements Color {
    constructor(private r: number, private g: number, private b: number) {
      if (![r, g, b].every(value => value >= 0 && value <= 255)) {
        throw new Error('Invalid RGB color');
      }
    }
  
    toString(): string {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
  }