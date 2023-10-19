import { ThemeColors } from "../models/themes/ThemeColors";
import { ColorsPalette } from "../models/palettes/ColorsPalette";

/**
 * Service responsible for generating CSS theme variables.
 */
export class ThemeCSSGenerator {

  /**
   * Generate CSS Variables for a Theme
   * @param {ThemeColors} theme - Theme object containing palettes
   * @returns {string} - Generated CSS as string
   */
  generate(theme: ThemeColors): string {
    const cssVariables = theme.palettes.map((palette, index) => this.generateCSSForPalette(palette, index)).join("\n");
    return `.${theme.name} {\n${cssVariables}\n}`;
  }

  /**
   * Generate CSS Variables for a Palette
   * @param {ColorsPalette} palette - Palette object
   * @param {number} paletteIndex - Palette index for naming purpose
   * @returns {string} - Generated CSS for a palette
   */
  private generateCSSForPalette(palette: ColorsPalette, paletteIndex: number): string {
    const colorRole = this.getColorRole(paletteIndex);
    return palette.shades.map((color, index) => `  --${colorRole}-${index + 1}: ${color.toString()};`).join("\n");
  }

  /**
   * Get the color role based on the palette index
   * @param {number} paletteIndex - Palette index
   * @returns {string} - Color role (primary, secondary, etc.)
   */
  private getColorRole(paletteIndex: number): string {
    const roles = ["primary", "secondary", "tertiary", "quaternary", "quinary"];
    return roles[paletteIndex] || `color-${paletteIndex + 1}`;
  }
}
