import { ColorsPalette } from "../models/palettes/ColorsPalette";
import { ThemeColors } from "../models/themes/ThemeColors";
import { Color } from "../models/value-objects/colors/Color";
import { ThemeCSSGenerator } from "./ThemeCSSGenerator";

/**
 * Service responsible for displaying theme colors and related CSS in a DOM element.
 */
export class ThemeDisplayService {
  private cssGenerator: ThemeCSSGenerator;
  private cssButton: HTMLButtonElement;
  private modal: HTMLDivElement;
  private currentTheme: ThemeColors | null = null;

  /**
   * Initializes a new instance of the ThemeDisplayService.
   * @param outputElement - The HTML element where the theme should be displayed.
   */
  constructor(private outputElement: HTMLElement) {
    this.cssGenerator = new ThemeCSSGenerator();
    this.cssButton = document.getElementById('showCssButton') as HTMLButtonElement;
    this.modal = document.createElement('div');

    if (this.cssButton === null) {
      console.error("Could not find the 'showCssButton' element.");
      return;
    }

    this.initializeCSSButton();
  }

  /**
   * Displays the given theme in the associated HTML element.
   * @param theme - The theme to display.
   */
  display(theme: ThemeColors): void {
    this.currentTheme = theme;

    if (!this.outputElement || !this.cssButton) return;

    this.outputElement.innerHTML = '';
    theme.palettes.forEach((palette: ColorsPalette) => this.displayPalette(palette));

    this.cssButton.style.display = 'block';
  }

  /**
   * Displays a palette as a child of the outputElement.
   * @param palette - The palette to display.
   */
  private displayPalette(palette: ColorsPalette): void {
    const paletteDiv = document.createElement('div');
    paletteDiv.classList.add('palette');
    palette.shades.forEach((shade: Color) => this.displayShade(shade, paletteDiv));
    this.outputElement.appendChild(paletteDiv);
  }

  /**
   * Displays a shade as a child of the given HTML element.
   * @param shade - The color shade to display.
   * @param parentElement - The parent HTML element.
   */
  private displayShade(shade: Color, parentElement: HTMLElement): void {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = shade.toString();
    colorDiv.classList.add('color-box');
    parentElement.appendChild(colorDiv);
  }

  /**
   * Initializes the button for showing CSS modal.
   */
  private initializeCSSButton(): void {
    if (this.cssButton === null) return;

    this.cssButton.addEventListener('click', () => {
      this.showCssModal();
    });
  }

  /**
   * Displays a modal containing the CSS for the current theme.
   */
  private showCssModal(): void {
    if (!this.currentTheme) {
      console.error("No theme is currently set.");
      return;
    }

    const cssString = this.cssGenerator.generate(this.currentTheme);
    this.modal = document.createElement("div");
    const closeBtn = document.createElement("span");
    const cssContent = document.createElement("pre");

    this.modal.classList.add("modal");
    closeBtn.classList.add("close");
    cssContent.classList.add("css-content");

    closeBtn.innerHTML = "&times;";
    cssContent.textContent = cssString;

    this.modal.appendChild(closeBtn);
    this.modal.appendChild(cssContent);
    document.body.appendChild(this.modal);

    closeBtn.onclick = () => this.closeCssModal();
  }

  /**
   * Closes the CSS modal.
   */
  private closeCssModal(): void {
    document.body.removeChild(this.modal);
  }
}
