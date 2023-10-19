export class HexColor {
    constructor(private value: string) {
      if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
        throw new Error('Invalid hex color');
      }
    }
  
    toString(): string {
      return this.value;
    }
  }
  