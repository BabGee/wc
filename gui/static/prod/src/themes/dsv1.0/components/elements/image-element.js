import{html,ImageElementBase}from"../../../../components/adaptive-ui.js";class ImageElement extends ImageElementBase{renderDefault(){return html`
        
        <figure class="image is-128x128">
  <img src="${this.e.defaultValue||"https://bulma.io/images/placeholders/256x256.png"}">
</figure>
        `}}customElements.define(ImageElement.is,ImageElement);