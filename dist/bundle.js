/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./color-generator/main.ts":
/*!*********************************!*\
  !*** ./color-generator/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar HueValue_1 = __webpack_require__(/*! ./models/value-objects/HueValue */ \"./color-generator/models/value-objects/HueValue.ts\");\nvar SaturationValue_1 = __webpack_require__(/*! ./models/value-objects/SaturationValue */ \"./color-generator/models/value-objects/SaturationValue.ts\");\nvar ThemeColorsService_1 = __webpack_require__(/*! ./services/ThemeColorsService */ \"./color-generator/services/ThemeColorsService.ts\");\nvar ThemeSettings_1 = __webpack_require__(/*! ./models/settings/ThemeSettings */ \"./color-generator/models/settings/ThemeSettings.ts\");\nvar ColorsPaletteService_1 = __webpack_require__(/*! ./services/ColorsPaletteService */ \"./color-generator/services/ColorsPaletteService.ts\");\nvar ColorsService_1 = __webpack_require__(/*! ./services/ColorsService */ \"./color-generator/services/ColorsService.ts\");\nvar ThemeDisplayService_1 = __webpack_require__(/*! ./services/ThemeDisplayService */ \"./color-generator/services/ThemeDisplayService.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var hueInput = document.getElementById(\"hueInput\");\n    var saturationInput = document.getElementById(\"saturationInput\");\n    var themeNameInput = document.getElementById(\"themeNameInput\");\n    var numberOfShadesInput = document.getElementById(\"numberOfShadesInput\");\n    var colorModeSelect = document.getElementById(\"colorModeSelect\");\n    var themeColorModeSelect = document.getElementById(\"themeColorModeSelect\");\n    var generateButton = document.getElementById(\"generateButton\");\n    var outputDiv = document.getElementById(\"outputDiv\");\n    if (outputDiv !== null) {\n        var themeDisplayService_1 = new ThemeDisplayService_1.ThemeDisplayService(outputDiv);\n        var colorsService = new ColorsService_1.ColorsService();\n        var colorsPaletteService = new ColorsPaletteService_1.ColorsPaletteService(colorsService);\n        var themeColorsService_1 = new ThemeColorsService_1.ThemeColorsService(colorsPaletteService);\n        generateButton.addEventListener(\"click\", function () {\n            var hue = new HueValue_1.HueValue(Number(hueInput.value));\n            var saturation = new SaturationValue_1.SaturationValue(Number(saturationInput.value));\n            var themeName = themeNameInput.value;\n            var numberOfShades = Number(numberOfShadesInput.value);\n            var themeColorMode = themeColorModeSelect.value;\n            var colorMode = colorModeSelect.value;\n            var themeSettings = new ThemeSettings_1.ThemeSettings(themeName, hue, saturation, numberOfShades, themeColorMode, colorMode);\n            var theme = themeColorsService_1.generateThemeColors(themeSettings);\n            themeDisplayService_1.display(theme);\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./color-generator/main.ts?");

/***/ }),

/***/ "./color-generator/models/palettes/ColorsPalette.ts":
/*!**********************************************************!*\
  !*** ./color-generator/models/palettes/ColorsPalette.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColorsPalette = void 0;\n/**\n * Class representing a generic color palette\n */\nvar ColorsPalette = /** @class */ (function () {\n    function ColorsPalette(name, shades) {\n        this.name = name;\n        this.shades = shades;\n    }\n    return ColorsPalette;\n}());\nexports.ColorsPalette = ColorsPalette;\n\n\n//# sourceURL=webpack:///./color-generator/models/palettes/ColorsPalette.ts?");

/***/ }),

