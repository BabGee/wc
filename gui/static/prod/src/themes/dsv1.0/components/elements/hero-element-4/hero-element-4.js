import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const HeroElement4Styles=css`

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

.circle{
    position: absolute;
    background-color:  var(--app-default-color);
    width:500px;
    height:500px;
    border-radius:50%;
    top: -45px;
    left: -175px;

}

.circle2{
    position: absolute;
    background-color: var(--app-default-color);
    width:500px;
    height:500px;
    border-radius:50%;
    right: -443px;
    top: 151px;

}
img{
    z-index:1000;
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
    color: var(--app-default-color)!important;;
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

`;var heroElement4Css={HeroElement4Styles:HeroElement4Styles};class HeroElement4 extends BaseElement{static get styles(){return[HeroElement4Styles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="hero-container">
            <div class="container">
                <div class="columns row">
                <div class="circle"></div>
                <div class="circle2"></div>
                    <div class="column hero-column" style="z-index:1000;">
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
        `}static get is(){return`hero-element-4`}}customElements.define(HeroElement4.is,HeroElement4);export{heroElement4Css as $heroElement$4Css,HeroElement4Styles};