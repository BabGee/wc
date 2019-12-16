import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../icons/my-icons.js";import{SharedStyles}from"../../styles/shared-styles.js";import{ImageElementBase}from"../../../../elements/base/image-element.js";class ImageElement extends ImageElementBase{renderDefault(){return html`
        ${SharedStyles}
        <figure class="image is-128x128">
  <img src="${this.e.defaultValue||"https://bulma.io/images/placeholders/256x256.png"}">
</figure>
        `}}customElements.define(ImageElement.is,ImageElement);