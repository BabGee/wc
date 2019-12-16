import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"./location-picker/map-marker.js";import{LocationPickerBase}from"../../../../elements/base/location-picker.js";class LocationPicker extends LocationPickerBase{renderDefault(){return html`

        <style>
            :host {
                display: block;
            }
            
            
            
        </style>
         <div class="column is-5 is-offset-4">
<div class="field">
        <h4>${this.e.name}</h4>

               <!-- Picked Location -->        
        <div id="picked"></div>    
        
         <map-marker key="${this.e.kind}" @center-change=${this._centerChanged}></map-marker>

           </div>
           </div>
        
        
        `}static get properties(){return{location:Object}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_centerChanged(e){const location=e.detail.location;this.location=location;const onIdlePositionView=this.shadowRoot.querySelector("#picked");onIdlePositionView.innerHTML="Chosen location: lat "+location.lat+", lng "+location.lng}getValue(){return this.location.lng+","+this.location.lat}valid(){}invalid(){}init(pElement,loader){super.init(pElement,loader)}}customElements.define(LocationPicker.is,LocationPicker);