/***/ "./color-generator/models/palettes/HexColorsPalette.ts":
/*!*************************************************************!*\
  !*** ./color-generator/models/palettes/HexColorsPalette.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HexColorsPalette = void 0;\nvar ColorsPalette_1 = __webpack_require__(/*! ./ColorsPalette */ \"./color-generator/models/palettes/ColorsPalette.ts\");\n/**\n * Class representing a color palette consisting of Hex colors\n */\nvar HexColorsPalette = /** @class */ (function (_super) {\n    __extends(HexColorsPalette, _super);\n    function HexColorsPalette(name, shades) {\n        var _this = _super.call(this, name, shades) || this;\n        _this.shades = shades;\n        return _this;\n    }\n    return HexColorsPalette;\n}(ColorsPalette_1.ColorsPalette));\nexports.HexColorsPalette = HexColorsPalette;\n\n\n//# sourceURL=webpack:///./color-generator/models/palettes/HexColorsPalette.ts?");

/***/ }),

/***/ "./color-generator/models/palettes/RGBColorsPalette.ts":
/*!*************************************************************!*\
  !*** ./color-generator/models/palettes/RGBColorsPalette.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RGBColorsPalette = void 0;\nvar ColorsPalette_1 = __webpack_require__(/*! ./ColorsPalette */ \"./color-generator/models/palettes/ColorsPalette.ts\");\n/**\n * Class representing a color palette consisting of RGB colors\n */\nvar RGBColorsPalette = /** @class */ (function (_super) {\n    __extends(RGBColorsPalette, _super);\n    function RGBColorsPalette(name, shades) {\n        var _this = _super.call(this, name, shades) || this;\n        _this.shades = shades;\n        return _this;\n    }\n    return RGBColorsPalette;\n}(ColorsPalette_1.ColorsPalette));\nexports.RGBColorsPalette = RGBColorsPalette;\n\n\n//# sourceURL=webpack:///./color-generator/models/palettes/RGBColorsPalette.ts?");

/***/ }),

/***/ "./color-generator/models/settings/ThemeSettings.ts":
/*!**********************************************************!*\
  !*** ./color-generator/models/settings/ThemeSettings.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeSettings = void 0;\nvar ThemeSettings = /** @class */ (function () {\n    function ThemeSettings(name, hue, saturation, numberOfShades, themeColorMode, colorMode) {\n        this.name = name;\n        this.hue = hue;\n        this.saturation = saturation;\n        this.numberOfShades = numberOfShades;\n        this.themeColorMode = themeColorMode;\n        this.colorMode = colorMode;\n    }\n    return ThemeSettings;\n}());\nexports.ThemeSettings = ThemeSettings;\n\n\n//# sourceURL=webpack:///./color-generator/models/settings/ThemeSettings.ts?");

/***/ }),

/***/ "./color-generator/models/themes/HexThemeColors.ts":
/*!*********************************************************!*\
  !*** ./color-generator/models/themes/HexThemeColors.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HexThemeColors = void 0;\nvar ThemeColors_1 = __webpack_require__(/*! ./ThemeColors */ \"./color-generator/models/themes/ThemeColors.ts\");\n/**\n * Class representing a theme consisting of Hex color palettes\n */\nvar HexThemeColors = /** @class */ (function (_super) {\n    __extends(HexThemeColors, _super);\n    function HexThemeColors(name, palettes) {\n        var _this = _super.call(this, name, palettes) || this;\n        _this.palettes = palettes;\n        return _this;\n    }\n    return HexThemeColors;\n}(ThemeColors_1.ThemeColors));\nexports.HexThemeColors = HexThemeColors;\n\n\n//# sourceURL=webpack:///./color-generator/models/themes/HexThemeColors.ts?");

/***/ }),

