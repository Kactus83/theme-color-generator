import { ColorsPalette } from "./ColorsPalette";
import { RGBColor } from "../value-objects/colors/RGBColor";

/**
 * Class representing a color palette consisting of RGB colors
 */
export class RGBColorsPalette extends ColorsPalette {

  constructor(name: string, public shades: RGBColor[]) {
    super(name, shades);
  }
  
}
