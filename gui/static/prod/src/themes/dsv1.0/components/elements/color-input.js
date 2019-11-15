import{html,ColorInputBase}from"../../../../components/adaptive-ui.js";class ColorInput extends ColorInputBase{createRenderRoot(){return this}renderDefault(){return html`
           
           <div class="column">
 <div class="field">
 ${this.title} 
        <paper-swatch-picker id="input" color="${this.value}"></paper-swatch-picker>
        </div>
        </div>
        `}static get properties(){return{}}getInput(){return this.qs("#input")}getValue(){return this.getInput().color}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(ColorInput.is,ColorInput);