/***/ "./color-generator/models/themes/RGBThemeColors.ts":
/*!*********************************************************!*\
  !*** ./color-generator/models/themes/RGBThemeColors.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RGBThemeColors = void 0;\nvar ThemeColors_1 = __webpack_require__(/*! ./ThemeColors */ \"./color-generator/models/themes/ThemeColors.ts\");\n/**\n * Class representing a theme consisting of RGB color palettes\n */\nvar RGBThemeColors = /** @class */ (function (_super) {\n    __extends(RGBThemeColors, _super);\n    function RGBThemeColors(name, palettes) {\n        var _this = _super.call(this, name, palettes) || this;\n        _this.palettes = palettes;\n        return _this;\n    }\n    return RGBThemeColors;\n}(ThemeColors_1.ThemeColors));\nexports.RGBThemeColors = RGBThemeColors;\n\n\n//# sourceURL=webpack:///./color-generator/models/themes/RGBThemeColors.ts?");

/***/ }),

/***/ "./color-generator/models/themes/ThemeColors.ts":
/*!******************************************************!*\
  !*** ./color-generator/models/themes/ThemeColors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeColors = void 0;\n/**\n * Class representing a generic theme consisting of color palettes\n */\nvar ThemeColors = /** @class */ (function () {\n    function ThemeColors(name, palettes) {\n        this.name = name;\n        this.palettes = palettes;\n    }\n    return ThemeColors;\n}());\nexports.ThemeColors = ThemeColors;\n\n\n//# sourceURL=webpack:///./color-generator/models/themes/ThemeColors.ts?");

/***/ }),

/***/ "./color-generator/models/types/ColorsMode.ts":
/*!****************************************************!*\
  !*** ./color-generator/models/types/ColorsMode.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColorMode = void 0;\nvar ColorMode;\n(function (ColorMode) {\n    ColorMode[\"HEX\"] = \"hex\";\n    ColorMode[\"RGB\"] = \"rgb\";\n})(ColorMode || (exports.ColorMode = ColorMode = {}));\n\n\n//# sourceURL=webpack:///./color-generator/models/types/ColorsMode.ts?");

/***/ }),

/***/ "./color-generator/models/types/ThemesColorsModes.ts":
/*!***********************************************************!*\
  !*** ./color-generator/models/types/ThemesColorsModes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeColorMode = void 0;\nvar ThemeColorMode;\n(function (ThemeColorMode) {\n    ThemeColorMode[\"SIMPLE\"] = \"simple\";\n    ThemeColorMode[\"BI_COLOR\"] = \"bi-colors\";\n    ThemeColorMode[\"TRI_COLOR\"] = \"tri-colors\";\n})(ThemeColorMode || (exports.ThemeColorMode = ThemeColorMode = {}));\n\n\n//# sourceURL=webpack:///./color-generator/models/types/ThemesColorsModes.ts?");

/***/ }),

/***/ "./color-generator/models/value-objects/HueValue.ts":
/*!**********************************************************!*\
  !*** ./color-generator/models/value-objects/HueValue.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HueValue = void 0;\nvar HueValue = /** @class */ (function () {\n    function HueValue(value) {\n        this.value = value;\n        if (value < 0 || value > 360) {\n            throw new Error('Invalid hue value');\n        }\n    }\n    HueValue.prototype.getValue = function () {\n        return this.value;\n    };\n    return HueValue;\n}());\nexports.HueValue = HueValue;\n\n\n//# sourceURL=webpack:///./color-generator/models/value-objects/HueValue.ts?");

/***/ }),

/***/ "./color-generator/models/value-objects/SaturationValue.ts":
/*!*****************************************************************!*\
  !*** ./color-generator/models/value-objects/SaturationValue.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SaturationValue = void 0;\nvar SaturationValue = /** @class */ (function () {\n    function SaturationValue(value) {\n        this.value = value;\n        if (value < 0 || value > 100) {\n            throw new Error('Invalid hue value');\n        }\n    }\n    SaturationValue.prototype.getValue = function () {\n        return this.value;\n    };\n    return SaturationValue;\n}());\nexports.SaturationValue = SaturationValue;\n\n\n//# sourceURL=webpack:///./color-generator/models/value-objects/SaturationValue.ts?");

/***/ }),

