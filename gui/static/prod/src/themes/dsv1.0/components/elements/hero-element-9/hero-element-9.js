import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement9Styles=css`
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
    .underline {
        height:7px;
        width:60px;
        border-radius:2px;
        border-width:0px;
        background-color:var(--app-secondary-color)
    }
    #text-column {
        padding-left:20px;
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
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
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
`;var heroElement9Css={HeroElement9Styles:HeroElement9Styles};class HeroElement9 extends SectionPElementDsc{static get styles(){return[HeroElement9Styles,css`
                :host{
                    disply: block;
                }
            `]}firstUpdated(){this.colorTitle();this.loader.then(()=>{window.addEventListener("scroll",()=>this.scrollAppear())})}scrollAppear(){const hero=this.shadowRoot.querySelector(".hero"),heroStartPosition=hero.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(heroStartPosition<screenPosition){this.animateColumns()}}animateColumns(){const imageColumn=this.shadowRoot.querySelector("#image-column"),textColumn=this.shadowRoot.querySelector("#text-column");imageColumn.classList.add("column-appear-animation");textColumn.classList.add("column-appear-animation")}colorTitle(){const title=this.shadowRoot.querySelector(".title"),titleText=title.innerText,n=titleText.split(" "),lastname=n[n.length-1],newName=titleText.replace(lastname,"");title.innerHTML=newName+`<span style="color: var(--app-secondary-color)">${lastname}</span>`}static get is(){return"hero-element-9"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
            <section class="hero is-fullheight">
                <div class="hero-body columns">
                    <div id="text-column" class="column text-column-disappear">
                        <p class="title">
                            ${this.e.name}
                        </p>
                        <hr class="underline">
                        <p class="subtitle is-4">${this.e.defaultValue}</p>
                        <p class="subtitle is-5">${this.e.details.paragraph}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="image-column" class="column image-column-disappear">
                        <img class="image" src="${this.e.details.image}"/>
                    </div>
                </div>
            </section>
        `}}customElements.define(HeroElement9.is,HeroElement9);var heroElement9={HeroElement9:HeroElement9};export{heroElement9Css as $heroElement$9Css,heroElement9 as $heroElement$9,HeroElement9Styles,HeroElement9};