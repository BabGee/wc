import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const HyperlinkWindowBase=class extends utilsMixin(BaseElement){static get is(){return"hyperlink-window"}objToQueryString(obj){for(var k=Object.keys(obj),s="",i=0;i<k.length;i++){s+=k[i]+"="+encodeURIComponent(obj[k[i]]);if(i!=k.length-1)s+="&"}return s}_linkClick(evt){evt.preventDefault();window.open(this.e.defaultValue,"_blank","location=yes,height=570,scrollbars=yes,status=yes")}init(pElement,loader){super.init(pElement,loader);this.title=HyperlinkWindowBase.toTitleCase(pElement.name);this.name=HyperlinkWindowBase.toTitleCase(pElement.name);this.params=loader.pl.paramsCopy()}};var hyperlinkWindow={HyperlinkWindowBase:HyperlinkWindowBase};const HyperlinkWindowStyles=css`

`;var hyperlinkWindowCss={HyperlinkWindowStyles:HyperlinkWindowStyles};class HyperlinkWindow extends HyperlinkWindowBase{static get styles(){return[HyperlinkWindowStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
                 <div class="column is-3 is-offset-5">
        <div class="field" style="margin-top: 20px; margin-bottom: 20px;">
        <a href="${this.e.defaultValue}" 
            class="button button-cta  raised primary-btn btn-outlined" 
            @click="${this._linkClick}" 
            style="width: 100%;">
            <span><iron-icon icon="${this.e.icon}"></iron-icon>${this.e.name}</span>
        </a>
        </div>

        `}}customElements.define(HyperlinkWindow.is,HyperlinkWindow);export{hyperlinkWindow as $hyperlinkWindow,hyperlinkWindowCss as $hyperlinkWindowCss,HyperlinkWindowBase,HyperlinkWindowStyles};