/***/ "./color-generator/models/value-objects/colors/HexColor.ts":
/*!*****************************************************************!*\
  !*** ./color-generator/models/value-objects/colors/HexColor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HexColor = void 0;\nvar HexColor = /** @class */ (function () {\n    function HexColor(value) {\n        this.value = value;\n        if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {\n            throw new Error('Invalid hex color');\n        }\n    }\n    HexColor.prototype.toString = function () {\n        return this.value;\n    };\n    return HexColor;\n}());\nexports.HexColor = HexColor;\n\n\n//# sourceURL=webpack:///./color-generator/models/value-objects/colors/HexColor.ts?");

/***/ }),

/***/ "./color-generator/models/value-objects/colors/RGBColor.ts":
/*!*****************************************************************!*\
  !*** ./color-generator/models/value-objects/colors/RGBColor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RGBColor = void 0;\nvar RGBColor = /** @class */ (function () {\n    function RGBColor(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n        if (![r, g, b].every(function (value) { return value >= 0 && value <= 255; })) {\n            throw new Error('Invalid RGB color');\n        }\n    }\n    RGBColor.prototype.toString = function () {\n        return \"rgb(\".concat(this.r, \", \").concat(this.g, \", \").concat(this.b, \")\");\n    };\n    return RGBColor;\n}());\nexports.RGBColor = RGBColor;\n\n\n//# sourceURL=webpack:///./color-generator/models/value-objects/colors/RGBColor.ts?");

/***/ }),

/***/ "./color-generator/services/ColorsPaletteService.ts":
/*!**********************************************************!*\
  !*** ./color-generator/services/ColorsPaletteService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColorsPaletteService = void 0;\nvar HexColorsPalette_1 = __webpack_require__(/*! ../models/palettes/HexColorsPalette */ \"./color-generator/models/palettes/HexColorsPalette.ts\");\nvar RGBColorsPalette_1 = __webpack_require__(/*! ../models/palettes/RGBColorsPalette */ \"./color-generator/models/palettes/RGBColorsPalette.ts\");\n/**\n * Class responsible for generating color palettes\n */\nvar ColorsPaletteService = /** @class */ (function () {\n    function ColorsPaletteService(colorService) {\n        this.colorService = colorService;\n    }\n    /**\n     * Generate a Hex color palette\n     * @param {string} name - The name of the palette\n     * @param {HueValue} hue - The hue of the color\n     * @param {SaturationValue} saturation - The saturation level (0 to 100)\n     * @param {number} numberOfShades - The number of shades in the palette\n     * @returns {HexColorsPalette} - The generated palette in Hex format\n     */\n    ColorsPaletteService.prototype.generateHexPalette = function (name, hue, saturation, numberOfShades) {\n        var shades = [];\n        var luminosityStep = 100 / (numberOfShades - 1);\n        for (var i = 0; i < numberOfShades; i++) {\n            var luminosity = i * luminosityStep;\n            var color = this.colorService.generateHexColorFromHue(hue, saturation.getValue(), luminosity);\n            shades.push(color);\n        }\n        return new HexColorsPalette_1.HexColorsPalette(name, shades);\n    };\n    /**\n     * Generate a RGB color palette\n     * @param {string} name - The name of the palette\n     * @param {HueValue} hue - The hue of the color\n     * @param {SaturationValue} saturation - The saturation level (0 to 100)\n     * @param {number} numberOfShades - The number of shades in the palette\n     * @returns {RGBColorsPalette} - The generated palette in RGB format\n     */\n    ColorsPaletteService.prototype.generateRGBPalette = function (name, hue, saturation, numberOfShades) {\n        var shades = [];\n        var luminosityStep = 100 / (numberOfShades - 1);\n        for (var i = 0; i < numberOfShades; i++) {\n            var luminosity = i * luminosityStep;\n            var color = this.colorService.generateRGBColorFromHue(hue, saturation.getValue(), luminosity);\n            shades.push(color);\n        }\n        return new RGBColorsPalette_1.RGBColorsPalette(name, shades);\n    };\n    return ColorsPaletteService;\n}());\nexports.ColorsPaletteService = ColorsPaletteService;\n\n\n//# sourceURL=webpack:///./color-generator/services/ColorsPaletteService.ts?");

