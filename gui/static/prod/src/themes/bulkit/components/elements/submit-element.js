import{html,SharedStyles,SubmitElementBase}from"../../../../components/adaptive-ui.js";class SubmitElement extends SubmitElementBase{renderDefault(){return html`
        ${SharedStyles}
        <style>
        .button.is-primary.is-rounded.is-fullwidth {
          width:200px;
          
        }
        @media (max-width: 350px) {
          a.button.is-primary.is-rounded.is-fullwidth {
               width:150px;
          }
        </style>
         <div class="column" >
        <div class="field"style="margin-bottom: 20px;">
        <a class="button is-primary  is-rounded is-fullwidth" style="margin:  auto;" @click=${this._onAction}>
            <span>${this.name}</span>
        </a>
        </div>
        </div>
        `}_onAction(evt){evt.preventDefault();this.submit()}}customElements.define(SubmitElement.is,SubmitElement);