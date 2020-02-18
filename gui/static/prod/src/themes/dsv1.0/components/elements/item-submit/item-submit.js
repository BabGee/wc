import{BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ItemSubmitBase=class extends BaseElement{static get is(){return"item-submit"}static get properties(){return{params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getName(){return this.e.formName}getValue(){return this.value}validate(){return this.$.input.validate()}init(pElement,loader){super.init(pElement,loader);this.required=pElement.min&&0<pElement.min}};var itemSubmit={ItemSubmitBase:ItemSubmitBase};const ItemSubmitStyles=css`


`;var itemSubmitCss={ItemSubmitStyles:ItemSubmitStyles};class ItemSubmit extends ItemSubmitBase{constructor(){super()}static get styles(){return[ItemSubmitStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html``}}customElements.define(ItemSubmit.is,ItemSubmit);export{itemSubmit as $itemSubmit,itemSubmitCss as $itemSubmitCss,ItemSubmitBase,ItemSubmitStyles};