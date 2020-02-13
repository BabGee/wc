import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import "./map-marker.js";
import { LocationPickerBase } from "../../../../../elements/base/location-picker.js";
import { LocationPickerStyles } from "./location-picker-css.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class LocationPicker extends LocationPickerBase {
  static get styles() {
    return [LocationPickerStyles, css`
        :host {
          display: block;
        }
      `];
  }

  renderDefault() {
    return html`

    
         <div class="column is-5 is-offset-4">
<div class="field">
        <h4>${this.e.name}</h4>

               <!-- Picked Location -->        
        <div id="picked"></div>    
        
         <map-marker key="${this.e.kind}" @center-change=${this._centerChanged}></map-marker>

           </div>
           </div>
        
        
        `;
  }

  static get properties() {
    return {
      location: Object
    };
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // this.getLocation();
  }

  _centerChanged(e) {
    // console.log(e.detail);
    const location = e.detail['location'];
    this.location = location;
    const onIdlePositionView = this.shadowRoot.querySelector('#picked');
    onIdlePositionView.innerHTML = 'Chosen location: lat ' + location.lat + ', lng ' + location.lng;
  }

  getValue() {
    return this.location.lng + ',' + this.location.lat;
  }

  valid(validation) {}

  invalid(validation) {}

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(LocationPicker.is, LocationPicker);