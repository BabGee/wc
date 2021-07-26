import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const HeroElementStyles=css`

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
        .text-animation-disappear{
            opacity:0;
            transform:translateX(-100%);
            transition:1.5s all ease-in-out;
        }
        .text-animation-appear{
            opacity: 1;
            transform:translateX(0px);  
            transition:1.5s all ease-in-out;     
        }
        .image-animation-disappear{
            opacity:0;
            transform:translateX(100%);
            transition:1.5s all ease-in-out;
        }
        .image-animation-appear{
            opacity: 1;
            transform:translateX(0px);  
            transition:1.5s all ease-in-out;     
        }

`;var heroElementCss={HeroElementStyles:HeroElementStyles};class HeroElement extends BaseElement{static get styles(){return[HeroElementStyles,css`
            :host {
              display: block;
            }
          `]}constructor(){super()}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
      
        <section class="section module ">
            <div class="module-inner">
                <div class="module-wrap">
                    <div class="columns">
                        <div id="textContainer" class="column text-animation-disappear">
                            <h1 class="ii__hero-title">${this.e.name} </h1>
                            <p class="ii__hero-text">${this.e.defaultValue}</p>
                        </div>
                        <div id="imageContainer" class="column image-animation-disappear">
                            <div class="ii__hero-image">
                                <img src="${this.e.details.hero_image_src}" alt="hero image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `}firstUpdated(){this.onLoadAppear()}onLoadAppear(){const textContainer=this.shadowRoot.querySelector("#textContainer"),imageContainer=this.shadowRoot.querySelector("#imageContainer");setTimeout(()=>{textContainer.classList.remove("text-animation-disappear");imageContainer.classList.remove("image-animation-disappear");textContainer.classList.add("text-animation-appear");imageContainer.classList.add("image-animation-appear")},700)}static get is(){return"hero-element"}init(pElement,loader){super.init(pElement,loader)}}customElements.define(HeroElement.is,HeroElement);export{heroElementCss as $heroElementCss,HeroElementStyles};