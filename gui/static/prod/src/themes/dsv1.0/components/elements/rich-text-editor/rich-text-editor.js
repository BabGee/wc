import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { RichTextEditorBase } from "../../../../../elements/base/rich-text-editor.js";
import { init } from "./pell.js";
import { richTextEditorStyles } from "./rich-text-editor-css.js";

class RichTextEditor extends RichTextEditorBase {
  constructor() {
    super();
    this.value = '';
  }

  renderDefault() {
    return html`
     <div id="pell"></div>
     <span class="validation-info" style="display: none;"></span>
 `;
  }

  static get styles() {
    return [richTextEditorStyles, css`
      :host {
        display: block;
      }
    `];
  }

  getValue() {
    return this.value;
  }

  invalid(message) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'block';

    if (message) {
      this.shadowRoot.querySelector('.validation-info').textContent = message;
    }
  }

  valid(validation) {
    this.shadowRoot.querySelector('.validation-info').style.display = 'none';
  }

  firstUpdated() {
    const self = this; // Initialize pell on an HTMLElement

    init({
      // <HTMLElement>, required
      element: this.shadowRoot.getElementById('pell'),
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

}

window.customElements.define(RichTextEditor.is, RichTextEditor);