/***/ }),

/***/ "./color-generator/services/ColorsService.ts":
/*!***************************************************!*\
  !*** ./color-generator/services/ColorsService.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColorsService = void 0;\nvar HexColor_1 = __webpack_require__(/*! ../models/value-objects/colors/HexColor */ \"./color-generator/models/value-objects/colors/HexColor.ts\");\nvar RGBColor_1 = __webpack_require__(/*! ../models/value-objects/colors/RGBColor */ \"./color-generator/models/value-objects/colors/RGBColor.ts\");\n/**\n * ColorsService - Service to manipulate and generate colors\n */\nvar ColorsService = /** @class */ (function () {\n    function ColorsService() {\n    }\n    /**\n     * Generate a HexColor based on HueValue, Saturation, and Luminosity\n     * @param {HueValue} hue - The hue of the color\n     * @param {number} saturation - The saturation level (0 to 100)\n     * @param {number} luminosity - The luminosity level (0 to 100)\n     * @returns {HexColor} - The generated Hex color\n     */\n    ColorsService.prototype.generateHexColorFromHue = function (hue, saturation, luminosity) {\n        var hexValue = this.hslToHex(hue.getValue(), saturation, luminosity);\n        return new HexColor_1.HexColor(hexValue);\n    };\n    /**\n     * Generate a RGBColor based on HueValue, Saturation, and Luminosity\n     * @param {HueValue} hue - The hue of the color\n     * @param {number} saturation - The saturation level (0 to 100)\n     * @param {number} luminosity - The luminosity level (0 to 100)\n     * @returns {RGBColor} - The generated RGB color\n     */\n    ColorsService.prototype.generateRGBColorFromHue = function (hue, saturation, luminosity) {\n        var rgbValue = this.hslToRGB(hue.getValue(), saturation, luminosity);\n        return new (RGBColor_1.RGBColor.bind.apply(RGBColor_1.RGBColor, __spreadArray([void 0], rgbValue, false)))();\n    };\n    /**\n     * Convert HSL values to Hex color\n     * @private\n     * @param {number} h - HueValue\n     * @param {number} s - Saturation\n     * @param {number} l - Luminosity\n     * @returns {string} - Hex color\n     */\n    ColorsService.prototype.hslToHex = function (h, s, l) {\n        s /= 100;\n        l /= 100;\n        var c = (1 - Math.abs(2 * l - 1)) * s;\n        var x = c * (1 - Math.abs((h / 60) % 2 - 1));\n        var m = l - c / 2;\n        var r = 0;\n        var g = 0;\n        var b = 0;\n        if (h >= 0 && h < 60) {\n            r = c;\n            g = x;\n            b = 0;\n        }\n        else if (h >= 60 && h < 120) {\n            r = x;\n            g = c;\n            b = 0;\n        }\n        else if (h >= 120 && h < 180) {\n            r = 0;\n            g = c;\n            b = x;\n        }\n        else if (h >= 180 && h < 240) {\n            r = 0;\n            g = x;\n            b = c;\n        }\n        else if (h >= 240 && h < 300) {\n            r = x;\n            g = 0;\n            b = c;\n        }\n        else if (h >= 300 && h < 360) {\n            r = c;\n            g = 0;\n            b = x;\n        }\n        var rString = Math.round((r + m) * 255).toString(16);\n        var gString = Math.round((g + m) * 255).toString(16);\n        var bString = Math.round((b + m) * 255).toString(16);\n        return \"#\".concat(rString.padStart(2, '0')).concat(gString.padStart(2, '0')).concat(bString.padStart(2, '0'));\n    };\n    /**\n     * Convert HSL values to RGB color\n     * @private\n     * @param {number} h - HueValue\n     * @param {number} s - Saturation\n     * @param {number} l - Luminosity\n     * @returns {[number, number, number]} - RGB color as a tuple\n     */\n    ColorsService.prototype.hslToRGB = function (h, s, l) {\n        s /= 100;\n        l /= 100;\n        var c = (1 - Math.abs(2 * l - 1)) * s;\n        var x = c * (1 - Math.abs((h / 60) % 2 - 1));\n        var m = l - c / 2;\n        var r = 0;\n        var g = 0;\n        var b = 0;\n        if (h >= 0 && h < 60) {\n            r = c;\n            g = x;\n            b = 0;\n        }\n        else if (h >= 60 && h < 120) {\n            r = x;\n            g = c;\n            b = 0;\n        }\n        else if (h >= 120 && h < 180) {\n            r = 0;\n            g = c;\n            b = x;\n        }\n        else if (h >= 180 && h < 240) {\n            r = 0;\n            g = x;\n            b = c;\n        }\n        else if (h >= 240 && h < 300) {\n            r = x;\n            g = 0;\n            b = c;\n        }\n        else if (h >= 300 && h < 360) {\n            r = c;\n            g = 0;\n            b = x;\n        }\n        r = Math.round((r + m) * 255);\n        g = Math.round((g + m) * 255);\n        b = Math.round((b + m) * 255);\n        return [r, g, b];\n    };\n    return ColorsService;\n}());\nexports.ColorsService = ColorsService;\n\n\n//# sourceURL=webpack:///./color-generator/services/ColorsService.ts?");

