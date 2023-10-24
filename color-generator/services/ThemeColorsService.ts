import { HueValue } from "../models/value-objects/HueValue";
import { SaturationValue } from "../models/value-objects/SaturationValue";
import { HexThemeColors } from "../models/themes/HexThemeColors";
import { RGBThemeColors } from "../models/themes/RGBThemeColors";
import { ColorsPaletteService } from "./ColorsPaletteService";
import { ThemeSettings } from "../models/settings/ThemeSettings";
import { ColorMode } from "../models/types/ColorsMode";
import { ThemeNumberOfColors } from "../models/types/ThemeNumberOfColors";
import { ThemeColorsMode } from "../models/types/ThemeColorsMode";

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
      return this.generateHexThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeNumberOfColors, settings.themeColorsMode);
    } else {
      return this.generateRGBThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeNumberOfColors, settings.themeColorsMode);
    }
  }
  
  
  /**
   * Generate Hex Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @param {ThemeNumberOfColors} themeNumberOfColors - Mode defining the number of hues
   * @returns {RGBThemeColors} - RGB theme colors
   */
  private generateHexThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number, themeNumberOfColors: ThemeNumberOfColors, themeColorsMode: ThemeColorsMode): HexThemeColors {
    const hues = this.generateHues(hue, themeNumberOfColors, themeColorsMode);
    const palettes = hues.map(h => this.colorsPaletteService.generateHexPalette(name, h, saturation, numberOfShades));
    return new HexThemeColors(name, palettes);
  }  

  /**
   * Generate RGB Theme Colors
   * @param {string} name - Theme name
   * @param {HueValue} hue - Hue value
   * @param {SaturationValue} saturation - Saturation level (0 to 100)
   * @param {number} numberOfShades - Number of shades in each palette
   * @param {ThemeNumberOfColors} themeNumberOfColors - Mode defining the number of hues
   * @returns {RGBThemeColors} - RGB theme colors
   */
  private generateRGBThemeColors(name: string, hue: HueValue, saturation: SaturationValue, numberOfShades: number, themeNumberOfColors: ThemeNumberOfColors, themeColorsMode: ThemeColorsMode): RGBThemeColors {
    const hues = this.generateHues(hue, themeNumberOfColors, themeColorsMode);
    const palettes = hues.map(h => this.colorsPaletteService.generateRGBPalette(name, h, saturation, numberOfShades));
    return new RGBThemeColors(name, palettes);
  }

  /**
   * Generate an array of HueValue based on the ThemeNumberOfColors
   * @param {HueValue} baseHue - Base hue value
   * @param {ThemeNumberOfColors} themeNumberOfColors - Mode defining the number of hues to generate
   * @param {ThemeColorsMode} themeColorsMode - Mode defining the colors to generate
   * @returns {HueValue[]} - Array of HueValue
   */
  private generateHues(
    baseHue: HueValue, 
    themeNumberOfColors: ThemeNumberOfColors, 
    themeColorsMode: ThemeColorsMode
  ): HueValue[] {
    const hues: HueValue[] = [baseHue];
  
    let hueDelta = themeColorsMode === ThemeColorsMode.COMPLEMENTARY ? 90 : 12;
  
    switch (themeNumberOfColors) {
      case ThemeNumberOfColors.BI_COLOR_UP:
      case ThemeNumberOfColors.TRI_COLOR_UP:
        hues.push(new HueValue((baseHue.getValue() + hueDelta) % 360));
        
        if (themeNumberOfColors === ThemeNumberOfColors.TRI_COLOR_UP) {
          hues.push(new HueValue((baseHue.getValue() + 2 * hueDelta) % 360));
        }
        break;
        
      case ThemeNumberOfColors.BI_COLOR_DOWN:
      case ThemeNumberOfColors.TRI_COLOR_DOWN:
        hues.push(new HueValue((baseHue.getValue() - hueDelta + 360) % 360));
        
        if (themeNumberOfColors === ThemeNumberOfColors.TRI_COLOR_DOWN) {
          hues.push(new HueValue((baseHue.getValue() - 2 * hueDelta + 360) % 360));
        }
        break;
  
      case ThemeNumberOfColors.BI_COLOR_CENTERED:
      case ThemeNumberOfColors.TRI_COLOR_CENTERED:
        hues.push(new HueValue((baseHue.getValue() + hueDelta) % 360));
        
        if (themeNumberOfColors === ThemeNumberOfColors.TRI_COLOR_CENTERED) {
          hues.push(new HueValue((baseHue.getValue() - hueDelta + 360) % 360));
        }
        break;
  
      default:
        break;
    }
  
    return hues;
  }   
}
