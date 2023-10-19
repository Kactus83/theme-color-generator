import { ThemeColors } from "./ThemeColors";
import { RGBColorsPalette } from "../palettes/RGBColorsPalette";

/**
 * Class representing a theme consisting of RGB color palettes
 */
export class RGBThemeColors extends ThemeColors {
    
  constructor(name: string, public palettes: RGBColorsPalette[]) {
    super(name, palettes);
  }

}
