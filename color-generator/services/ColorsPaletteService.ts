import { HexColorsPalette } from "../models/palettes/HexColorsPalette";
import { RGBColorsPalette } from "../models/palettes/RGBColorsPalette";
import { HexColor } from "../models/value-objects/HexColor";
import { HueValue } from "../models/value-objects/HueValue";
import { RGBColor } from "../models/value-objects/RGBColor";
import { SaturationValue } from "../models/value-objects/SaturationValue";
import { ColorsService } from "./ColorsService";

/**
 * Class responsible for generating color palettes
 */
export class ColorsPaletteService {

  constructor(private colorService: ColorsService) {}

  /**
   * Generate a Hex color palette
   * @param {string} name - The name of the palette
   * @param {HueValue} hue - The hue of the color
   * @param {SaturationValue} saturation - The saturation level (0 to 100)
   * @param {number} numberOfShades - The number of shades in the palette
   * @returns {HexColorsPalette} - The generated palette in Hex format
   */
  generateHexPalette(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number): HexColorsPalette {
    const shades: HexColor[] = [];
    const luminosityStep = 100 / (numberOfShades - 1);

    for (let i = 0; i < numberOfShades; i++) {
      const luminosity = i * luminosityStep;
      const color = this.colorService.generateHexColorFromHue(hue, saturation.getValue(), luminosity);
      shades.push(color);
    }

    return new HexColorsPalette(name, shades);
  }

  /**
   * Generate a RGB color palette
   * @param {string} name - The name of the palette
   * @param {HueValue} hue - The hue of the color
   * @param {SaturationValue} saturation - The saturation level (0 to 100)
   * @param {number} numberOfShades - The number of shades in the palette
   * @returns {RGBColorsPalette} - The generated palette in RGB format
   */
  generateRGBPalette(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number): RGBColorsPalette {
    const shades: RGBColor[] = [];
    const luminosityStep = 100 / (numberOfShades - 1);

    for (let i = 0; i < numberOfShades; i++) {
      const luminosity = i * luminosityStep;
      const color = this.colorService.generateRGBColorFromHue(hue, saturation.getValue(), luminosity);
      shades.push(color);
    }

    return new RGBColorsPalette(name, shades);
  }
}
