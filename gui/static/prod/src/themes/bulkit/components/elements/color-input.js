import{html,SharedStyles,ColorInputBase}from"../../../../components/adaptive-ui.js";class ColorInput extends ColorInputBase{renderDefault(){return html`
            ${SharedStyles}
           <div class="column">
 <div class="field">
 ${this.title} 
        <paper-swatch-picker id="input" color="${this.value}"></paper-swatch-picker>
        </div>
        </div>
        `}static get properties(){return{}}getInput(){return this.qs("#input")}getValue(){//   return this.selectedColor;
return this.getInput().color}valid(validation){}invalid(validation){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(ColorInput.is,ColorInput);