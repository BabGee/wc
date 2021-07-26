import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { directive } from "../../node_modules/lit-html/lit-html.js";
import { Logger } from "../core/logger.js";
const _DEFAULT_ICONSET = 'icons'; // this directive waits for a promise to resolve then
// updates the part with the content
// TODO #262 this can be re-used so here might not be the best location

const resolvePromise = directive(promise => part => {
  // This first setValue call is synchronous, so
  // doesn't need the commit
  // TODO #263 part.setValue("Waiting for promise to resolve.");
  Promise.resolve(promise).then(resolvedValue => {
    part.setValue(resolvedValue);
    part.commit();
  });
});
/** Icons Loader and Renderer  */

class AdaptiveUiIcon extends LitElement {
  render() {
    return html`
        <svg viewBox="0 0 24 24" 
             preserveAspectRatio="xMidYMid meet" 
             focusable="false" 
             style="pointer-events: none; display: block; width: 100%; height: 100%;">
             <g>${resolvePromise(this._iconChanged(this.icon))}</g>
        </svg>
    <style>
      :host {
        /* @apply --layout-inline;*/
        display:flex;
        align-items: center;
        /* @apply --layout-center-center; */
        justify-content: center;
        
        position: relative;
        vertical-align: middle;
        fill: var(--adaptive-ui-icon-fill-color, rgb(255, 255, 255););
        stroke: var(--adaptive-ui-icon-stroke-color, none);
        width: var(--adaptive-ui-icon-width, 24px);
        height: var(--adaptive-ui-icon-height, 24px);
        /* @apply --iron-icon; */
      }

      :host([hidden]) {
        display: none;
      }
    </style>
    `;
  }

  static get properties() {
    return {
      /**
       * The name of the icon to use. The name should be of the form:
       * `iconset_name:icon_name`.
       */
      icon: {
        type: String
      },

      /**
       * The name of the theme to used, if one is specified by the
       * iconset.
       */
      theme: {
        type: String
      },

      /**
       * If using iron-icon without an iconset, you can set the src to be
       * the URL of an individual icon image file. Note that this will take
       * precedence over a given icon attribute.
       */
      src: {
        type: String
      }
    };
  }

  firstUpdated() {
    this._iconChanged(this.icon);
  }

  _iconChanged(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || _DEFAULT_ICONSET;
    return this._updateIcon();
  }

  _usesIconset() {
    return this.icon || !this.src;
  }
  /** @suppress {visibility} */


  _updateIcon() {
    return new Promise((resolve, reject) => {
      if (this._usesIconset()) {
        if (this._iconName === '') {
          // todo #264 remove icon
          // When the icon attribute is updated to undefined or empty value,
          // the current displayed icon should be removed
          if (this._iconset) {
            this._iconset.removeIcon(this);
          }
        } else if (this._iconsetName) {
          // load iconset
          // todo #265 if es6-bundled, the icons path is relative to the templates directory
          // const moduleSpecifier = `../themes/${window.THEME}/icons/${this._iconsetName}.js`; // TODO local
          const moduleSpecifier = `../../icons/${this._iconsetName}.js`; // bundled

          Logger.i.debug('loading module:' + moduleSpecifier);
          import(moduleSpecifier).then(module => {
            // module.default();
            // console.log('loaded module:' + moduleSpecifier);
            // console.log(module);
            // console.log(module.icons[this._iconName]);
            if (this._iconName) resolve(module.icons[this._iconName]); // this.requestUpdate('loadedIcon');
          });
        }
      }
    });
  }

}

customElements.define('adaptive-ui-icon', AdaptiveUiIcon);