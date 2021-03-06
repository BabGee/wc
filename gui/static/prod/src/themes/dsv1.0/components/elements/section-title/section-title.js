import{css,html,SectionPElementBase}from"../../../../../components/adaptive-ui.js";const SectionTitleStyles=css`

.c-title-container {
    max-width: 630px;
    margin-right: auto;
    margin-bottom: 25px;
    margin-left: auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    color: #a8a9b7;
    text-align: center;
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
    color: #1d1d1d;
}
.underline {
    height:7px;
    width:70px;
    border-radius:2px;
    border-width:0px;
    background-color:var(--app-secondary-color)
}

`;var sectionTitleCss={SectionTitleStyles:SectionTitleStyles};class SectionTitle extends SectionPElementBase{static get styles(){return[SectionTitleStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
      
        <div class="c-title-container" style="margin-top: 25px;">
            <h3 class="ii__title is-centered">${this.e.name}</h3>
            <p class="ii__paragraph" style="color: #1d1d1d">${this.e.defaultValue}</p> 
            <hr class="underline">
        </div>    
    `}static get is(){return"section-title"}}customElements.define(SectionTitle.is,SectionTitle);export{sectionTitleCss as $sectionTitleCss,SectionTitleStyles};