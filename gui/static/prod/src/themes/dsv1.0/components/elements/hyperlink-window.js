import{html,HyperlinkWindowBase}from"../../../../components/adaptive-ui.js";class HyperlinkWindow extends HyperlinkWindowBase{renderDefault(){return html`
                 <div class="column is-3 is-offset-5">
        <div class="field" style="margin-top: 20px; margin-bottom: 20px;">
        <a href="${this.e.defaultValue}" 
            class="button button-cta  raised primary-btn btn-outlined" 
            @click="${this._linkClick}" 
            style="width: 100%;">
            <span><iron-icon icon="${this.e.icon}"></iron-icon>${this.e.name}</span>
        </a>
        </div>

        `}}customElements.define(HyperlinkWindow.is,HyperlinkWindow);