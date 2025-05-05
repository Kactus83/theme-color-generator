import { HueValue } from "./models/value-objects/HueValue";
import { SaturationValue } from "./models/value-objects/SaturationValue";
import { ThemeColorsService } from "./services/ThemeColorsService";
import { ThemeSettings } from "./models/settings/ThemeSettings";
import { ColorsPaletteService } from "./services/ColorsPaletteService";
import { ColorsService } from "./services/ColorsService";
import { ThemeDisplayService } from "./services/ThemeDisplayService";
import { ColorMode } from "./models/types/ColorsMode";
import { ThemeNumberOfColors } from "./models/types/ThemeNumberOfColors";
import { ThemeColorsMode } from "./models/types/ThemeColorsMode";
import { ThemeCSSGenerator } from "./services/ThemeCSSGenerator";

document.addEventListener("DOMContentLoaded", () => {
  // Les champs de contrôle
  const hueInput = document.getElementById("hueInput") as HTMLInputElement;
  const saturationInput = document.getElementById("saturationInput") as HTMLInputElement;
  const themeNameInput = document.getElementById("themeNameInput") as HTMLInputElement;
  const numberOfShadesInput = document.getElementById("numberOfShadesInput") as HTMLInputElement;

  // Dropdown & Switches
  const themeColorModeSelect = document.getElementById("themeColorModeSelect") as HTMLSelectElement;
  const themeColorsModeSwitch = document.getElementById("themeColorsModeSwitch") as HTMLInputElement;
  const themeColorsModeLabel = document.getElementById("themeColorsModeLabel")!;
  const colorModeSwitch = document.getElementById("colorModeSwitch") as HTMLInputElement;
  const colorModeLabel = document.getElementById("colorModeLabel")!;

  // Hidden selects pour compatibilité
  const themeColorsModeHidden = document.getElementById("themeColorsModeSelect") as HTMLSelectElement;
  const numberOfColorsHidden = document.getElementById("numberOfColorsSelect") as HTMLSelectElement;

  // Boutons & containers
  const generateButton = document.getElementById("generateButton") as HTMLButtonElement;
  const showCssButton = document.getElementById("showCssButton") as HTMLButtonElement;
  const outputDiv = document.getElementById("outputDiv")!;
  const themeOverlay = document.getElementById("themeOverlay")!;
  const themeOverlayContent = document.getElementById("themeOverlayContent")!;
  const themeOverlayClose = document.getElementById("themeOverlayClose")!;
  const cssOverlay = document.getElementById("cssOverlay")!;
  const cssOverlayContent = document.getElementById("cssOverlayContent")!;
  const cssOverlayClose = document.getElementById("cssOverlayClose")!;

  // Switch Default/Complementary
  themeColorsModeSwitch.addEventListener("change", () => {
    const mode = themeColorsModeSwitch.checked
      ? ThemeColorsMode.COMPLEMENTARY
      : ThemeColorsMode.DEFAULT;
    themeColorsModeLabel.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    themeColorsModeHidden.value = mode;
  });

  // Switch Hex/RGB
  colorModeSwitch.addEventListener("change", () => {
    const cm = colorModeSwitch.checked ? ColorMode.RGB : ColorMode.HEX;
    colorModeLabel.textContent = cm;
    numberOfColorsHidden.value = cm.toLowerCase();
  });

  // Instanciation des services
  const colorsService = new ColorsService();
  const colorsPaletteService = new ColorsPaletteService(colorsService);
  const themeColorsService = new ThemeColorsService(colorsPaletteService);
  const themeDisplayService = new ThemeDisplayService(outputDiv);
  const cssGenerator = new ThemeCSSGenerator();

  // Handler de génération
  generateButton.addEventListener("click", () => {
    // 1. Lecture des valeurs utilisateur
    const hue = new HueValue(+hueInput.value);
    const saturation = new SaturationValue(+saturationInput.value);
    const name = themeNameInput.value.trim() || "theme";
    const numberOfShades = +numberOfShadesInput.value;
    const tcm = themeColorsModeHidden.value as ThemeColorsMode;
    const tnc = themeColorModeSelect.value as ThemeNumberOfColors;
    const cm = numberOfColorsHidden.value as ColorMode;

    // 2. Génération du thème
    const settings = new ThemeSettings(
      name, hue, saturation, numberOfShades,
      tcm, tnc, cm
    );
    const theme = themeColorsService.generateThemeColors(settings);

    // 3. Affichage horizontal des palettes
    outputDiv.innerHTML = "";
    themeDisplayService.display(theme);

    // 4. Récupère le tableau de teintes de la première palette
    const themeShadesArray = theme.palettes[0].shades; // Color[]

    // 5. Calcul de l’accent : teinte médiane
    const midIdx = Math.floor(themeShadesArray.length / 2);
    const accentColor = themeShadesArray[midIdx].toString();

    // 6. Calcul du décalage de 10% (au moins 1)
    const offset = Math.max(1, Math.round(themeShadesArray.length * 0.1));

    // 7. Détection du mode sombre
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    // 8. Calcul de la primary : médiane +/- offset
    const primaryIndex = isDark
      ? Math.min(themeShadesArray.length - 1, midIdx + offset)
      : Math.max(0, midIdx - offset);
    const primaryColor = themeShadesArray[primaryIndex].toString();

    // 9. Calcul des backgrounds light & dark
    const lightBg = themeShadesArray[
      Math.max(0, themeShadesArray.length - 2)
    ].toString();
    const darkBg = themeShadesArray[1]?.toString() ?? lightBg;

    // 10. Mise à jour des variables CSS
    const docStyle = document.documentElement.style;
    docStyle.setProperty("--accent-color", accentColor);
    docStyle.setProperty("--primary-color", primaryColor);
    docStyle.setProperty("--bg-light-color", lightBg);
    docStyle.setProperty("--bg-dark-color", darkBg);

    console.log("Accent (median):", accentColor);
    console.log(`Primary (${isDark ? "dark" : "light"}):`, primaryColor);
    console.log("BG light:", lightBg, "BG dark:", darkBg);

    // 11. Overlay plein écran sur clic de palette
    outputDiv.querySelectorAll(".palette").forEach(pal => {
      pal.addEventListener("click", () => {
        themeOverlayContent.innerHTML = "";
        themeOverlayContent.appendChild(pal.cloneNode(true));
        themeOverlay.style.display = "flex";
      });
    });

    // 12. Préparation de l'overlay CSS
    cssOverlayContent.textContent = cssGenerator.generate(theme);
    showCssButton.style.display = "inline-block";
  });

  // Fermeture des overlays
  themeOverlayClose.addEventListener("click", () => {
    themeOverlay.style.display = "none";
  });
  cssOverlayClose.addEventListener("click", () => {
    cssOverlay.style.display = "none";
  });
  showCssButton.addEventListener("click", () => {
    cssOverlay.style.display = "flex";
  });
});
