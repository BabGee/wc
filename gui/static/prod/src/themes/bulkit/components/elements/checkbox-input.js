import{html,SharedStyles,CheckboxInputBase}from"../../../../components/adaptive-ui.js";class CheckboxInput extends CheckboxInputBase{renderDefault(){return html`
 ${SharedStyles}
<style>
/* The container */
.checkcontent {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checkcontent input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 4px;
     border: 2px solid #a9abac;
}

/* On mouse-over, add a grey background color */
.checkcontent:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checkcontent input:checked ~ .checkmark {
    background-color: #4a4a4a;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkcontent input:checked ~ .checkmark:after {
    display: block;
}
/* Style the checkmark/indicator */
.checkcontent .checkmark:after {
    left: 8px;
    top: 3px;
    width: 2px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
 <div class="column is-12" style="margin:auto">
<div class="field">

  <label class="checkcontent">${this.name}
  <input type="checkbox" id="input">
  <span class="checkmark"></span>
</label>
  </div>
  </div>
`}constructor(){super()}getInput(){return this.qs("input")}getValue(){return this.shadowRoot.querySelector("#input").checked?"on":"off"}valid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.shadowRoot.querySelector("#input").checked=this.checked}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(CheckboxInput.is,CheckboxInput);