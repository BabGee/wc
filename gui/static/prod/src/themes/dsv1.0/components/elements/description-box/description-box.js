import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementDsc } from "../../../../../elements/base/section-pelement-dsc.js";
import { DescriptionBoxStyles } from "./description-box-css.js";

class DescriptionBox extends SectionPElementDsc {
  static get styles() {
    return [DescriptionBoxStyles, css`
            :host {
              display: block;
            }
          `];
  }

  render() {
    return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
     
        <div class="descriptionBox is-flex">
       
                
                <div class="descriptionBox__tabs">
                <ul>
                ${this.rows.map((slide, index) => html`
                    <li id="li-${index}" class="descriptionBox__item" data-item="" @click="${() => this.openTab(index, 'content-' + index)}">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </li>
                    `)}
                </ul>

            </div>

            <div class="descriptionBox__content">
            ${this.rows.map((slide, index) => html`
                <div class="content-container" id="content-${index}">
                    <div class="tab_drawer_heading">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </div>
                    <div class="columns data">
                        <div class="column is-three-quarters">
                            <div class="content">
                                <h1>${this._getTitle(slide[1])}</h1>
                                <p>${slide[2]}</p>
                            </div>
                        </div>
                        <div class="column">
                            <img src="/media/${slide[3]}" alt="image-${slide[3]}"/>
                        </div>
                    </div>
                </div>
                `)}

            </div>
                       
        </div>

        `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.loader.then(dsc => {
      let contents = this.shadowRoot.querySelectorAll(".content-container");
      let lists = this.shadowRoot.querySelectorAll(".descriptionBox__item");
      contents[0].style.display = 'block'; //to show the first content block by default

      lists[0].classList.add('active');
    });
  }

  _getSubTitle(text) {
    let [title, subTitle] = text.split('|');
    return subTitle;
  }

  _getTitle(text) {
    let [title, subTitle] = text.split('|');
    return title;
  }

  static get is() {
    return 'description-box';
  }

  openTab(index, tabName) {
    let contents = this.shadowRoot.querySelectorAll(".content-container");
    let lists = this.shadowRoot.querySelectorAll(".descriptionBox__item");
    contents.forEach(content => {
      content.style.display = "none";
    });
    lists.forEach(list => {
      list.classList.remove("li-active");
    });
    this.shadowRoot.querySelector("#" + tabName).style.display = "block";
    this.shadowRoot.querySelector("#li-" + index).classList.add("li-active");
  }

}

customElements.define(DescriptionBox.is, DescriptionBox);