export class SaturationValue {
    constructor(private value: number) {
      if (value < 0 || value > 100) {
        throw new Error('Invalid hue value');
      }
    }
  
    getValue(): number {
      return this.value;
    }
  }