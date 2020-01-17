import{html,BaseElement}from"../../../../components/adaptive-ui.js";class HeroElement extends BaseElement{constructor(){super()}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
        <style>
        /* Hero */
        .module-inner {
            padding-top: calc(10.638888888888888888 * 1vw);
            padding-bottom: calc(10 * 1vw);
        }
        .module .module-inner{
            position: relative;
            max-width: 90rem;
            margin: 0 auto;
            padding-left: calc(5 * 1vw);
            padding-right: calc(5 * 1vw);
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .module .module-wrap {
            max-width: 66.75em;
            margin: 0 auto;
        }
        h1.ii__hero-title{
            font-size: 4rem;
            line-height: 1.140625;
            font-weight: 700;
            font-family: brandon-grotesque, sans-serif;
        }
        p.ii__hero-text{
            font-size: 1.5rem;
            line-height: 1.33333333333333333333;
        }
        </style>
        <section class="section module ">
            <div class="module-inner">
                <div class="module-wrap">
                    <div class="columns">
                        <div class="column">
                            <h1 class="ii__hero-title">${this.e.name} </h1>
                            <p class="ii__hero-text">${this.e.defaultValue}</p>
                        </div>
                        <div class="column">
                            <div class="ii__hero-image">
                                <img src="${this.e.details.hero_image_src}" alt="hero image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `}static get is(){return"hero-element"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(HeroElement.is,HeroElement);