import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { NavbarDefaultBase } from "../../../../elements/base/navbar-default.js";

class NavbarDefault extends NavbarDefaultBase {
  constructor() {
    super();
  }

  renderDefault() {
    return html`${this.menuGroups.map((menuGroup, menuGroupIndex) => html`
      <a href="/${this.basePath}/${menuGroup.route}/" @click=${this.shopping}>${menuGroup.title}</a><br>`)}`;
  }

}

customElements.define(NavbarDefault.is, NavbarDefault);