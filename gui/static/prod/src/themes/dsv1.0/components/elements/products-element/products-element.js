import { LitElement, html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { ProductsElementStyles } from "./products-element-css.js";
export class ProductsElement extends SectionPElementDsc {
  static get styles() {
    return [ProductsElementStyles, css`
        :host {
          display: block;
        }
      `];
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
     
    </style>
    <div id="id" class="columns is-multiline">
    ${this.rows.map((slide, index) => html` 
     
    <div class="column">
       
          <div  class="ii__product">
            <div class="ii__product-logo">
            <img src="/media/${slide[3]}" alt="products logo">
            </div>
            <div class="ii__content">
              <h3 class="is-size-6 ii__title has-text-weight-bold has-text-centered">${this._getTitle(slide[1])}</h3>
              <p id="paragraph-${index}" data-name="${this._getLink(slide[1])}" class="ii__paragraph has-text-centered is-size-7">${slide[2]}</p>
            </div>
          </div>
        
      </div>

    
    `)}
    </div>
        `;
  }

  static get is() {
    return 'products-element';
  }

  static get properties() {
    return {};
  }

  _getLink(text) {
    let [title, link] = text.split('|');
    return link;
  }

  _getTitle(text) {
    let [title, link] = text.split('|');
    return title;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loader.then(dsc => {
      const allP = this.shadowRoot.querySelectorAll(".ii__paragraph");
      allP.forEach(p => {
        let productLink = p.getAttribute("data-name");

        if (p.innerText.length > 80) {
          this.addReadMore(p, productLink);
        } else {
          this.addGetStarted(p, productLink);
        }
      });
    });
  }

  addReadMore(paragraph, productLink) {
    let excessText = paragraph.innerText.substr(80, paragraph.innerText.length); //getting the excess text

    let splitText = paragraph.innerText.slice(0, 80);
    paragraph.innerText = splitText;
    let lessTextnode = document.createTextNode("...Show less");
    let lessP = document.createElement("p");
    let lessNode = document.createElement("span");
    let textnode = document.createTextNode("...Read more");
    let morenode = document.createElement("span");
    morenode.className = "read_more";
    morenode.appendChild(textnode);
    paragraph.appendChild(morenode);
    lessNode.className = "show_less";
    lessNode.appendChild(lessTextnode);
    lessP.appendChild(lessNode);
    morenode.addEventListener('click', () => {
      paragraph.innerText = splitText + excessText;
      paragraph.appendChild(lessP);
      this.addGetStarted(paragraph, productLink);
    });
    lessNode.addEventListener('click', () => {
      paragraph.innerText = splitText;
      paragraph.appendChild(morenode);
    });
  }

  addGetStarted(paragraph, productLink) {
    let newLine = document.createElement("p");
    let span = document.createElement("span");
    let a = document.createElement("a");
    let textnode = document.createTextNode("Get Started");
    span.className = "tag is-custom-color is-normal";
    span.style.backgroundColor = "var(--app-accent-color)";
    span.style.marginTop = "8px";
    a.href = productLink;
    a.target = "_blank";
    a.style.color = "#fff";
    a.appendChild(textnode);
    span.appendChild(a);
    newLine.appendChild(span);
    paragraph.appendChild(newLine);
  }

}
customElements.define(ProductsElement.is, ProductsElement);