import{BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ImageElementBase=class extends BaseElement{static get is(){return"image-element"}static get properties(){return{icon:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}};var imageElement={ImageElementBase:ImageElementBase};const ImageElementStyles=css`

`;var imageElementCss={ImageElementStyles:ImageElementStyles};class ImageElement extends ImageElementBase{static get styles(){return[ImageElementStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        
        <figure class="image is-128x128">
  <img src="${this.e.defaultValue||"https://bulma.io/images/placeholders/256x256.png"}">
</figure>
        `}}customElements.define(ImageElement.is,ImageElement);export{imageElement as $imageElement,imageElementCss as $imageElementCss,ImageElementBase,ImageElementStyles};