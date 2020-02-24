import{utilsMixin,SerializableElement,css,html,Logger}from"../../../../../components/adaptive-ui.js";const TextAreaBase=class extends utilsMixin(SerializableElement){static get is(){return"text-area"}static get properties(){return{params:{type:Object,value:{}},type:String,value:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}else if((this.e.required||this.required)&&(this.getValue().length>this.e.max||this.getValue().length<this.e.min)){if(this.getValue().length>this.e.max){return new this.Validation(!1,this.e.name+" characters must not be more than "+this.e.max)}else if(this.getValue().length<this.e.min){return new this.Validation(!1,this.e.name+" characters must not be less than "+this.e.min)}}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=TextAreaBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var textArea={TextAreaBase:TextAreaBase};const TextAreaStyles=css`
.text-area {
    padding: 16px;
    position: relative;
} 
.textarea{
    border: 1px solid #b7b5b5;
    outline: 0;
    color: #013243;

}

.textarea:not([rows]) {
    max-height: 200px!important;
    min-height: 120px!important;
    overflow: auto;



}
.textarea.is-success{
    border: 2px solid #23d160;
    color: #23d160;
}
.textarea.is-danger{
    border: 2px solid #ff3860;
    color: #ff3860;
}
.lbl.is-success{
    color: #23d160!important;
}
.lbl.is-danger{
    color: #ff3860!important;
}
.textarea ~ label#label{
    position: absolute;
    top: 40px;
    left: 40px;
    font-size: 16px;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    transition: all 0.3s ease 0s;
}
.icon{
    position: absolute;
    right: 40px;
    bottom: 40px;
    display: none;
}
#danger-icon {
    visibility: hidden;
    margin-top: 8px;
}

#check-icon {
    visibility: hidden;
    margin-top: 8px;
}
#warning-text{
    display:none;
}
.counter{
    position: absolute;
    right: 45px;
    bottom: -10px;
    color: #cecece;
    right: 15px;
}
`;var textAreaCss={TextAreaStyles:TextAreaStyles};class TextArea extends TextAreaBase{static get styles(){return[TextAreaStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <div class="column is-paddingless">
      <div class="text-area-contaner">
        <div class="text-area">
          <textarea class="textarea" name="" id="input" @keyup="${this.count}" @focusin=${this.stickyLabel} @focusout=${this.stickyLabel2}}>${this.value}</textarea>
          <label id="label" class="lbl">${this.e.name}</label>
          <span id="danger-icon" class="icon is-small is-right">
            <fa-icon
              class="fas fa-exclamation-triangle icon"
              size="1em"
              color="#ff3860"
            ></fa-icon>
          </span>
          <span id="check-icon" class="icon is-small is-right">
            <fa-icon
              class="fas fa-check"
              size="1em"
              color="#23d160"
            ></fa-icon>
          </span>
          <div class="counter" id="count"><p>0/${this.max}</p>

        </div>
       
          <p id="warning-text" style="color:#ff3860;  margin-left: 2px;"></p>
         
      
      </div>

      </div>
    </div>
    
 `}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}valid(){const input=this.shadowRoot.querySelector(".textarea"),lbl=this.shadowRoot.querySelector("#label"),dangerIcon=this.shadowRoot.querySelector("#danger-icon"),checkIcon=this.shadowRoot.querySelector("#check-icon"),warningText=this.shadowRoot.querySelector("#warning-text");input.classList.remove("is-danger");lbl.classList.remove("is-danger");input.classList.add("is-success");lbl.classList.add("is-success");warningText.style.display="none";dangerIcon.style.visibility="hidden";checkIcon.style.visibility="visible"}invalid(validation){const input=this.shadowRoot.querySelector(".textarea"),lbl=this.shadowRoot.querySelector("#label"),dangerIcon=this.shadowRoot.querySelector("#danger-icon"),checkIcon=this.shadowRoot.querySelector("#check-icon"),warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block";warningText.innerText=validation.validationMessage;input.classList.remove("is-success");lbl.classList.remove("is-success");input.classList.add("is-danger");lbl.classList.add("is-danger");dangerIcon.style.visibility="visible";checkIcon.style.visibility="hidden";warningText.innerText=validation.validationMessage;Logger.i.debug(validation)}count(){const valueLength=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=valueLength+"/"+this.max;if(null!=this.e.max&&valueLength>this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(""!=this.value){this.stickyLabel()}}init(pElement,loader){super.init(pElement,loader);console.log(this.e.max);if(null==this.e.max){this.max="unlimited"}else{this.max=this.e.max}}stickyLabel2(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=40+"px";label.style.left=40+"px";label.style.fontSize=16+"px";label.style.fontWeight="normal"}}stickyLabel(){const label=this.shadowRoot.querySelector("#label");label.style.top=-7+"px";label.style.left=18+"px";label.style.fontSize=12+"px";label.style.fontWeight=700}}window.customElements.define(TextArea.is,TextArea);export{textArea as $textArea,textAreaCss as $textAreaCss,TextAreaBase,TextAreaStyles};