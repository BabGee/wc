import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement12Styles=css`
    #hero-bdy{
        padding:80px;
    }
    .columns {
        flex-wrap:wrap;
    }
    .image {
        height:300px;
        object-fit:contain;
        margin:auto;
    }
    .title {
        max-width:95%;
        text-align:left;
    }
    .subtitle {
        max-width:85%;
        text-align:left;
    }
    .image-column-disappear {
        opacity:0;
        transform:translateX(100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(-100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 1.2s all ease-in-out;
    }
    @media screen and (max-width: 550px){ 
        .image {
            min-width:100%;
        }
        #text-column {
            min-width:100%;
        }
        .title {
            max-width:100%;
        }
        .subtitle{
            max-width:100%;
        }
    }
`;var heroElement12Css={HeroElement12Styles:HeroElement12Styles};class HeroElement12 extends SectionPElementDsc{static get styles(){return[HeroElement12Styles,css`
                :host{
                    disply: block;
                }
            `]}firstUpdated(){this.loader.then(()=>{window.addEventListener("scroll",()=>this.scrollToAppear())})}scrollToAppear(){const hero=this.shadowRoot.querySelector(".hero"),heroStartPosition=hero.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(heroStartPosition<screenPosition){this.animateColumns()}}animateColumns(){const imageColumn=this.shadowRoot.querySelector("#image-column"),textColumn=this.shadowRoot.querySelector("#text-column");imageColumn.classList.add("column-appear-animation");textColumn.classList.add("column-appear-animation")}static get is(){return"hero-element-12"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
            <section class="hero is-halfheight">
                <div id="hero-bdy" class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <p class="subtitle" style="margin-top:0;">
                            ${this.e.defaultValue}
                        </p>
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `}}customElements.define(HeroElement12.is,HeroElement12);var heroElement12={HeroElement12:HeroElement12};export{heroElement12Css as $heroElement$12Css,heroElement12 as $heroElement$12,HeroElement12Styles,HeroElement12};