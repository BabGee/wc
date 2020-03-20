import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const HeroElement3Styles=css`

.hero-container{
    max-width: 100%;
    height: 100vh;
    min-height: 0;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 80px;
    background-color: #fff!important;
    margin-top:10px;
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;
}
.container{
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

}
.hero-column{
    margin-right:144px!important;
}
.hero-container::before, .row::before{
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.row{
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 42px;
}
.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--app-default-color)!important;
    font-size: 65px;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: .22px;
}
.c-paragraph {
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
}
.str-btn {
    border-radius: 5px!important;
    width: 170px!important;
    height: 3em!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    margin-top: 20px;
    border: none!important;
    font-weight: bold;
}

@media screen and (max-width: 414px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 50px;
    }

    .hero-column{
        margin-right: 66px !important;
    }
}

@media screen and (max-width: 375px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 45px;
    }

    
}

@media screen and (max-width: 360px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 40px;
    }

    
}

@media screen and (max-width: 320px){ 

    .c-title-xl {
        
        color: var(--app-default-color)!important;
        font-size: 35px;
    }

    
}

`;var heroElement3Css={HeroElement3Styles:HeroElement3Styles};class HeroElement3 extends BaseElement{static get styles(){return[HeroElement3Styles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="hero-container">
            <div class="container">
                <div class="columns row">
                    <div class="column hero-column">
                        <div class="hero-iso-image">
                            <img src="${this.e.details.hero_image_src}" />
                        </div>
                    </div>
                    <div class="column">
                        <h1 class="c-title-xl">${this.e.name}</h1>
                        <p class="c-paragraph">${this.e.defaultValue}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                </div>
            </div
        </div>
        `}static get is(){return`hero-element-3`}}customElements.define(HeroElement3.is,HeroElement3);export{heroElement3Css as $heroElement$3Css,HeroElement3Styles};