import{dataSourceMixin,BaseElement,utilsMixin,css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement7Base=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super()}static get is(){return"hero-element-7"}init(pElement,loader){super.init(pElement,loader);this}};var heroElement7={HeroElement7Base:HeroElement7Base};const HeroElement7Styles=css`
a {
    display: block;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-decoration: none;
    color: #333333;
}
.zua-c{
    background: var(--app-default-color)!important;
    color: #fff!important;
}
.hero{
    width: 100%;
    height: 91vh;
    position: relative;
    overflow: hidden;
    background: #ffffff;
    margin-top: 83px;
}

.hero-img-cont .overlay{
    width: 100%;
    height: 91vh;
    opacity: .4;
    background-color: var(--app-secondary-color);
    border-top-left-radius: 50px;
    position: absolute;
    top: 0;
    left: 0;
}
.hero-img-cont img{
    border-top-left-radius: 50px;
    object-fit: cover;
    width: 100%;
    height: 100%
}
.hero-text-container{
    width: 50%;
    height: 100vh;
    border-top-left-radius: 50px;
    position: relative;
    padding-left: 108px;
    margin: 155px 0 0 0;
    /* left: 0; */
    z-index: 1000;
}
.hero-text-container h1{
    font-size: 72px!important;
    text-transform: capitalize!important;
    /* position: absolute; */
    width: 1100px;
    animation: loadIn 0.5s ease 1s forwards;
    font-family: 'Montserrat', sans-serif;
}
.hero-content{
    position: relative;
    overflow: hidden;
}
.hero-content h2{
    font-size: 21px;
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif;
}
.hero-content p{
    margin-top: 30px;
    width: 600px;
    font-family: 'Montserrat', sans-serif;
}
.hero-cta a.btn{
    background-color: var(--app-secondary-color);
    color: #fff;
    font-weight: 600;
    margin-top: 30px;
    height: 4em!important;
    width: 267px!important;
    font-family: 'Montserrat', sans-serif;
}
.btn.button:hover{
    background-color: var(--app-default-color)!important;

}
// @keyframes loadIn {
// 0% {
//     transform: translateY(80px);
// }
// 100% {
//     transform: translateY(0px);
// }
// }


/*animations*/

.animate1{
    opacity:0;
    transform:translateX(-40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateX(0px);

}




@media screen and (max-width: 1024px){
.wrapper{
    width: 100%;
    position: relative;
}
.hero-img-cont {
    background-size: cover;
    background-position-x: unset;
}
.hero-img-cont,
.hero-img-cont img,
.hero-img-cont .overlay{
    width: 100%;
    border-radius: 0;
    height: 100vh;
}
.hero-text-container {
    width: 100%;
    padding: 39px;
    margin: 0;
    padding-top: 160px;
}
.hero-text-container h1{
    font-size: 55px!important;
    width: 100%;
}
.hero-text-container h1,
.hero-content h2,
.hero-content p{
    color: #fff;
}
}
@media screen and (max-width: 1024px){
    .hero{
        margin-top: 62px;
    }
}
`;var heroElement7Css={HeroElement7Styles:HeroElement7Styles};class HeroElement7 extends SectionPElementDsc{static get styles(){return[HeroElement7Styles,css` 
            :host{
                disply: block;
            }
            `]}static get is(){return`hero-element-7`}render(){return html`

        <style>

            .hero-img-cont{
                width: 50%;
                height: 91vh;
                border-top-left-radius: 50px;
                position: absolute;
                right: 0;
                z-index: 1;
                background-image: url("${this.e.details.hero_image_src}");

                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-position-x: 599px;
                background-position-y: center;
                background-size: 74%;
            }
        
        
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;900&display=swap" rel="stylesheet">
        <section class="hero section is-paddingless">
            <div class="hero-text-container">
                <div class="heading">
                    <h1 id="title" class="title animate1">${this.e.name}</h1>
                </div>
                <div class="hero-content parallax" data-speed="30">
                    <h2 id="subtitle" class="hero-subtitle has-text-weight-bold animate1">${this.e.details.subtitle}</h2>
                    <p>${this.e.defaultValue}</p>
                </div>
                <div id="button" class="hero-cta animate1">
                    <a href=${this.e.details.path} class="btn button">${this.e.details.button_title}</a>
                </div>
            </div>
            <div class="hero-img-cont" id="01">
            <div class="overlay"></div>
           
            </div>
        </section>
        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.onLoadAppear()})}onLoadAppear(){const self=this,title=self.shadowRoot.querySelector("#title"),subtitle=self.shadowRoot.querySelector("#subtitle"),button=self.shadowRoot.querySelector("#button");setTimeout(()=>{title.classList.add("animate1-appear");subtitle.classList.add("animate1-appear");button.classList.add("animate1-appear")},700)}}customElements.define(HeroElement7.is,HeroElement7);export{heroElement7 as $heroElement$7,heroElement7Css as $heroElement$7Css,HeroElement7Base,HeroElement7Styles};