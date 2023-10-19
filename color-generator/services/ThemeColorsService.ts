import { HueValue } from "../models/value-objects/HueValue";
import { SaturationValue } from "../models/value-objects/SaturationValue";
import { HexThemeColors } from "../models/themes/HexThemeColors";
import { RGBThemeColors } from "../models/themes/RGBThemeColors";
import { ColorsPaletteService } from "./ColorsPaletteService";
import { ThemeSettings } from "../models/settings/ThemeSettings";
import { ColorMode } from "../models/types/ColorsMode";
import { ThemeColorMode } from "../models/types/ThemesColorsModes";

/**
 * Service responsible for generating theme colors.
 */
export class ThemeColorsService {
  
  constructor(private colorsPaletteService: ColorsPaletteService) {}

  /**
   * Generate Theme Colors based on settings
   * @param {ThemeSettings} settings - Theme settings
   * @returns {HexThemeColors | RGBThemeColors} - Theme colors (either Hex or RGB)
   */
  generateThemeColors(settings: ThemeSettings) {
    if (settings.colorMode === ColorMode.HEX) {
      return this.generateHexThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeColorMode);
    } else {
      return this.generateRGBThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeColorMode);
    }
  }
  
  
  /**
   * Generate Hex Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues
   * @returns {RGBThemeColors} - RGB theme colors
   */
  private generateHexThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number, themeColorMode: ThemeColorMode): HexThemeColors {
    const hues = this.generateHues(hue, themeColorMode);
    const palettes = hues.map(h => this.colorsPaletteService.generateHexPalette(name, h, saturation, numberOfShades));
    return new HexThemeColors(name, palettes);
  }  

  /**
   * Generate RGB Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues
   * @returns {RGBThemeColors} - RGB theme colors
   */
  private generateRGBThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number, themeColorMode: ThemeColorMode): RGBThemeColors {
    const hues = this.generateHues(hue, themeColorMode);
    const palettes = hues.map(h => this.colorsPaletteService.generateRGBPalette(name, h, saturation, numberOfShades));
    return new RGBThemeColors(name, palettes);
  }

  /**
   * Generate an array of HueValue based on the ThemeColorMode
   * @param {HueValue} baseHue - Base hue value
   * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues to generate
   * @returns {HueValue[]} - Array of HueValue
   */
  private generateHues(baseHue: HueValue, themeColorMode: ThemeColorMode): HueValue[] {
    const hues: HueValue[] = [baseHue];
    
    switch (themeColorMode) {
      case ThemeColorMode.BI_COLOR:
        hues.push(new HueValue((baseHue.getValue() + 20) % 360));
        break;
      case ThemeColorMode.TRI_COLOR:
        hues.push(new HueValue((baseHue.getValue() + 20) % 360));
        hues.push(new HueValue((baseHue.getValue() - 20 + 360) % 360));
        break;
      default:
        break;
    }
    
    return hues;
  }
}
