import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{HeaderViewBase}from"../../../../elements/base/header-view.js";class HeaderView extends HeaderViewBase{renderDefault(){return html`
      <style>
        .field {
          display: flex;
          justify-content: space-around;
        }
      </style>
      <div class="field">
        <h2>${this.text}<h2>
      </div> `}}window.customElements.define(HeaderView.is,HeaderView);