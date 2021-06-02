import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement10Styles=css`
    .hero {
        background: var(--app-default-color);
    }
    .hero-body {
        flex-direction:column;
    }
    .title {
        color:white;
        text-align:center;
        opacity:0;
        transform:translateY(-50%);
    }
    .mid-title {
        max-width:45%;
    }
    .subtitle {
        color:white;
        text-align:center;
        max-width:50%;
        opacity:0;
        transform:translateY(-50%);
    }
    .str-btn {
        border-radius: 5px!important;       
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 30px;
        border: none!important;
        font-weight: bold;   
        padding: 25px;
        font-size: 19px!important;
        opacity:0;
        transform:translateY(-50%);
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .item-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition: 1.2s transform ease-in-out, 1.2s opacity ease-in-out;
    }

    @media screen and (max-width: 600px){ 
        .mid-title {
            max-width:90%;
        }
        .subtitle {
            max-width:90%;
        }
    }
`;var heroElement10Css={HeroElement10Styles:HeroElement10Styles};class HeroElement10 extends SectionPElementDsc{static get styles(){return[HeroElement10Styles,css` 
            :host{
                disply: block;
            }
            `]}firstUpdated(){window.addEventListener("scroll",()=>this.scrollAppear())}scrollAppear(){let hero=this.shadowRoot.querySelector(".hero"),heroStartPosition=hero.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(heroStartPosition<screenPosition){this.animateItems()}}animateItems(){const titles=this.shadowRoot.querySelectorAll(".title"),subtitle=this.shadowRoot.querySelector(".subtitle"),button=this.shadowRoot.querySelector(".button");let itemsToAnimate=[...titles,subtitle,button];itemsToAnimate.forEach(item=>this.animateItem(item))}animateItem(item){item.classList.add("item-appear-animation")}static get is(){return`hero-element-10`}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
            <section class="hero is-halfheight columns">
                <div class="hero-body">
                    <h3 class="title">${this.e.name}</h3>
                    <h3 class="title is-4 mid-title" style="margin-top:0px;">${this.e.defaultValue}</h3>
                    <p class="subtitle" style="margin-top:0px;">${this.e.details.text}</p>
                    <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                </div>
            </section>
        `}}customElements.define(HeroElement10.is,HeroElement10);export{heroElement10Css as $heroElement$10Css,HeroElement10Styles};