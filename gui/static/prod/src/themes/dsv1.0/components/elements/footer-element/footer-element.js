import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const FooterElementStyles=css`
body{
    font-family: 'Montserrat', sans-serif;
    min-height: 100%;
    font-size: 14px;
    line-height: 20px;
    color: rgb(121, 85, 85);
    background-color: #F0F5FE;
}
.ii__container-main{
    margin: 0 auto;
    padding: 0 20px;
}
.ii__container.ii__container--home{
    padding-top: 30px;
}

.ii__container{
    max-width: 1068px;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
}
.wa__container{
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
}
a.navbar-item:hover {
    background-color: transparent;
    color: inherit;
}
.ii__title {
    margin-top: 0px;
    margin-bottom: 16px;
    color: #000;
    font-size: 42px;
    line-height: 52px;
    font-weight: 600;
    letter-spacing: 0.2px;
}
.ii__paragraph {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 0.15px;
    color: rgba(255, 255, 255, .7);
}

.ii__footer {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #fff;
    color: #000;
}
.ii-footerfexrow{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.ii-footer-col {
    margin-left: 10px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
.ii-footer-col-sm{
    margin-left: 5px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
.ii__footer-col-title {
    color: var(--app-primary-color);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
}
.ii__footer-col-link {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #a8a9b7;
    font-size: 12px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-decoration: none;
}
.ii__footer-branding{
    width: 100px;
    margin-bottom: 20px;
}
.footer-bottom{
    border-top: 0.5px solid #a8a9b7;
    padding-top: 20px;
}
.footer-rights{
    color: #a8a9b7;
}
`;var footerElementCss={FooterElementStyles:FooterElementStyles};class FooterElement extends SectionPElementDsc{constructor(){super()}static get styles(){return[FooterElementStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
       
        <footer class="landing-footer ii__footer">
        <div class="ii__container wa__container">
            <div class="ii-footer-flexcontainer columns">
                <div class="column">
                    <div class="ii__footer-branding">
                        <a href="#"><img src="${this.e.details.logo_path}" alt="footer branding"/></a>
                    </div>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e.details.location}</p>
                    <p class="ii__paragraph footer-rights" style="font-weight: normal">${this.e.details.address}</p>
                </div>
                <div class="column">
                    <div class="ii-footerfexrow">

                    ${this.e.details.links.map(slide=>html`
                        <div class="ii-footer-col">
                                <h3 class="ii__footer-col-title is-capitalized">${slide.title}</h3>
                                ${slide.links.map(link=>html`
                                <a id="link-${link}" href="${this._getHref(link)}" @click="${this.checkLink}" target="_blank" class="ii__footer-col-link">${this._getLinkTitle(link)}</a>
                                `)}
                        </div>
                    `)}
                       
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="columns">
                    <div class="column">
                        <p class="ii__paragraph is-size-7 footer-rights">${this.e.name} Copyright &copy; ${this._getCurrentYear()}. All rights reserved</p>
                    </div>
                    <div class="column">
                        <div class="ii-footerfexrow">
                            <div class="ii-footer-col-sm">
                                <a href="#" class="footer-icon">
                                    <fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>
                                </a>
                            </div>
                            <div class="ii-footer-col-sm"></div>
                            <div class="ii-footer-col-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `}static get is(){return"footer-element"}init(pElement,loader){super.init(pElement,loader)}checkLink(e){const link=e.target.getAttribute("href");if(""==link){e.preventDefault()}}_getCurrentYear(){let year=new Date().getFullYear();return year}_getHref(text){if(text.includes("|")){let[title,link]=text.split("|");return link}else{return""}}_getLinkTitle(text){if(text.includes("|")){let[title,link]=text.split("|");return title}else{return text}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(FooterElement.is,FooterElement);export{footerElementCss as $footerElementCss,FooterElementStyles};