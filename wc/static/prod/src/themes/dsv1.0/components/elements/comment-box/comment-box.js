import{utilsMixin,SerializableElement,css,html,Logger}from"../../../../../components/adaptive-ui.js";const CommentBoxBase=class extends utilsMixin(SerializableElement){static get is(){return"comment-box"}static get properties(){return{params:{type:Object,value:{}},type:String,value:String,columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if((this.e.required||this.required)&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}else if((this.e.required||this.required)&&(this.getValue().length>this.e.max||this.getValue().length<this.e.min)){if(this.getValue().length>this.e.max){return new this.Validation(!1,this.e.name+" characters must not be more than "+this.e.max)}else if(this.getValue().length<this.e.min){return new this.Validation(!1,this.e.name+" characters must not be less than "+this.e.min)}}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=CommentBoxBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var commentBox={CommentBoxBase:CommentBoxBase};const CommentBoxStyles=css`
.text-area {
    padding: 16px;
    position: relative;
} 
.mytextarea{
    border: 1px solid #b7b5b5;
    outline: 0;
    color: #013243;
    box-shadow: none!important;

    min-height: 150px;
    max-height: 150px;
    padding:5px;
    width: 100%;
    border-radius: 6px;
    
    border-color: rgb(183, 181, 181);
    

}

#label{
    position: absolute;
    top: 28px;
    left: 40px;
    font-size: 16px;
    width: 100%;
    color: rgb(1, 50, 67);
    letter-spacing: 0.5px;
    pointer-events: none;
    transition: all 0.3s ease 0s;
}

.mytextarea.is-success{
    border: 2px solid #23d160;
    color: #23d160;
}
.mytextarea.is-danger{
    border: 2px solid #ff3860;
    color: #ff3860;
}
.lbl.is-success{
    color: #23d160!important;
}
.lbl.is-danger{
    color: #ff3860!important;
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
`;var commentBoxCss={CommentBoxStyles:CommentBoxStyles};class CommentBox extends CommentBoxBase{static get styles(){return[CommentBoxStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <div class="column is-paddingless">
      <div class="text-area-contaner">
        <div class="text-area">
          <textarea class="mytextarea" name="" id="input" @keyup="${this.count}" @focusin=${this.stickyLabel} @focusout=${this.stickyLabel2}}>${this.value}</textarea>
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
    
 `}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}valid(){const input=this.shadowRoot.querySelector(".mytextarea"),lbl=this.shadowRoot.querySelector("#label"),warningText=this.shadowRoot.querySelector("#warning-text");input.classList.remove("is-danger");lbl.classList.remove("is-danger");input.classList.add("is-success");lbl.classList.add("is-success");warningText.style.display="none"}invalid(validation){const input=this.shadowRoot.querySelector(".mytextarea"),lbl=this.shadowRoot.querySelector("#label"),warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block";warningText.innerText=validation.validationMessage;input.classList.remove("is-success");lbl.classList.remove("is-success");input.classList.add("is-danger");lbl.classList.add("is-danger");warningText.innerText=validation.validationMessage;Logger.i.debug(validation)}count(){const valueLength=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=valueLength+"/"+this.max;if(null!=this.e.max&&valueLength>this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this;if(""!=this.value){this.stickyLabel()}}init(pElement,loader){super.init(pElement,loader);console.log(this.e.max);if(null==this.e.max){this.max="unlimited"}else{this.max=this.e.max}}stickyLabel2(e){const label=this.shadowRoot.querySelector("#label"),input=e.target.value;if(""==input){label.style.top=28+"px";label.style.left=40+"px";label.style.fontSize=16+"px";label.style.fontWeight="normal"}}stickyLabel(){const label=this.shadowRoot.querySelector("#label");label.style.top=-7+"px";label.style.left=18+"px";label.style.fontSize=12+"px";label.style.fontWeight=700}}window.customElements.define(CommentBox.is,CommentBox);export{commentBox as $commentBox,commentBoxCss as $commentBoxCss,CommentBoxBase,CommentBoxStyles};