/***/ }),

/***/ "./color-generator/services/ThemeColorsService.ts":
/*!********************************************************!*\
  !*** ./color-generator/services/ThemeColorsService.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeColorsService = void 0;\nvar HueValue_1 = __webpack_require__(/*! ../models/value-objects/HueValue */ \"./color-generator/models/value-objects/HueValue.ts\");\nvar HexThemeColors_1 = __webpack_require__(/*! ../models/themes/HexThemeColors */ \"./color-generator/models/themes/HexThemeColors.ts\");\nvar RGBThemeColors_1 = __webpack_require__(/*! ../models/themes/RGBThemeColors */ \"./color-generator/models/themes/RGBThemeColors.ts\");\nvar ColorsMode_1 = __webpack_require__(/*! ../models/types/ColorsMode */ \"./color-generator/models/types/ColorsMode.ts\");\nvar ThemesColorsModes_1 = __webpack_require__(/*! ../models/types/ThemesColorsModes */ \"./color-generator/models/types/ThemesColorsModes.ts\");\n/**\n * Service responsible for generating theme colors.\n */\nvar ThemeColorsService = /** @class */ (function () {\n    function ThemeColorsService(colorsPaletteService) {\n        this.colorsPaletteService = colorsPaletteService;\n    }\n    /**\n     * Generate Theme Colors based on settings\n     * @param {ThemeSettings} settings - Theme settings\n     * @returns {HexThemeColors | RGBThemeColors} - Theme colors (either Hex or RGB)\n     */\n    ThemeColorsService.prototype.generateThemeColors = function (settings) {\n        if (settings.colorMode === ColorsMode_1.ColorMode.HEX) {\n            return this.generateHexThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeColorMode);\n        }\n        else {\n            return this.generateRGBThemeColors(settings.name, settings.hue, settings.saturation, settings.numberOfShades, settings.themeColorMode);\n        }\n    };\n    /**\n     * Generate Hex Theme Colors\n     * @param {string} name - Theme name\n     * @param {HueValue} hue - Hue value\n     * @param {SaturationValue} saturation - Saturation level (0 to 100)\n     * @param {number} numberOfShades - Number of shades in each palette\n     * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues\n     * @returns {RGBThemeColors} - RGB theme colors\n     */\n    ThemeColorsService.prototype.generateHexThemeColors = function (name, hue, saturation, numberOfShades, themeColorMode) {\n        var _this = this;\n        var hues = this.generateHues(hue, themeColorMode);\n        var palettes = hues.map(function (h) { return _this.colorsPaletteService.generateHexPalette(name, h, saturation, numberOfShades); });\n        return new HexThemeColors_1.HexThemeColors(name, palettes);\n    };\n    /**\n     * Generate RGB Theme Colors\n     * @param {string} name - Theme name\n     * @param {HueValue} hue - Hue value\n     * @param {SaturationValue} saturation - Saturation level (0 to 100)\n     * @param {number} numberOfShades - Number of shades in each palette\n     * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues\n     * @returns {RGBThemeColors} - RGB theme colors\n     */\n    ThemeColorsService.prototype.generateRGBThemeColors = function (name, hue, saturation, numberOfShades, themeColorMode) {\n        var _this = this;\n        var hues = this.generateHues(hue, themeColorMode);\n        var palettes = hues.map(function (h) { return _this.colorsPaletteService.generateRGBPalette(name, h, saturation, numberOfShades); });\n        return new RGBThemeColors_1.RGBThemeColors(name, palettes);\n    };\n    /**\n     * Generate an array of HueValue based on the ThemeColorMode\n     * @param {HueValue} baseHue - Base hue value\n     * @param {ThemeColorMode} themeColorMode - Mode defining the number of hues to generate\n     * @returns {HueValue[]} - Array of HueValue\n     */\n    ThemeColorsService.prototype.generateHues = function (baseHue, themeColorMode) {\n        var hues = [baseHue];\n        switch (themeColorMode) {\n            case ThemesColorsModes_1.ThemeColorMode.BI_COLOR:\n                hues.push(new HueValue_1.HueValue((baseHue.getValue() + 20) % 360));\n                break;\n            case ThemesColorsModes_1.ThemeColorMode.TRI_COLOR:\n                hues.push(new HueValue_1.HueValue((baseHue.getValue() + 20) % 360));\n                hues.push(new HueValue_1.HueValue((baseHue.getValue() - 20 + 360) % 360));\n                break;\n            default:\n                break;\n        }\n        return hues;\n    };\n    return ThemeColorsService;\n}());\nexports.ThemeColorsService = ThemeColorsService;\n\n\n//# sourceURL=webpack:///./color-generator/services/ThemeColorsService.ts?");

