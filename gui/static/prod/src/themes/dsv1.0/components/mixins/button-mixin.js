import{html}from"../../../../../node_modules/lit-element/lit-element.js";export const ACTION_SERVICE_CALL="1";export const ACTION_LINK_WINDOW="2";export const ACTION_SUBMIT="3";export const buttonMixin=BaseClass=>class extends BaseClass{renderDefault(){return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
        .button.is-link {
          background-color: var(--app-default-color);
          border-color: transparent;
          color: #fff;
        }       
 
</style>       
<div class="field">
  <div class="control">
    <button class="button is-link" style="width: 100%;">${this.name}</button>
  </div>

</div>

`}static get properties(){return{icon:Boolean,rounded:Boolean,large:Boolean,size:String,color:String}}constructor(){super();this.icon=!1;this.rounded=!1;this.large=!1;this.size=32;this.color="#0040bf";this.addEventListener("click",this._onAction.bind(this))}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.icon=this.e.details.icon||!1;this.large=this.e.details.large||!1;this.rounded=this.e.details.rounded||!1;this.size=this.e.details.size||32;this.color=this.e.details.color||"#0040bf"}get action(){return ACTION_SUBMIT}_onAction(){switch(this.action){case ACTION_SERVICE_CALL:this.pl._dialog(this.e.service,this.params);break;case ACTION_LINK_WINDOW:break;case ACTION_SUBMIT:default:this.pl.submitForm();}}};