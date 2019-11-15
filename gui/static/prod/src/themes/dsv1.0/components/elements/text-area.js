import{html,TextAreaBase,Logger}from"../../../../components/adaptive-ui.js";class TextArea extends TextAreaBase{renderDefault(){return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
<style>
.text-area .field.success{
    position: relative;
}
.text-area textarea{
    height: 200px;
    position: relative;
    font-size: 16px!important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243;
    padding: 25px;
    border-radius: 6px;
    border: solid 1px #b7b5b5;
}
.text-area textarea::-webkit-input-placeholder { /* Edge */
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area textarea::placeholder{
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #013243!important;
}
.text-area .field.success::before{
    content: '\f00c';
    position: absolute;
}
#warning-text{
  display:none;
}
</style>
<div class="text-area">
  <div class="field">
      <div class="control">
          <textarea id="input" class="textarea" placeholder=${this.e.name}>${this.value}</textarea>
      </div>
      <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
  </div>
</div>
 `}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}valid(validation){"block"===this.qs("#warning-text").style.display?this.qs("#warning-text").style.display="none":this.qs("#warning-text").style.display="block";Logger.i.debug(validation);if(validation){}}invalid(validation){this.qs("#warning-text").style.display="block";Logger.i.debug(validation)}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}window.customElements.define(TextArea.is,TextArea);