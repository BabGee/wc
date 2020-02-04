import{html,BaseElement}from"../../../../components/adaptive-ui.js";class HeroElement3 extends BaseElement{render(){return html`
        <style>
        .hero-container{
            max-width: 100%;
            height: 100%;
            min-height: 0;
            margin-bottom: 9px;
            padding-right: 24px;
            padding-bottom: 25px;
            padding-left: 24px;
            padding-top: 80px;
            background-color: #fff!important;
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
            font-size: 70px;
            font-weight: bold;
            line-height: 58px;
            letter-spacing: .22px;
        }
        .c-paragraph {
            font-size: 14px;
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
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="hero-container">
            <div class="container">
                <div class="columns row">
                    <div class="column">
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
        `}static get is(){return`hero-element-3`}}customElements.define(HeroElement3.is,HeroElement3);