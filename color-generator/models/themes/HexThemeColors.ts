import { ThemeColors } from "./ThemeColors";
import { HexColorsPalette } from "../palettes/HexColorsPalette";

/**
 * Class representing a theme consisting of Hex color palettes
 */
export class HexThemeColors extends ThemeColors {

  constructor(name: string, public palettes: HexColorsPalette[]) {
    super(name, palettes);
  }
  
}
