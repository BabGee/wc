import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { SectionPElementBase } from "../../../../elements/base/section-pelement.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionTitle extends SectionPElementBase {
  renderDefault() {
    return html`
     <style>
     .section-title{
       width: 100%;
     }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  <div class="section-title">
     <h1 style="margin-bottom: 15px;" class="has-text-centered title is-size-5 is-capitalized">${SectionTitle.toTitleCase(this.e.elementJson[4])}</div>
    <div class="title-divider" style="margin: auto ;width: 80px;height: 5px; background: #4FC1EA;"></div>     
    <div class="subtitle has-text-centered is-tablet-padded">${this.e.defaultValue}</div>
  </div>`;
  }

  static get is() {
    return 'section-title';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    const self = this; // TODO update to use customEvent

    self.addEventListener('click', function (evt) {
      evt.preventDefault();

      self.pl._dialog(self.e.service, self.params);
    });
  }

  init(pElement, loader) {
    super.init(pElement, loader);
    this.params = loader.pl.paramsCopy();
  }

}

customElements.define(SectionTitle.is, SectionTitle);