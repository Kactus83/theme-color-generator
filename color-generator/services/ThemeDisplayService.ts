import { ColorsPalette } from "../models/palettes/ColorsPalette";
import { ThemeColors } from "../models/themes/ThemeColors";
import { Color } from "../models/value-objects/colors/Color";
import { ThemeCSSGenerator } from "./ThemeCSSGenerator";

/**
 * Service responsible for displaying theme colors and related CSS in a DOM element and in an overlay.
 */
export class ThemeDisplayService {
  private cssGenerator = new ThemeCSSGenerator();
  private cssButton: HTMLButtonElement;
  private cssModal!: HTMLDivElement;
  private themeOverlay: HTMLDivElement;
  private overlayBox: HTMLDivElement;
  private themeOverlayContent: HTMLDivElement;
  private themeOverlayClose: HTMLSpanElement;
  private showAllButton: HTMLButtonElement;
  private currentTheme: ThemeColors | null = null;

  constructor(private outputElement: HTMLElement) {
    this.cssButton = document.getElementById('showCssButton') as HTMLButtonElement;
    // Overlay elements
    this.themeOverlay = document.getElementById('themeOverlay') as HTMLDivElement;
    this.overlayBox = this.themeOverlay.querySelector('.overlay-theme') as HTMLDivElement;
    this.themeOverlayContent = document.getElementById('themeOverlayContent') as HTMLDivElement;
    this.themeOverlayClose = document.getElementById('themeOverlayClose') as HTMLSpanElement;
    // Show All button
    this.showAllButton = document.getElementById('showAllPalettesButton') as HTMLButtonElement;

    if (!this.cssButton || !this.themeOverlay || !this.overlayBox
      || !this.themeOverlayContent || !this.themeOverlayClose
      || !this.showAllButton) {
      console.error("Required elements are missing in the DOM.");
      return;
    }

    this.initializeCSSButton();
    this.initializeThemeOverlay();
  }

  display(theme: ThemeColors): void {
    this.currentTheme = theme;
    this.showAllButton.style.display = 'inline-block';
    this.outputElement.innerHTML = '';

    theme.palettes.forEach((palette, idx) => {
      const paletteDiv = this.createPaletteElement(palette);
      paletteDiv.addEventListener('click', () => this.showSinglePaletteOverlay(idx));
      this.outputElement.appendChild(paletteDiv);
    });

    this.cssButton.style.display = 'block';
    this.showAllButton.onclick = () => this.showAllPalettesOverlay();
  }

  private createPaletteElement(palette: ColorsPalette): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('palette');
    palette.shades.forEach(shade => {
      const box = document.createElement('div');
      box.classList.add('color-box');
      box.style.backgroundColor = shade.toString();
      div.appendChild(box);
    });
    return div;
  }

  private initializeCSSButton() {
    this.cssButton.addEventListener('click', () => this.showCssModal());
  }

  private initializeThemeOverlay() {
    // Taille fixe + scroll
    this.overlayBox.style.width = '60vw';
    this.overlayBox.style.height = '60vh';
    this.overlayBox.style.overflowY = 'auto';

    this.themeOverlayClose.addEventListener('click', () => this.closeThemeOverlay());
    this.themeOverlay.addEventListener('click', e => {
      if (e.target === this.themeOverlay) this.closeThemeOverlay();
    });
  }

  private showCssModal() {
    if (!this.currentTheme) return;
    const cssStr = this.cssGenerator.generate(this.currentTheme);
    this.cssModal = document.createElement('div');
    const btn = document.createElement('span');
    const pre = document.createElement('pre');
    this.cssModal.classList.add('modal');
    btn.classList.add('close');
    pre.classList.add('css-content');
    btn.innerHTML = '&times;';
    pre.textContent = cssStr;
    this.cssModal.append(btn, pre);
    document.body.append(this.cssModal);
    btn.onclick = () => document.body.removeChild(this.cssModal);
  }

  private showSinglePaletteOverlay(idx: number) {
    if (!this.currentTheme) return;
    this.themeOverlayContent.innerHTML = '';
    const p = this.currentTheme.palettes[idx];
    const wrapper = this.createWrapper();
    const title = document.createElement('h4');
    title.innerText = `Palette ${idx + 1}`;
    wrapper.append(title, this.createPaletteElement(p));
    this.themeOverlayContent.append(wrapper);
    this.themeOverlay.style.display = 'flex';
  }

  private showAllPalettesOverlay() {
    if (!this.currentTheme) return;
    this.themeOverlayContent.innerHTML = '';
    const wrapper = this.createWrapper();

    this.currentTheme.palettes.forEach((p, i) => {
      const section = document.createElement('div');
      section.style.marginBottom = '1rem';
      const title = document.createElement('h4');
      title.innerText = `Palette ${i + 1}`;
      section.append(title, this.createPaletteElement(p));
      wrapper.appendChild(section);
    });

    this.themeOverlayContent.append(wrapper);
    this.themeOverlay.style.display = 'flex';
  }

  private createWrapper(): HTMLDivElement {
    const w = document.createElement('div');
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--field-bg');
    Object.assign(w.style, {
      backgroundColor: bg.trim(),
      padding: '1rem',
      borderRadius: '0.3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    });
    return w;
  }

  private closeThemeOverlay() {
    this.themeOverlay.style.display = 'none';
  }
}