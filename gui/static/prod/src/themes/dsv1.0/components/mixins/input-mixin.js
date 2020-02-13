import { html, css } from "../../../../../node_modules/lit-element/lit-element.js";
import { InputStyles } from "../../styles/shared.js";
import { RENDER_M_DEFAULT, RENDER_M_SIDE_BY_SIDE } from "../../../../components/e-list.js";
import { enterSubmitMixin } from "../../../../components/mixins/enter-submit-mixin.js";
import { InputDefaultStyles } from "../../styles/input-shared-default.js";
import { InputRenderServiceStyles } from "./input-mixin-styles/input-render-service-styles.js";
import { InputRenderDefaultStyles } from "./input-mixin-styles/input-render-default-styles.js";
import { InputLabelAnimationtStyles } from "../../styles/input-label-animation.js";
import "../../../../../node_modules/fa-icons/index.js";

const GetStylesConst = function () {
  console.log("GET STYLES");

  if (window.template == 'service') {
    return InputRenderServiceStyles;
  } else {
    return InputRenderDefaultStyles;
  }
};
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/


export const inputMixin = BaseClass => class extends enterSubmitMixin(BaseClass) {
  static get styles() {
    return [InputDefaultStyles, InputLabelAnimationtStyles, GetStylesConst(), css`
          :host {
            display: block;
          }
        `];
  }

  renderService() {
    if (this.renderMode === RENDER_M_SIDE_BY_SIDE) {
      return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">

        <div class="column">
          <div class="input-mixin input-effect">
            <input class="label-animation" type="${this.type}" placeholder="">
            <label>${this.e.name}</label>
            <span class="focus-bg"></span>
          </div>
        </div>
        `;
    } else {
      // RENDER_M_DEFAULT
      return html`
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">

          <!-- default and anim -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
          />
          <div class="column">
            <div class="input-mixin input-effect">
              <input class="label-animation" type="${this.type}" placeholder="">
              <label>${this.e.name}</label>
              <span class="focus-bg"></span>
            </div>
          </div>
        `;
    }
  }

  renderDefault() {
    return html`
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
        />
        <div class="column">
          <div class="input-mixin input-effect">
            <input class="label-animation" type="${this.type}" placeholder="">
            <label>${this.e.name}</label>
            <span class="focus-bg"></span>
          </div>
        </div>
      `;
  }

  invalid(validation) {
    const input = this.shadowRoot.querySelector("#input");
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");

    if (this.type == 'password') {
      dangerIcon.style.visibility = "hidden";
      checkIcon.style.visibility = "hidden";
      input.className = "input is-danger";
      warningText.style.display = "block";
    } else {
      input.className = "input is-danger";
      warningText.style.display = "block";
      dangerIcon.style.visibility = "visible";
      checkIcon.style.visibility = "hidden";
    }
  }

  valid(validation) {
    const input = this.shadowRoot.querySelector("#input");
    const dangerIcon = this.shadowRoot.querySelector("#danger-icon");
    const checkIcon = this.shadowRoot.querySelector("#check-icon");
    const warningText = this.shadowRoot.querySelector("#warning-text");

    if (this.type == 'password') {
      dangerIcon.style.visibility = "hidden";
      checkIcon.style.visibility = "hidden";
      input.className = "input is-success";
      warningText.style.display = "none";
    } else {
      input.className = "input is-success";
      warningText.style.display = "none";
      dangerIcon.style.visibility = "hidden";
      checkIcon.style.visibility = "visible";
    }
  }

  reveal() {
    var password = this.shadowRoot.querySelector('#input').value;
    var type = this.shadowRoot.querySelector('#input').type;

    if (this.shadowRoot.querySelector('#input').type === 'password') {
      this.shadowRoot.querySelector('#input').type = 'text'; //  this.$.input.icon = "icons:visibility-off";

      var elementToFocus = this.shadowRoot.querySelector('#eye');
      elementToFocus.icon = 'icons:visibility'; //  elementToFocus.icon = "icons:visibility";
    } else if (this.shadowRoot.querySelector('#input').type === 'text') {
      this.shadowRoot.querySelector('#input').type = 'password'; // iconButton.icon = "icons:visibility";
      //  this.$.input.eye.icon = "icons:visibility";

      var elementToFocus2 = this.shadowRoot.querySelector('#eye');
      elementToFocus2.icon = 'icons:visibility-off';
    }
  }

  reveal() {
    var password = this.shadowRoot.querySelector('#input').value;
    var type = this.shadowRoot.querySelector('#input').type;

    if (this.shadowRoot.querySelector('#input').type === 'password') {
      this.shadowRoot.querySelector('#input').type = 'text'; //  this.$.input.icon = "icons:visibility-off";

      var elementToFocus = this.shadowRoot.querySelector('#eye');
      elementToFocus.icon = 'icons:visibility-off'; //  elementToFocus.icon = "icons:visibility";
    } else if (this.shadowRoot.querySelector('#input').type === 'text') {
      this.shadowRoot.querySelector('#input').type = 'password'; // iconButton.icon = "icons:visibility";
      //  this.$.input.eye.icon = "icons:visibility";

      var elementToFocus2 = this.shadowRoot.querySelector('#eye');
      elementToFocus2.icon = 'icons:visibility';
    }
  }

  getInput() {
    return this.shadowRoot.querySelector("#input");
  }

  getValue() {
    return this.getInput().value;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  get renderMode() {
    return this.pl.renderMode;
  }

  get type() {
    return "text";
  }

};