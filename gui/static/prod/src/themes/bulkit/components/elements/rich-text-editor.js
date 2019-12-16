import{css,html}from"../../../../../node_modules/lit-element/lit-element.js";import{RichTextEditorBase}from"../../../../elements/base/rich-text-editor.js";import{SharedStyles}from"../../styles/shared-styles.js";import pell from"../../../../../node_modules/pell/src/pell.js";class RichTextEditor extends RichTextEditorBase{constructor(){super();this.value=""}renderDefault(){return html`
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
      <label class="form-label"><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}</label>
      <div class="control">
        <div id="pell"></div>
      </div>
    </div>
    </div>
      `}static get styles(){return css`
    `}getValue(){return this.value}invalid(){}valid(){}createRenderRoot(){return this}firstUpdated(){const self=this;pell.init({element:document.getElementById("pell"),onChange:html=>self.value=html,defaultParagraphSeparator:"div",styleWithCSS:!1,classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"}})}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(RichTextEditor.is,RichTextEditor);