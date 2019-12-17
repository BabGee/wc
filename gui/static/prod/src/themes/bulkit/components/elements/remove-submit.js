import { RemoveSubmitBase } from "../../../../elements/base/remove-submit.js";
import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import '../../icons/my-icons.js';
import { SharedStyles } from "../../styles/shared-styles.js";

class RemoveSubmit extends RemoveSubmitBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`
        ${SharedStyles}
        <a class="button is-primary is-rounded">
            <span class="icon">
            <!--<i class="fab fa-github"></i>-->
              <svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </span>
            <span>${this.name}</span>
        </a>
        `;
  }

}

customElements.define(RemoveSubmit.is, RemoveSubmit);