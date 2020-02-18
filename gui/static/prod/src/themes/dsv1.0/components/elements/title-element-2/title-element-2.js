import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const TitleElement2Styles=css`

h1{
    text-transform: initial!important;
}

`;var titleElement2Css={TitleElement2Styles:TitleElement2Styles};class TitleElement2 extends BaseElement{static get styles(){return[TitleElement2Styles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
           
            <div class="container">
                <div class="heading">
                    <h1 class="title has-text-centered">${this.e.name}</h1>
                    <p class="sub-title has-text-centered">${this.e.defaultValue}</p>
                </div>
            </div>
        `}static get is(){return"title-element-2"}}customElements.define(TitleElement2.is,TitleElement2);export{titleElement2Css as $titleElement$2Css,TitleElement2Styles};