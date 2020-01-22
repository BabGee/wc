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
  padding: 16px;
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


/* NEW IMPLEMENTATION */


.form {
  font-size: 16px;
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.form textarea{
    
    
    padding-top: 30px;
    
}
.form textarea:focus{
    outline: none;
}
.form label{
    position: absolute;
    top: -78px;
    left: 11px; 
    height: 100%;
    width: 100%;
    pointer-events: none;
    
}
.form label::after{
    content: '';
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: #595f6e;
    transform: translateX(-100%);
    transition: transform .3s ease;
}
.content-name{
    position: absolute;
    bottom: 70px;
    left: 10px;
    transition: all .3s ease;
}
.form textarea:focus + .label-name .content-name, .form input:valid + .label-name .content-name{
    transform: translateY(-17px);
    font-size: 85%;
    color: var(--app-default-color);
    margin-left: 0px;
    margin-bottom: 7px;
    
}
.form textarea:focus + .label-name::after, .form input:valid + .label-name::after{
    transform: translateX(50%);
    margin-left: 20px;
    
}

textarea{

    padding-top: 20px;
    
}

textarea:focus, textarea:hover{

  border-color: var(--app-default-color);
  
}


</style>





 <div class="text-area">
        <div class="animait">

            <div class="form">
            <div class="field">
            <div class="control">
   
                <textarea class="textarea" name="" id="input" @keyup="${this.count}">${this.value}</textarea>

                <label for="name" class="label-name"><span class="content-name">${this.e.name}</span></label>
                <div class="counter" id="count"><p>0/${this.max}</p></div>
            </div>
            </div>
            </div>
            <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
            
        </div>
    </div>


 `}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}valid(validation){if("block"===this.qs("#warning-text").style.display){this.qs("#warning-text").style.display="none"}Logger.i.debug(validation);if(validation){}}invalid(validation){this.qs("#warning-text").style.display="block";Logger.i.debug(validation)}count(){const valueLength=this.shadowRoot.querySelector("#input").value.length;this.shadowRoot.querySelector("#count").textContent=valueLength+"/"+this.max;if(null!=this.e.max&&valueLength>this.e.max){this.shadowRoot.querySelector("#count").style.color="#FF7273"}else{this.shadowRoot.querySelector("#count").style.color="#cecece"}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);console.log(this.e.max);if(null==this.e.max){this.max="unlimited"}else{this.max=this.e.max}}}window.customElements.define(TextArea.is,TextArea);