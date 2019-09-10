import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { BULMA_STYLES } from "../../styles/bulma-styles.js";
import { LANDING_STYLES } from "../../styles/landing-style.js";
import { DASHBOARD_STYLES } from "../../styles/dashboard-styles.js";
import { BankInstructionsBase } from "../../../../elements/base/bank-instructions.js";

class BankInstructions extends BankInstructionsBase {
  render() {
    return html`${BULMA_STYLES}
${DASHBOARD_STYLES} 
${LANDING_STYLES}
     
<div class="column is-6 is-offset-3">
    <div class="field">
        <div class="select is-fullwidth">
          <select  @change="${() => this.changeBank()}" id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
            <option value="kcb">KCB BANK</option>
            <option value="equity">EQUITY BANK</option>   
          </select>
        </div>
    </div>
</div>
<div id="kcb" class="column is-12">      
    <!-- Widget -->
    <div class="flex-card light-bordered light-raised padding-10">
    
        <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">This is the markup content for KCB instructions</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">You can access KCB :</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text"> on Google Play Store or Apple Store</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">By dialling <span class="name"> *522# </span> on your KCB M-Banking registered phone.</span>
                </div>
            </li>
          
        </ol>
    </div>
    <!-- /Widget -->
</div>
<div id="equity" class="column is-12" style="display: none;">
    <!-- Widget -->
    <div class="flex-card light-bordered light-raised padding-10">
        <ol class="simple-feed">
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">This is the markup content for Equity Bank instructions</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">You can access Equity :</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text"> on Google Play Store or Apple Store</span>
                </div>
            </li>
            <!-- Feed item -->
            <li class="feed-item">
                <div class="feed-item-text">
                    <span class="text">By dialling <span class="name">  </span> on your Equitel registered phone.</span>
                </div>
            </li>
          
        </ol>
    </div>
    <!-- /Widget -->
</div>`;
  }

  constructor() {
    super();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  getValue() {
    return this.shadowRoot.querySelector('#input').value;
  }

  changeBank() {
    if (this.shadowRoot.querySelector('#input').value === 'equity') {
      this.shadowRoot.querySelector('#equity').style.display = 'unset';
      this.shadowRoot.querySelector('#kcb').style.display = 'none';
    } else {
      this.shadowRoot.querySelector('#equity').style.display = 'none';
      this.shadowRoot.querySelector('#kcb').style.display = 'unset';
    }
  }

  validate() {
    if (this.e.required && !this.getValue()) {
      return new this.Validation(false, 'invalid');
    }

    return new this.Validation(true, 'valid');
  }

  valid(validation) {}

  invalid(validation) {}

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(BankInstructions.is, BankInstructions);