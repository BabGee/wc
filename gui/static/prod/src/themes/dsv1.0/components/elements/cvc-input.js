import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/gold-cc-cvc-input/gold-cc-cvc-input.js";import{CvcInputBase}from"../../../../elements/base/cvc-input.js";class CvcInput extends CvcInputBase{renderService(){return html`
    <style>
    .row{
        width: 100%;
    }
    .row .inp-right{
        /* width: 5%; */
        height: 100px;
    }
    .row .inp-right input{
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
        padding: 18px calc(.625em - 1px) 18px 20px;
    }
    .row .inp-right input::-webkit-input-placeholder { /* Edge */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input :-ms-input-placeholder { /* Internet Explorer 10-11 */
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right input ::placeholder {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }
    .row .inp-right .field .label{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        color: #013243;
    }

    .row .inp-right .field.error, 
    .row .inp-right .field.error input, 
    .row .inp-right .field.error .icon{
        color: #ff3860;
        fill: #ff3860;
    }
    .row .inp-right .field.error{
        font-weight: normal;
        font-size: 12px;
    }

    .row .inp-right .field.success, 
    .row .inp-right .field.success input, 
    .row .inp-right .field.success svg{
        color: #23d160;
        fill: #23d160;
    }
    .row .inp-right .field.success{
        font-weight: normal;
        font-size: 12px;
    }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column row">
      <div class="inp-right">
        <!-- For success message use 'success' whithin the 'field' class-->
        <!-- For error message use 'error' whithin the 'field' element and add is-danger whithin the input tag-->
        <!--- Error message is commented at the bottom of this component --->
          <div class="field">
              <div class="control has-icons-right">
                  <input id="input" class="input" type="tel" placeholder="${this.e.name}">
                  <span class="icon is-small is-right">
                  <!-- <fa-icon class="fas fa-exclamation-triangle icon" size="1em"></fa-icon> -->
                  </span>
              </div>
              <!-- -<p>Username or password is incorrect</p> -->
          </div>
      </div>
    </div>
          `}renderDefault(){return html`
        <style>
        .inp{
            border-radius: 6px!important;
            font-size: 14px!important;
            padding: 20px!important;
            line-height: 1;
            background-color: #fcfcfc!important;
            border: 1px solid #a3a3a4!important;
            box-shadow: 0 0 0 transparent!important;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="column is-paddingless">
      <div class="field">
            <div class="control">
                <input id="input" class="input inp" type="tell" placeholder="Primary input">
            </div>
        </div>
    </div>
        `}static get properties(){return{value:String,params:{type:Object,value:{}},columnSize:{type:Array}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getInput(){return this.qs("#input")}getValue(){return this.getInput().value}invalid(){this.qs(".control").classList.add("required");this.qs(".control").classList.add("has-error")}valid(){this.qs(".control").classList.remove("required");this.qs(".control").classList.remove("has-error")}}customElements.define(CvcInput.is,CvcInput);