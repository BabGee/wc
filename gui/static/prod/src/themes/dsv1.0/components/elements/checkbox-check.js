import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{CheckboxCheckBase}from"../../../../elements/base/checkbox-check.js";class CheckboxCheck extends CheckboxCheckBase{createRenderRoot(){return this}renderDefault(){return html`
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
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.validation-info{
  display:none;
}
</style>
<label class="switch">
  <input type="checkbox" id="input"  name=${this.e.name} 
  type="checkbox"
  placeholder=${this.e.name} 
  required=${this.required}" >
  <span class="slider round"></span>
  </label>
  <small class="validation-info">Required</small>
  <span>${this.name}</span>


        `}getInput(){return this.qs("#input")}getValue(){return this.shadowRoot.querySelector("#input").checked?"on":"off"}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none";this.shadowRoot.querySelector(".validation-info").textContent="Required"}invalid(validation){this.shadowRoot.querySelector(".validation-info").style.display="block";if(validation){this.shadowRoot.querySelector(".validation-info").textContent=validation}}}window.customElements.define(CheckboxCheck.is,CheckboxCheck);