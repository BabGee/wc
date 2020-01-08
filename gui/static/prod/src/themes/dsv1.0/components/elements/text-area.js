import{html,TextAreaBase,Logger}from"../../../../components/adaptive-ui.js";class TextArea extends TextAreaBase{renderDefault(){return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
<style>
/* .text-area {
  padding: 16px;
 
} */

.text-area .field.success{
    position: relative;
}
.text-area{
  position: relative;
}
.text-area textarea{
    height: 200px;
    position: relative;
    font-size: 14px!important;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4A4A4A;
    padding: 25px;
    border-radius: 6px;
    border: 1px solid #e5e5e5;
    box-shadow: none;
}
.text-area textarea::-webkit-input-placeholder { /* Edge */
    font-size: 14px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4A4A4A!important;
}
.text-area textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 14px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4A4A4A!important;
}
.text-area textarea::placeholder{
    font-size: 14px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4A4A4A!important;
}
.text-area .field.success::before{
    content: '\f00c';
    position: absolute;
}
#warning-text{
  display:none;
}
.counter{
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: #cecece;
}
</style>
<div class="text-area">
  <div class="field">
      <div class="control">
          <textarea 
            id="input" 
            class="textarea"
            @keyup="${this.count}" 
            placeholder=${this.e.name}>${this.value}</textarea>
          <div class="counter" id="count"><p>0/${this.max}</p></div>
      </div>
      <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
  </div>
</div>
 `}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}valid(validation){if("block"===this.qs("#warning-text").style.display){this.qs("#warning-text").style.display="none"}Logger.i.debug(validation);if(validation){}}invalid(validation){this.qs("#warning-text").style.display="block";Logger.i.debug(validation)}count(){const valueLength=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=valueLength+"/"+this.max;if(null!=this.e.max&&valueLength>this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);console.log(this.e.max);if(null==this.e.max){this.max="unlimited"}else{this.max=this.e.max}}}window.customElements.define(TextArea.is,TextArea);