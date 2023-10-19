import { ColorsPalette } from "../models/palettes/ColorsPalette";
import { ThemeColors } from "../models/themes/ThemeColors";
import { Color } from "../models/types/Colors";

export class ThemeDisplayService {
    constructor(private outputElement: HTMLElement) {}
  
    display(theme: ThemeColors) { // Remplacer `any` par le type approprié de votre thème
      if (!this.outputElement) return;
  
      // Efface l'ancien affichage
      this.outputElement.innerHTML = '';
  
      theme.palettes.forEach((palette: ColorsPalette) => { // Remplacer `any` par le type approprié de votre palette
        const paletteDiv = document.createElement('div');
  
        paletteDiv.classList.add('palette');
        paletteDiv.style.display = 'flex';
  
        palette.shades.forEach((shade: Color) => {
          const colorDiv = document.createElement('div');
          colorDiv.style.backgroundColor = shade.toString();
          colorDiv.style.width = '50px';
          colorDiv.style.height = '50px';
          paletteDiv.appendChild(colorDiv);
        });
  
        this.outputElement.appendChild(paletteDiv);
      });
    }
  }
  