import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
import _tmpl from "/1/module/esm/0/l/en-US/mi/lightning%2FcolorPickerCustom%23colorPickerCustom.html%2Fv%2F1_14_4-alpha/latest/lightning_colorPickerCustom_colorPickerCustom_html.js";
import labelBInput from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.bInput%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_bInput.js';
import labelBlueAbbr from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.blueAbbr%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_blueAbbr.js';
import labelColorPickerInstructions from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.colorPickerInstructions%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_colorPickerInstructions.js';
import labelErrorMessage from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.errorMessage%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_errorMessage.js';
import labelGInput from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.gInput%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_gInput.js';
import labelGreenAbbr from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.greenAbbr%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_greenAbbr.js';
import labelHexLabel from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.hexLabel%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_hexLabel.js';
import labelHueInput from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.hueInput%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_hueInput.js';
import labelRInput from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.rInput%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_rInput.js';
import labelRedAbbr from '/1/module/esm/0/l/en-US/mi/@salesforce%2Flabel%2FLightningColorPicker.redAbbr%2Fv%2F1_14_4-alpha/latest/@salesforce_label_LightningColorPicker_redAbbr.js';
import formFactorPropertyName from '/1/module/esm/0/l/en-US/mi/@salesforce%2Fclient%2FformFactor%2Fv%2F1_14_4-alpha/latest/@salesforce_client_formFactor.js';
import { keyCodes } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_4-alpha/latest/lightning_utilsPrivate.js';
import { generateUniqueId, getErrorMessage } from '/1/module/esm/0/l/en-US/mi/lightning%2FinputUtils%2Fv%2F1_14_4-alpha/latest/lightning_inputUtils.js';
import { fullHexValue, hexToRgb, rgbToHex, rgbToHsl, rgbToPosition, rgbToHsv } from '/1/module/esm/0/l/en-US/mi/lightning%2FcolorPickerCustom%23colorUtil%2Fv%2F1_14_4-alpha/latest/lightning_colorPickerCustom_colorUtil.js';
const i18n = {
  bInput: labelBInput,
  blueAbbr: labelBlueAbbr,
  colorPickerInstructions: labelColorPickerInstructions,
  errorMessage: labelErrorMessage,
  gInput: labelGInput,
  greenAbbr: labelGreenAbbr,
  hexLabel: labelHexLabel,
  hueInput: labelHueInput,
  rInput: labelRInput,
  redAbbr: labelRedAbbr
};
const CANVAS = {
  x: 198,
  y: 80
};

class LightningColorPickerCustom extends LightningElement {
  constructor() {
    super();
    this._hueValue = null;
    this._rgb = {
      red: '86',
      green: '121',
      blue: '192'
    };
    this._hex = '#5679C0';
    this._errorMessage = null;
    this._currentColor = null;
    this._initialized = false;
    this.uniqueId = generateUniqueId();
  }

