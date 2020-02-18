import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const SubdomainInputBase=class extends utilsMixin(SerializableElement){static get is(){return"subdomain-input"}static get properties(){return{}}invalid(validation){this.qs("#message").innerText=validation.message}valid(validation){this.qs("#message").innerText=validation.message}getValue(){return this.qs("#input").value}getName(){return this.e.formName}validate(){const value=this.getValue();if(this.required&&!value){return new this.Validation(!1,this.e.name+" is Required")}if(value){let message,regex;message="must be alphanumeric; a-z, 0-9 or hyphen with no spaces";regex=/^[a-z0-9\-]*$/gmi;if(!regex.test(value)){return new this.Validation(!1,message)}message="cannot start or end with a hyphen";if(value.startsWith("-")||value.endsWith("-")){return new this.Validation(!1,message)}message="must have between 3 and 63 characters";if(value.length<this.e.min||value.length>this.e.max){return new this.Validation(!1,message+", Current "+value.length)}}return new this.Validation(!0,"Valid Domain")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);this;this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var subdomainInput={SubdomainInputBase:SubdomainInputBase};const SubdomainInputStyles=css`
.message{
    text-align:center;
    padding:10px;
}
.input{
    text-align:center;
    padding:10px;
}
`;var subdomainInputCss={SubdomainInputStyles:SubdomainInputStyles};class SubdomainInput extends SubdomainInputBase{static get styles(){return[SubdomainInputStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        <div class="message">

            <label for="input">${this.e.name}</label>

            Allowed characters
            <strong> a-z</strong>,
            <strong> 0-9</strong>,
            <strong> -</strong> but not as a starting or ending character. <br>must have between 
            <strong>${this.e.min}</strong> and 
            <strong>${this.e.max}</strong> 
            characters
        </div>
        <div class="input">
            <input id="input" type="text" value="${this.value}"> <input type="text" value="${this.e.kind}" disabled>
        </div>
        <div id="message">
        </div>`}invalid(validation){this.qs("#message").innerText=validation.message}valid(validation){this.qs("#message").innerText=validation.message}getValue(){return this.qs("#input").value}}window.customElements.define(SubdomainInput.is,SubdomainInput);export{subdomainInput as $subdomainInput,subdomainInputCss as $subdomainInputCss,SubdomainInputBase,SubdomainInputStyles};