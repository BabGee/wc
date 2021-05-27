import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement8Styles=css`
    .columns {
        flex-wrap:wrap;
    }
    .image {
        min-width:300px;
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
        transform:translateX(-100%);
    }
    .text-column-disappear {
        opacity:0;
        transform:translateX(100%);
    }
    .column-appear-animation {
        opacity:1;
        transform:translateX(0px);
        transition: 1.5s all ease-in-out;
    }
    @media screen and (max-width: 550px){ 
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

    @media screen and (max-width: 320px) {
  
        .image {
            min-width:250px
        }
        
    }
    @media screen and (max-width: 280px) {
  
        .image {
            min-width:200px
        }
        
    }
`;var heroElement8Css={HeroElement8Styles:HeroElement8Styles};class HeroElement8 extends SectionPElementDsc{static get styles(){return[HeroElement8Styles,css`
                :host{
                    disply: block;
                }
            `]}firstUpdated(){this.loader.then(()=>{window.addEventListener("scroll",()=>this.scrollAppear())})}scrollAppear(){const hero=this.shadowRoot.querySelector(".hero"),heroStartPosition=hero.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(heroStartPosition<screenPosition){this.animateColumns()}}animateColumns(){const imageColumn=this.shadowRoot.querySelector("#image-column"),textColumn=this.shadowRoot.querySelector("#text-column");imageColumn.classList.add("column-appear-animation");textColumn.classList.add("column-appear-animation")}static get is(){return"hero-element-8"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
            <section class="hero is-halfheight">
                <div class="hero-body columns">
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <p class="subtitle">
                            ${this.e.defaultValue}
                        </p>
                    </div>
                </div>
            </section>
        `}}customElements.define(HeroElement8.is,HeroElement8);var heroElement8={HeroElement8:HeroElement8};export{heroElement8Css as $heroElement$8Css,heroElement8 as $heroElement$8,HeroElement8Styles,HeroElement8};