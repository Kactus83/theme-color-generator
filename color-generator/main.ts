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

document.addEventListener("DOMContentLoaded", function() {
  const hueInput = document.getElementById("hueInput") as HTMLInputElement;
  const saturationInput = document.getElementById("saturationInput") as HTMLInputElement;
  const themeNameInput = document.getElementById("themeNameInput") as HTMLInputElement;
  const numberOfShadesInput = document.getElementById("numberOfShadesInput") as HTMLInputElement;
  const themeColorsModeSelect = document.getElementById("themeColorsModeSelect") as HTMLSelectElement;
  const numberOfColorsSelect = document.getElementById("numberOfColorsSelect") as HTMLSelectElement;
  const themeColorModeSelect = document.getElementById("themeColorModeSelect") as HTMLSelectElement;
  const generateButton = document.getElementById("generateButton") as HTMLButtonElement;
  const outputDiv = document.getElementById("outputDiv");

  if (outputDiv !== null) {
    const themeDisplayService = new ThemeDisplayService(outputDiv);

    const colorsService = new ColorsService();
    const colorsPaletteService = new ColorsPaletteService(colorsService);
    const themeColorsService = new ThemeColorsService(colorsPaletteService);

    generateButton.addEventListener("click", () => {
      const hue = new HueValue(Number(hueInput.value));
      const saturation = new SaturationValue(Number(saturationInput.value));
      const themeName = themeNameInput.value;
      const numberOfShades = Number(numberOfShadesInput.value);  
      const themeColorsMode = themeColorsModeSelect.value as ThemeColorsMode;
      const themeNumberOfColors = themeColorModeSelect.value as ThemeNumberOfColors;
      const colorMode = numberOfColorsSelect.value as ColorMode;

      const themeSettings = new ThemeSettings(themeName, hue, saturation, numberOfShades, themeColorsMode, themeNumberOfColors, colorMode);
      const theme = themeColorsService.generateThemeColors(themeSettings);

      themeDisplayService.display(theme);
    });
  }
});
