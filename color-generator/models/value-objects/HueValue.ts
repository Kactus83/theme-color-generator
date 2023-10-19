export class HueValue {
    constructor(private value: number) {
      if (value < 0 || value > 360) {
        throw new Error('Invalid hue value');
      }
    }
  
    getValue(): number {
      return this.value;
    }
  }