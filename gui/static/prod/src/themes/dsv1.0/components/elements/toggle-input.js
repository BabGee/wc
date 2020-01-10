import{html,ToggleInputBase}from"../../../../components/adaptive-ui.js";class ToggleInput extends ToggleInputBase{renderDefault(){return html`
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color:var(--app-default-color);
}

input:focus + .slider {
  box-shadow: 0 0 1pxvar(--app-default-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.lbl{
    position: relative;
    top: -12px;
    font-weight: bold;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
 <div class="column">
<div class="field">
<label class="switch">
  <input type="checkbox" id="input" required=${this.required}>
  <span class="slider round"></span>
</label>
 <label for="switch" class="lbl">${this.name}</label>
  </div>
  </div>`}static get is(){return"toggle-input"}getInput(){return this.qs("#input")}getValue(){return this.getInput().checked}firstUpdated(changedProperties){super.firstUpdated(changedProperties);// this.type = "text";
}}window.customElements.define(ToggleInput.is,ToggleInput);