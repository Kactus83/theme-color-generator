import { HueValue } from '../value-objects/HueValue';
import { SaturationValue } from '../value-objects/SaturationValue';
import { ColorMode } from '../types/ColorsMode';
import { ThemeColorMode } from '../types/ThemesColorsModes';

export class ThemeSettings {
  constructor(
    public name: string,
    public hue: HueValue,
    public saturation: SaturationValue,
    public numberOfShades: number,
    public themeColorMode: ThemeColorMode,
    public colorMode: ColorMode
  ) {}
}