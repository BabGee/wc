import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{DASHBOARD_STYLES}from"../../styles/dashboard-styles.js";import{BULMA_STYLES}from"../../styles/bulma-styles.js";import{HyperlinkElementBase}from"../../../../elements/base/hyperlink-element.js";class HyperlinkElement extends HyperlinkElementBase{renderDefault(){return html`
        ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 

         <div class="column">
        <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
        <a class="button button-cta  raised primary-btn btn-outlined" @click="${this._linkClick}" style="width: 100%;">
            <span>${this.e.name}</span>
        </a>
        </div>
        </div>
        `}static get properties(){return{name:String,params:{type:Object,value:{}}}}constructor(){super();this.addEventListener("click",this._onAction.bind(this))}_onAction(evt){evt.preventDefault();this.pl._dialog(this.e.service,this.params)}}customElements.define(HyperlinkElement.is,HyperlinkElement);