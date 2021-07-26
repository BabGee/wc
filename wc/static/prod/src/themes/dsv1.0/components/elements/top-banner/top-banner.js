import{dataSourceMixin,utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const TopBannerBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){constructor(){super()}static get is(){return"top-banner"}dscDataName(){return this.e.defaultValue}init(pElement,loader){super.init(pElement,loader);var self=this;self.loader=this.loadData()}};var topBanner={TopBannerBase:TopBannerBase};const TopBannerStyles=css`
.top-banner-wrapper{
    width: 100%;
    padding: 20px;
    position: relative;
    background-color: #fff;
    top: 0;
    left: 0;
    box-shadow: rgba(67, 86, 100, 0.08) 16px 16px 32px 0px;
}
.close{
    position: absolute;
    right: 28px;
    top: -1px;
    cursor: pointer;
}
.close p{
    color: #4a4a4a;
    font-size: 24px;
}
`;var topBannerCss={TopBannerStyles:TopBannerStyles};class TopBanner extends TopBannerBase{static get styles(){return[TopBannerStyles,css` 
            :host{
                disply: block;
            }
            `]}hide(){const banner=this.shadowRoot.querySelector(".top-banner-wrapper");banner.style.display="none"}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

        <div class="top-banner-wrapper" id="top-banner">
            <div class="content-area" style="position: relative;">
                <p class="has-text-centered is-size-4">${this.e.details.info}</p>
                <div class="close" @click=${this.hide}>
                    <p><span>&times;</span></p>
                </div>
            </div>
        </div>
        `}}customElements.define(TopBanner.is,TopBanner);export{topBanner as $topBanner,topBannerCss as $topBannerCss,TopBannerBase,TopBannerStyles};