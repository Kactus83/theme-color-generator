import { ColorsPalette } from "../palettes/ColorsPalette";

/**
 * Class representing a generic theme consisting of color palettes
 */
export class ThemeColors {

  constructor(public name: string, public palettes: ColorsPalette[]) {}
  
}
