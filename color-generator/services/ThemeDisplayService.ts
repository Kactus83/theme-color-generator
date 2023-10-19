import { ColorsPalette } from "../models/palettes/ColorsPalette";
import { ThemeColors } from "../models/themes/ThemeColors";
import { Color } from "../models/types/Colors";

export class ThemeDisplayService {
  constructor(private outputElement: HTMLElement) {}

  display(theme: ThemeColors) {
    if (!this.outputElement) return;

    this.outputElement.innerHTML = '';

    theme.palettes.forEach((palette: ColorsPalette) => {
      const paletteDiv = document.createElement('div');
      paletteDiv.classList.add('palette');

      palette.shades.forEach((shade: Color) => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = shade.toString();
        colorDiv.classList.add('color-box'); 
        paletteDiv.appendChild(colorDiv);
      });

      this.outputElement.appendChild(paletteDiv);
    });
  }
}
