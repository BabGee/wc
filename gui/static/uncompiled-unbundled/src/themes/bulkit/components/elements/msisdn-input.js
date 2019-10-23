import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";
import "../../../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../../../node_modules/@polymer/iron-icon/iron-icon.js";
import { MsisdnInputBase } from "../../../../elements/base/msisdn-input.js";
import "../../../../../node_modules/fa-icons/index.js";
import "../../../../../node_modules/slim-select/dist/slimselect.min.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class MsisdnInput extends MsisdnInputBase {
  renderDefault() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.23.0/slimselect.min.css" rel="stylesheet"/>
 
    <style>
    
    .custom-width{
      width: 342px;
    }

    </style>

<div class="column ">    
  <div class="field has-addons">
  <p class="control has-icons-left">
    <span id="select-section" class="select">
    <select id="code" @mouseover="${() => this.mouseOver()}" @click="${() => this.optionCount()}"  @change="${this.codeSelected}">
    ${this.rows.map(row => html`<option ?selected="${row[0] === '254'}" value="${row[0]}">${row[1]} </option>`)}
    </select>
    </span>
      <span id="span-icon" class="icon is-small is-left">
        <fa-icon id="icon" class="fas fa-globe" color="#495057" size="14px"></fa-icon>
    </span>
  </p>

  <p class="control">
    <div class="control is-expanded  has-icons-left">
      
            <input class="input"  
                    id="input"
                    name="${this.e.name}" 
                    type="tel" 
                    placeholder="${this.e.name}" 
                    required="${this.required}" 
                    minlength="${this.e.min}"  
                    maxlength="${this.e.max}" style="text-indent: 10px;">
        <span class="icon is-left" style="font-size: 14px;margin-left: 5px; margin-top: 0px; text-align: center; color:  black;">
                <p id="country-code">+254</p>
        </span>
        <small class="info-error" style="display: none;"> Error </small>
    
      </div>
  </p>
  </div>
</div>
 `;
  }

  constructor() {
    super();
  }

  mouseOver() {
    //check first if options is greater than 10 inorder to prevent normal dropdown
    const selectCountryCode = this.shadowRoot.querySelector('#code');
    const options = selectCountryCode.querySelectorAll('option');

    if (options.length > 10) {
      selectCountryCode.addEventListener('mousedown', function (e) {
        e.preventDefault(); //to prevent normal drop down from occuring
      });
    }
  }

  optionCount() {
    const items = this.shadowRoot.querySelector('#code').querySelectorAll('option');
    items.length > 10 ? this.showSlimSelect() : console.log("items is less than 10");
  }

  showSlimSelect() {
    const selectCountryCode = this.shadowRoot.querySelector('#code');
    let selectSection = this.shadowRoot.querySelector('#select-section');
    let icon = this.shadowRoot.querySelector('#span-icon'); //remove bulma style first

    selectSection.classList.remove('select'); //to remove bulma dropdown arrow

    icon.style.visibility = 'hidden'; //to remove icon

    selectCountryCode.className = 'custom-width'; //add with to slimSelect

    const slim = new SlimSelect({
      select: selectCountryCode,
      showContent: 'down',
      afterClose: function () {
        //called when dropdown is closed but nothing was selected
        slim.destroy();
        selectSection.classList.add('select'); //to add back bulma

        icon.style.visibility = 'visible'; //to add back icon

        selectCountryCode.className = ''; //to remove custom width
      },
      onChange: () => {
        slim.destroy(); //remove slimSelect

        selectSection.classList.add('select');
        icon.style.visibility = 'visible';
        selectCountryCode.className = '';
      }
    });
    slim.open(); //get slimSelect search input

    let searchInput = this.shadowRoot.querySelector(".ss-search").querySelector("input");
    searchInput.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  getValue() {
    const codeSelect = this.shadowRoot.querySelector('#code');
    const numberInput = this.shadowRoot.querySelector('#input');

    if (numberInput.value) {
      return '+' + codeSelect.value + numberInput.value;
    }
  }

  codeSelected() {
    const codeSelect = this.shadowRoot.querySelector('#code').value;
    this.shadowRoot.querySelector('#country-code').textContent = '+' + codeSelect;
  }

  valid(Validation) {
    this.shadowRoot.querySelector('.info-error').style.display = 'none'; // Revert general text content

    this.shadowRoot.querySelector('.info-error').textContent = 'Required';
  }

  invalid(validation) {
    this.shadowRoot.querySelector('.info-error').style.display = 'block';

    if (validation) {
      this.shadowRoot.querySelector('.info-error').textContent = validation;
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.checkKindValue();
  }

  checkKindValue() {
    const kindValue = this.e.kind;
    const numberInput = this.shadowRoot.querySelector('#input');

    if (kindValue != null) {
      /* Number with the country code can be in the following formats
      1. Country code with only one digit eg '+1' number -> +1726640997 -> length = 11
      2. Country code with only two digits eg '+11' number -> +11726640997 -> length = 12
      3. Country code with only three digits eg '+111' number -> +111726640997 -> length = 13
      */
      switch (kindValue.length) {
        case 11:
          numberInput.value = kindValue.slice(2);
          break;

        case 12:
          numberInput.value = kindValue.slice(3);
          break;

        case 13:
          numberInput.value = kindValue.slice(4);
          break;

        default:
          numberInput.value = '';
          break;
      }
    } else {
      numberInput.value = '';
    }
  }

}

customElements.define(MsisdnInput.is, MsisdnInput);