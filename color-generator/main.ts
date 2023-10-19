import { HueValue } from "./models/value-objects/HueValue";
import { SaturationValue } from "./models/value-objects/SaturationValue";
import { ColorsPaletteService } from "./services/ColorsPaletteService";
import { ThemeColorsService } from "./services/ThemeColorsService";
import { ColorsService } from "./services/ColorsService";
import { ThemeDisplayService } from "./services/ThemeDisplayService";

document.addEventListener("DOMContentLoaded", function() {
    const hueInput = document.getElementById("hueInput") as HTMLInputElement;
    const saturationInput = document.getElementById("saturationInput") as HTMLInputElement;
    const themeNameInput = document.getElementById("themeNameInput") as HTMLInputElement;
    const numberOfShadesInput = document.getElementById("numberOfShadesInput") as HTMLInputElement;
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

            const theme = themeColorsService.generateHexThemeColors(themeName, hue, saturation, numberOfShades);

            themeDisplayService.display(theme);
        });
    }   
});