/***/ }),

/***/ "./color-generator/services/ThemeDisplayService.ts":
/*!*********************************************************!*\
  !*** ./color-generator/services/ThemeDisplayService.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ThemeDisplayService = void 0;\nvar ThemeDisplayService = /** @class */ (function () {\n    function ThemeDisplayService(outputElement) {\n        this.outputElement = outputElement;\n    }\n    ThemeDisplayService.prototype.display = function (theme) {\n        var _this = this;\n        if (!this.outputElement)\n            return;\n        this.outputElement.innerHTML = '';\n        theme.palettes.forEach(function (palette) {\n            var paletteDiv = document.createElement('div');\n            paletteDiv.classList.add('palette');\n            palette.shades.forEach(function (shade) {\n                var colorDiv = document.createElement('div');\n                colorDiv.style.backgroundColor = shade.toString();\n                colorDiv.classList.add('color-box');\n                paletteDiv.appendChild(colorDiv);\n            });\n            _this.outputElement.appendChild(paletteDiv);\n        });\n    };\n    return ThemeDisplayService;\n}());\nexports.ThemeDisplayService = ThemeDisplayService;\n\n\n//# sourceURL=webpack:///./color-generator/services/ThemeDisplayService.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./color-generator/main.ts");
/******/ 	
/******/ })()
;