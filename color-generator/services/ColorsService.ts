import { HexColor } from '../models/value-objects/colors/HexColor';
import { RGBColor } from '../models/value-objects/colors/RGBColor';
import { HueValue } from '../models/value-objects/HueValue';

/**
 * ColorsService - Service to manipulate and generate colors
 */
export class ColorsService {
  
  /**
   * Generate a HexColor based on HueValue, Saturation, and Luminosity
   * @param {HueValue} hue - The hue of the color
   * @param {number} saturation - The saturation level (0 to 100)
   * @param {number} luminosity - The luminosity level (0 to 100)
   * @returns {HexColor} - The generated Hex color
   */
  generateHexColorFromHue(hue: HueValue, saturation: number, luminosity: number): HexColor {
    const hexValue = this.hslToHex(hue.getValue(), saturation, luminosity);
    return new HexColor(hexValue);
  }

  /**
   * Generate a RGBColor based on HueValue, Saturation, and Luminosity
   * @param {HueValue} hue - The hue of the color
   * @param {number} saturation - The saturation level (0 to 100)
   * @param {number} luminosity - The luminosity level (0 to 100)
   * @returns {RGBColor} - The generated RGB color
   */
  generateRGBColorFromHue(hue: HueValue, saturation: number, luminosity: number): RGBColor {
    const rgbValue = this.hslToRGB(hue.getValue(), saturation, luminosity);
    return new RGBColor(...rgbValue);
  }

  /**
   * Convert HSL values to Hex color
   * @private
   * @param {number} h - HueValue
   * @param {number} s - Saturation
   * @param {number} l - Luminosity
   * @returns {string} - Hex color
   */
  private hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }

    const rString: string = Math.round((r + m) * 255).toString(16);
    const gString: string = Math.round((g + m) * 255).toString(16);
    const bString: string = Math.round((b + m) * 255).toString(16);
    
    return `#${rString.padStart(2, '0')}${gString.padStart(2, '0')}${bString.padStart(2, '0')}`;    
  }

  /**
   * Convert HSL values to RGB color
   * @private
   * @param {number} h - HueValue
   * @param {number} s - Saturation
   * @param {number} l - Luminosity
   * @returns {[number, number, number]} - RGB color as a tuple
   */
  private hslToRGB(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  }
}
