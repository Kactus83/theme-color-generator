import { HueValue } from "../models/value-objects/HueValue";
import { SaturationValue } from "../models/value-objects/SaturationValue";
import { HexThemeColors } from "../models/themes/HexThemeColors";
import { RGBThemeColors } from "../models/themes/RGBThemeColors";
import { ColorsPaletteService } from "./ColorsPaletteService";

/**
 * Service responsible for generating theme colors.
 */
export class ThemeColorsService {
  
  constructor(private colorsPaletteService: ColorsPaletteService) {}
  
  /**
   * Generate Hex Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @returns {HexThemeColors} - Hex theme colors
   */
  generateHexThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number): HexThemeColors {
    const palette = this.colorsPaletteService.generateHexPalette(name, hue, saturation, numberOfShades);
    return new HexThemeColors(name, [palette]);
  }

  /**
   * Generate RGB Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @returns {RGBThemeColors} - RGB theme colors
   */
  generateRGBThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number): RGBThemeColors {
    const palette = this.colorsPaletteService.generateRGBPalette(name, hue, saturation, numberOfShades);
    return new RGBThemeColors(name, [palette]);
  }
}
