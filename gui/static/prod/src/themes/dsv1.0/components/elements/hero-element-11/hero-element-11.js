import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement11Styles=css`

    .hero-body {
        clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 80%);
        background-color: var(--app-default-color)!important;
        
    }
    .columns {
        height:fit-content;
        flex-wrap:wrap;
    }
    .column {
        display: flex;
        flex-direction: column;
        height:fit-content;
        padding:110px 35px 0 50px;
        opacity:0;
    }
    #imageContainer{
        align-items:center;
    }
    .slide {
        display:flex;
        flex-direction: column;
        align-items: center;
        animation:slide-animation 5s infinite;
    }
    .desc {
        margin-bottom:10px;
    }
    .str-btn {
        border-radius: 5px!important;
        width:fit-content;
        background-color: var(--app-secondary-color)!important;
        color: #fff!important;
        margin-top: 20px;
        border: none!important;
        font-weight: bold;
        padding:25px;
        font-size: 19px!important;
    }
    .dot {
        cursor:pointer;
        border-radius: 3px;
        width: 11px;
        height: 11px;
        border-radius:50%;
        margin: 0 2px;
        display: inline-block;
        transition: background-color 1.2s ease;
        background-color: #bbb;
    }
    .active, .dot:hover {
        background-color: var(--app-secondary-color);
      }
    .slide-image{
        height:300px;
        object-fit:contain;
    }
    .str-btn:hover{
        background-color: var(--app-default-color)!important;
        color: var(--app-secondary-color)!important;
        border: 4px var(--app-secondary-color) solid!important ;
        padding:21px;
    }
    .column-appear-animation{
        opacity: 1;
        transition:0.7s opacity ease-in-out;     
    }
    @keyframes slide-animation {
        0%   {opacity: 0;transform:translateX(50%);}
        7%  {opacity:1;transform:translateX(0px);}
        93% {opacity:1;transform:translateX(0px)}
        100% {opacity: 0;transform:translateX(-50%)}
    }

    @media screen and (max-width: 550px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 95%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:50px 15px 20px 15px;
            min-width:100%;
        }
    }
    @media screen and (min-width: 571px) and (max-width: 1025px){ 
        .hero-body {
            clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 90%);
            height:fit-content;
            padding:50px 20px 20px 20px;
        }
        .column {
            padding:180px 15px 20px 15px;
            min-width:100%;
        }
        #imageContainer {
            padding-top:50px;
        }
        .slide-image {
            height:350px;
        }
    }
`;var heroElement11Css={HeroElement11Styles:HeroElement11Styles};class HeroElement11 extends SectionPElementDsc{static get styles(){return[HeroElement11Styles,css`
                :host {
                display: block;
                }
            `]}static get properties(){return{slideIndex:Number,autoplay:Boolean}}constructor(){super();this.slideIndex=1;this.autoplay=!0}firstUpdated(){this.loader.then(()=>{this.showColumns();this.showSlides(this.slideIndex)})}showColumns(){const columns=this.shadowRoot.querySelectorAll(".column");setTimeout(()=>{columns.forEach(column=>column.classList.add("column-appear-animation"))},700)}showSlides(n){const slides=this.shadowRoot.querySelectorAll(".slide"),dots=this.shadowRoot.querySelectorAll(".dot");if(n>slides.length){this.slideIndex=1}if(1>n){this.slideIndex=slides.length}for(let i=0;i<slides.length;i++){slides[i].style.display="none"}for(let i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","")}slides[this.slideIndex-1].style.display="flex";dots[this.slideIndex-1].className+=" active";if(this.autoplay){setTimeout(()=>this.showSlides(this.slideIndex+=1),5e3)}else{this.autoplay=!0}}showCurrentSlide(e){let currentSlideValue=parseInt(e.target.getAttribute("currentSlide"));this.autoplay=!1;this.showSlides(this.slideIndex=currentSlideValue)}static get is(){return`hero-element-11`}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <section class="hero is-fullheight">
                <div class="hero-body columns" style="align-items:flex-start;">
                    <div id="textContainer" class="column">
                        <h1 class="title has-text-black">${this.e.name} </h1>
                        <p class="subtitle has-text-black">${this.e.defaultValue}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                    <div id="imageContainer" class="column">
                        ${this.rows.map(slide=>html`
                                <div class="slide">
                                    <img class="slide-image" src="/media/${slide[3]}" alt="image slide"/>
                                    <p class="subtitle-6 has-text-black">${slide[2]}</p>
                                </div>
                            `)}
                        <div class="dots-container">
                            ${this.rows.map((slide,index)=>html`
                                <span class="dot" @click="${this.showCurrentSlide}" currentSlide="${index+1}"></span>
                            `)}
                        </div>
                    </div>
                </div>
            </section>
        `}}customElements.define(HeroElement11.is,HeroElement11);export{heroElement11Css as $heroElement$11Css,HeroElement11Styles};