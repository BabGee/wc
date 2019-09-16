import { css, html } from "../../../../../node_modules/lit-element/lit-element.js";
import { RichTextEditorBase } from "../../../../elements/base/rich-text-editor.js";
import { SharedStyles } from "../../styles/shared-styles.js";
import pell from "../../../../../node_modules/pell/dist/pell.min.js";

class RichTextEditor extends RichTextEditorBase {
  constructor() {
    super();
    this.value = '';
  }

  renderDefault() {
    return html`
         ${SharedStyles}
         <link rel="stylesheet" type="text/css" href="https://unpkg.com/pell/dist/pell.min.css">
         <style>
         #pell {
              border: 1px solid var(--app-default-color);
              border-radius: 0;
              -webkit-box-shadow: none;
              box-shadow: none;
        }
         </style>
    <div class="column">
    <div class="field">
      <label class="form-label"><span><iron-icon icon=${this.e.icon || 'icons:input'}></iron-icon></span>${this.e.name}</label>
      <div class="control">
        <div id="pell"></div>
      </div>
    </div>
    </div>
      `;
  }

  static get styles() {
    return css`
    `;
  }

  getValue() {
    return this.value;
  }

  invalid(message) {}

  valid(validation) {}

  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable.
     */
    return this;
  }

  firstUpdated() {
    const self = this; // Initialize pell on an HTMLElement

    pell.init({
      // <HTMLElement>, required
      element: document.getElementById('pell'),
      // <Function>, required
      // Use the output html, triggered by element's `oninput` event
      onChange: html => self.value = html,
      // <string>, optional, default = 'div'
      // Instructs the editor which element to inject via the return key
      defaultParagraphSeparator: 'div',
      // <boolean>, optional, default = false
      // Outputs <span style="font-weight: bold;"></span> instead of <b></b>
      styleWithCSS: false,
      // classes<Array[string]> (optional)
      // Choose your custom class names
      classes: {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content',
        selected: 'pell-button-selected'
      }
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

window.customElements.define(RichTextEditor.is, RichTextEditor);