import{utilsMixin,SerializableElement,css,html,SharedStyles}from"../../../../components/adaptive-ui.js";const RichTextEditorBase=class extends utilsMixin(SerializableElement){static get is(){return"rich-text-editor"}static get properties(){return{params:{type:Object,htmlValue:{}},type:String,htmlValue:{notify:!0},columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=RichTextEditorBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var richTextEditor={RichTextEditorBase:RichTextEditorBase};class RichTextEditor extends RichTextEditorBase{constructor(){super();this.value=""}renderDefault(){return html`
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
    `}getValue(){return this.value}invalid(){}valid(){}createRenderRoot(){return this}firstUpdated(){const self=this;pell.init({element:document.getElementById("pell"),onChange:html$$1=>self.value=html$$1,defaultParagraphSeparator:"div",styleWithCSS:!1,classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"}})}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(RichTextEditor.is,RichTextEditor);export{richTextEditor as $richTextEditor,RichTextEditorBase};