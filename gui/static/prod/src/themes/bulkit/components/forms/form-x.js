import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{FormBase}from"../../../../components/form.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import{register}from"../../register.js";class FormX extends FormBase{static get is(){return"form-x"}constructor(){super();this.pos=0;this.sections=[]}render(){return html`

        <style>
            :host{
                display:inline-block;
                width:100%;
                box-sizing:border-box;
            }

            paper-button{
                display: inline-block;
                background: #54667a;
            }

            paper-button[hidden]{
                display: none;
            }

            .header{
                color: #000000;
                text-align: center;
                padding: 10px;
                font-weight: 500;
                margin: 0px;
            }
            .pd-card-wrapper{
                box-sizing:border-box;
            }
            
            .pd-card-wrapper {
                border-radius: 0.2em;
            }
            
            h2 {
                color: var(--app-default-color);
            }

        </style>
        <div class="pd-card-wrapper m-r-1 m-l-1 m-t-1  c-text c-text-bg">
                <h2 class="header c-n-light c-b-b-dark p-t-0-5 p-b-0-5 p-l-1 p-r-1">
                    <iron-icon style="float: left;"
                               ?hidden="${this._hideB(this.pos,this.sections)}"
                               icon="icons:arrow-back"
                               @click="${this._back}"></iron-icon>
                    <slot name="header" style="display: inline-block"></slot>
                    <iron-icon style="float: right;"
                               ?hidden="${this._hideF(this.pos,this.sections)}"
                               icon="icons:arrow-forward"
                               @click="${this._forward}"></iron-icon>
                </h2>
            
            <div class="p-t-0-5 p-l-1 p-r-1 p-b-0-5">
                <slot name="body"></slot>
            </div>
            <div class="clearfix"></div>
        </div>`}getForm(){return this.shadowRoot.querySelector("slot[name='body']").assignedNodes()[0]}_notifyPosChange(newPos){this.dispatchEvent(new CustomEvent("pos-change",{bubbles:!0,composed:!0,detail:{pos:newPos}}))}_back(){this.pos-=1;this._notifyPosChange(this.pos)}_forward(){this.pos+=1;this._notifyPosChange(this.pos)}_hideB(p){return 0===p}_hideF(p,s){return p>=s.length-1}}register(FormX);