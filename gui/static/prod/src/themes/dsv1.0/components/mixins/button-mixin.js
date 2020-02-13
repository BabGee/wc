import { html } from "../../../../../node_modules/lit-element/lit-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const ACTION_SERVICE_CALL = '1';
export const ACTION_LINK_WINDOW = '2';
export const ACTION_SUBMIT = '3';
export const buttonMixin = BaseClass => class extends BaseClass {
  renderDefault() {
    return html`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
        .button.is-link {
          border-color: transparent;
          color: #fff;
        }       
 
</style>       
<div class="field">
  <div class="control" style=" padding:12px;">
    <button class="button is-link" style="width: 100%; background-color: var(--app-default-color);">${this.name}</button>
  </div>

</div>

`;
  }

  static get properties() {
    return {
      'icon': Boolean,
      'rounded': Boolean,
      'large': Boolean,
      'size': String,
      'color': String // 32,36,46

    };
  }

  constructor() {
    super();
    this.icon = false;
    this.rounded = false;
    this.large = false;
    this.size = 32;
    this.color = '#0040bf';
    this.addEventListener('click', this._onAction.bind(this));
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties); // this.shadowRoot
    //   .querySelector('#validationMessage')
    //   .style.display = 'none';
    //
    // this.shadowRoot
    //   .querySelector('#validationIcon')
    //   .style.visibility = 'hidden';

    this.icon = this.e.details['icon'] || false;
    this.large = this.e.details['large'] || false;
    this.rounded = this.e.details['rounded'] || false;
    this.size = this.e.details['size'] || 32;
    this.color = this.e.details['color'] || '#0040bf';
  }

  get action() {
    return ACTION_SUBMIT;
  }

  _onAction(evt) {
    switch (this.action) {
      case ACTION_SERVICE_CALL:
        this.pl._dialog(this.e.service, this.params);

        break;

      case ACTION_LINK_WINDOW:
        break;

      case ACTION_SUBMIT:
      default:
        this.pl.submitForm();
    }
  }

};