  renderedCallback() {
    if (!this._initialized) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        // (*1*)
        if (formFactorPropertyName !== 'Large') {
          /**
           * We need to wait for one more animation frame and invoke .focus()
           * in iOS. This is because the positionLibray.js initially sets the position
           * of this color-picker element to "top: 0px" and then later repositions it asynchronously
           * it the next animation frames. The first (*1*) rAF callback is fired between
           * setting "top: 0px" and then later repositioning it. Calling .focus() in this callback
           * triggers a re-paint step and the page is scrolled to the top due to "top: 0px" being
           * present in the styles. To avoid this, we can delay the next re-paint after color-picker
           * is repositioned correctly by positionLibrary.js. Hence we wait for next animation frame
           * and then call .focus() to trigger the next re-paint after the color-picker is repositioned correctly
           * which was initially positioned with "top: 0px" by positionLibrary.js
           */
          // eslint-disable-next-line @lwc/lwc/no-async-operation
          requestAnimationFrame(() => this.focus());
        } else {
          this.focus();
        }
      });
      this.gradient();
      this.handleUpdateAnchor();
      this._initialized = true;
    }
  }

  get currentColor() {
    return this._currentColor;
  }

  set currentColor(value) {
    const fullHex = fullHexValue(value);
    this._currentColor = value;
    this._hex = fullHex;
    this._rgb = hexToRgb(fullHex);
  }

  focus() {
    this.anchorElement.focus();
  }

  get i18n() {
    return i18n;
  }

  get thumbnailStyle() {
    return `background: ${this._hex || 'hsl(220, 46%, 55%)'};`;
  }

  get gradientStyle() {
    return `background: ${this._hex || 'rgb(0, 85, 255)'}; position: relative;`;
  }

  get canvasRect() {
    return CANVAS;
  }

  get anchorElement() {
    return this.template.querySelector('*[data-id="color-anchor"]');
  }

  get thumbnailElement() {
    return this.template.querySelector('*[data-id="color-preview"]');
  }

  get gradientElement() {
    return this.template.querySelector('*[data-id="color-gradient"]');
  }

  get computedSaturationAndBrightness() {
    const rgb = this._rgb;
    const saturation = rgbToHsv(rgb).saturation || 0;
    const brightness = rgbToHsv(rgb).brightness || 0;
    return `Saturation: ${saturation.toFixed()}%. Brightness: ${brightness.toFixed()}%.`;
  }

  handlePreventDefault(event) {
    event.preventDefault();
  }

  selectColor(event) {
    this.dispatchEvent( // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('updatecolor', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        color: event.target.innerText
      }
    }));
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.onMouseDrag(event, true);
  }

  handleDrag(event) {
    this.onMouseDrag(event, false);
  }

  onChange() {
    this.rainbowCursor();
  }

  parseAndLimit(value) {
    let out = value;

    if (!value || parseInt(value, 10) < 0 || isNaN(value)) {
      out = 0;
    } else if (parseInt(value, 10) > 255) {
      out = 255;
    }

    return out;
  }

  handleRgbChange(event) {
    const target = event.currentTarget;
    const value = this.parseAndLimit(target.value); // Fix for no rerender on second bad value attempt

    target.value = value;
    const color = target.getAttribute('data-color-name');

    if (color === 'red') {
      this._rgb.red = value;
    } else if (color === 'green') {
      this._rgb.green = value;
    } else if (color === 'blue') {
      this._rgb.blue = value;
    }

    const rgb = this._rgb;
    const hue = rgbToHsl(rgb).hue;
    const position = this.rgbToPosition(rgb);
    const selectedColor = `#${rgbToHex(rgb)}`;
    this.updateRainbow(hue);
    this.setCanvasColor(hue);
    this.setCanvasCursor(position.x, position.y);
    this.updateSelectedColor(selectedColor);
  }

  handleHexChange(event) {
    const isInputValid = event.srcElement.validity.valid;

    if (isInputValid) {
      const selectedColor = fullHexValue(event.target.value);
      this.classList.remove('slds-has-error');
      this._errorMessage = null;
      const rgb = hexToRgb(selectedColor);
      this._rgb = rgb;
      const hue = rgbToHsl(rgb).hue;
      const position = this.rgbToPosition(rgb);
      this.updateRainbow(hue);
      this.setCanvasColor(hue);
      this.setCanvasCursor(position.x, position.y);
      this.updateSelectedColor(selectedColor);
    } else {
      event.srcElement.classList.add('slds-has-error');
      this._errorMessage = getErrorMessage(event.srcElement.validity, {
        patternMismatch: this.i18n.errorMessage
      });
    }
  }

  updateSelectedColor(selectedColor) {
    this.template.querySelector(`[data-primary-input]`).classList.remove('slds-has-error');
    this._errorMessage = null;
    this._hex = selectedColor;
    this.dispatchEvent( // eslint-disable-next-line lightning-global/no-custom-event-bubbling
    new CustomEvent('updateselectedcolor', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        color: selectedColor
      }
    }));
  }

  onMouseDrag(event, isGradientCursor) {
    const that = this;
    let drag = false;

    if (isGradientCursor) {
      this.getColorFromGradient(event);
    } else {
      this.rainbowCursor();
    }

    if (this._mousedown && this._mousemove && this._mouseup) {
      return;
    }

    that._mousedown = function () {
      drag = true;
      this._cursorActive = true;
    };

    that._mouseup = function () {
      drag = false;
      this._cursorActive = false;
      window.removeEventListener('mousedown', that._mousedown);
      window.removeEventListener('mouseup', that._mouseup);
      window.removeEventListener('mousemove', that._mousemove);
      that._mousedown = null;
      that._mouseup = null;
      that._mousemove = null;
    };

    that._mousemove = function (evt) {
      if (drag && isGradientCursor) {
        that.getColorFromGradient(evt);
      } else if (drag) {
        that.rainbowCursor();
      }
    };

    window.addEventListener('mousedown', that._mousedown);
    window.addEventListener('mouseup', that._mouseup);
    window.addEventListener('mousemove', that._mousemove);
  }

  gradient() {
    const hue = rgbToHsl(this._rgb).hue;
    this.canvasContext();
    this.setCanvasColor(hue);
    this.updateRainbow(hue);
  }

  getColorFromGradient(event) {
    let cursorPosition;

    if (event.type === 'keydown' && event.key !== 'Tab') {
      cursorPosition = this.gradientCursorPositionFromKeydown(event);
    } else if (event.type === 'mousedown' || event.type === 'mousemove') {
      cursorPosition = this.gradientCursorPosition(event);
    } else {
      return;
    }

    const x = cursorPosition.x;
    const y = cursorPosition.y; // Get the current HUE value and update the canvas & cursor

    this.setCanvasColor(this._hueValue); // set color from gradient

    this.setRGBValues(x, y);
  }

  rainbowCursor() {
    const rainbow = this.template.querySelector('*[data-id="hue-slider"]');
    const position = this._cachePosition || this.rgbToPosition(this._rgb);
    this.setCanvasColor(rainbow.value);
    this.setRGBValues(position.x, position.y);
    this.updateRainbow(rainbow.value);
  }

  updateRainbow(hue) {
    this._hueValue = hue;
  }

  handleUpdateAnchor() {
    const position = this._cachePosition || this.rgbToPosition(this._rgb);
    const anchor = this.anchorElement;
    const offset = anchor.offsetWidth / 2;
    const x = position.x - offset + 5;
    const y = position.y - offset - 5;
    const xPercent = x / this._canvas.width * 100;
    const yPercent = y / this._canvas.height * 100;
    anchor.style.left = `${xPercent}%`;
    anchor.style.top = `${yPercent}%`;
  }

  gradientCursorPosition(event) {
    const canvas = this._canvas;
    const gradientCanvas = canvas.getBoundingClientRect();
    let x = event.clientX - gradientCanvas.left;
    let y = event.clientY - gradientCanvas.top;

    if (x > gradientCanvas.width) {
      x = gradientCanvas.width - 1;
    }

    if (x < 0) {
      x = 0;
    }

    if (y > gradientCanvas.height) {
      y = gradientCanvas.height;
    }

    if (y < 0) {
      y = 0;
    }
    /*
     * Caching the position x & y in the component so that we can use it when moving the rainbow slider
     * instead of calculating the position of x & y each time.
     */


    this._cachePosition = {
      x,
      y
    };
    return {
      x,
      y
    };
  }

  gradientCursorPositionFromKeydown(event) {
    event.preventDefault();
    const canvas = this._canvas;
    const gradientCanvas = canvas.getBoundingClientRect();
    const keyCode = event.keyCode;
    let x, y;

    if (!this._cachePosition) {
      this._cachePosition = this.rgbToPosition(this._rgb);
    }

    const positionMap = {};
    positionMap[keyCodes.left] = {
      x: -1,
      y: 0
    };
    positionMap[keyCodes.up] = {
      x: 0,
      y: -1
    };
    positionMap[keyCodes.right] = {
      x: +1,
      y: 0
    };
    positionMap[keyCodes.down] = {
      x: 0,
      y: +1
    };
    const transform = positionMap[keyCode] ? positionMap[keyCode] : {
      x: 0,
      y: 0
    };
    x = this._cachePosition.x + transform.x;
    y = this._cachePosition.y + transform.y;

    if (x > gradientCanvas.width) {
      x = gradientCanvas.width - 1;
    }

    if (x < 0) {
      x = 0;
    }

    if (y > gradientCanvas.height) {
      y = gradientCanvas.height;
    }

    if (y < 0) {
      y = 0;
    }
    /*
     * Caching the position x & y in the component so that we can use it when moving the rainbow slider
     * instead of calculating the position of x & y each time.
     */


    this._cachePosition = {
      x,
      y
    };
    return {
      x,
      y
    };
  }

  setRGBValues(x, y) {
    const ctx = this._canvasCtx;
    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const rgb = {
      red: imageData[0],
      green: imageData[1],
      blue: imageData[2]
    };
    const color = `#${rgbToHex(rgb)}`;
    this._rgb = rgb;
    this.updateSelectedColor(color);
    this.handleUpdateAnchor();
  }

  setCanvasColor(hue) {
    const ctx = this._canvasCtx; // don't map the gradient onto extreme left and right to make extremes have their max values

    const white = ctx.createLinearGradient(1, 0, this.canvasRect.x - 1, 0);
    white.addColorStop(0, 'rgb(255,255,255)');
    white.addColorStop(1, 'hsl(' + hue + ', 100%, 50%)');
    ctx.fillStyle = white;
    ctx.fillRect(0, 0, this.canvasRect.x, this.canvasRect.y); // starting y is the first line to avoid blending the black into the hue, thus
    // making extreme values unselectable

    const black = ctx.createLinearGradient(0, 1, 0, this.canvasRect.y);
    black.addColorStop(0, 'rgba(0,0,0,0)');
    black.addColorStop(1, 'rgb(0,0,0)');
    ctx.fillStyle = black;
    ctx.fillRect(0, 0, this.canvasRect.x, this.canvasRect.y);
  }

  setCanvasCursor(x, y) {
    const position = {
      x,
      y
    };
    const anchor = this.anchorElement;
    const offset = anchor.offsetWidth / 2;
    x = position.x - offset + 5;
    y = position.y - offset - 5;
    const xPercent = x / this._canvas.width * 100;
    const yPercent = y / this._canvas.height * 100;
    anchor.style.left = `${xPercent}%`;
    anchor.style.top = `${yPercent}%`;
  }

  canvasContext() {
    this._canvas = this.template.querySelector('canvas');
    this._canvasCtx = this._canvas.getContext('2d');
    this._cursorActive = false;
  }

  handleKeydown(event) {
    this.getColorFromGradient(event);
  }

  rgbToPosition(rgb) {
    return rgbToPosition(rgb, this.canvasRect);
  }

}

_registerDecorators(LightningColorPickerCustom, {
  publicProps: {
    currentColor: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    _hueValue: 1,
    _rgb: 1,
    _hex: 1,
    _errorMessage: 1,
    _currentColor: 1
  },
  fields: ["_initialized"]
});

export default _registerComponent(LightningColorPickerCustom, {
  tmpl: _tmpl
});