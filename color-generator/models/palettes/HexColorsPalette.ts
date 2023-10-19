import { ColorsPalette } from "./ColorsPalette";
import { HexColor } from "../value-objects/HexColor";

/**
 * Class representing a color palette consisting of Hex colors
 */
export class HexColorsPalette extends ColorsPalette {
  constructor(name: string, public shades: HexColor[]) {
    
    super(name, shades);
  }
}
