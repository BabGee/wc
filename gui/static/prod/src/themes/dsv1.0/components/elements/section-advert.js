import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementDsc } from "../../../../elements/base/section-pelement-dsc.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionAdvert extends SectionPElementDsc {
  renderDefault() {
    return html`
     <style>
     .multiline-wrapper{
     display: flex;
     flex-wrap: wrap;
     }
     .card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
}
</style>
<div class="multiline-wrapper">
	    ${this.rows.map((slide, index) => html`   
<div class="column is-4">
                        <div class="card">
                            <figure class="image is-16by9">
                                    <img src="/media/${slide[3]}" alt="" >
                                </figure>
                        </div>
                    </div>
              `)}           
                    </div>

        `;
  }

  static get is() {
    return 'section-advert';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  showSlidesAuto() {
    // todo complete slides animation
    var i = 0;

    function Move() {
      i = i % this.rows.length + 1; //    document.getElementById('i'+i).checked = true;

      this.shadowRoot.querySelector('i' + i).checked = true;
    }

    setInterval(Move, 3000); // change img in 3 sec
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(SectionAdvert.is, SectionAdvert);