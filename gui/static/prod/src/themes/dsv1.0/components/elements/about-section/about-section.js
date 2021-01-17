import{dataSourceMixin,BaseElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const AboutSectionBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super()}static get is(){return"about-section"}init(pElement,loader){super.init(pElement,loader);this}};var aboutSection={AboutSectionBase:AboutSectionBase};const AboutSectionStyles=css`
.about-section{
    padding-top: 180px!important;
    padding-bottom: 180px!important;
    background-color: #fff;
  }
  .about-img-cont{
    position: relative;
  }
  .about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
    width: 500px;
    height: 500px;
    background-color: var(--app-default-color);
    opacity: .4;
    border-radius: 20px;
    position: absolute;
  }
  .about-img-cont .dec-img_fg{
    opacity: 1;
    top: 100px;
    left: 100px;
  }
  .about-img-cont .dec-img_fg img{
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
  }
  .about-cont{
    align-items: center;
    height: 500px;
  }
  .about-cont .about-title{
    font-size: 40px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  .about-cont .about-subtitle{
    font-weight: bolder;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }
  .about-cont .cont{
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif;
  }
  @media screen and (max-width: 1024px){
    .about-img-cont .dec-bg, .about-img-cont .dec-img_fg{
      position: relative;
    }
    .about-img-cont .dec-bg{
      display: none;
    }
    .about-img-cont .dec-img_fg{
      width: 300px;
      height: 300px;
      left: 70px;
    }
    .about-cont{
      margin-top: 89px;
      padding: 0px 65px;
    }
  }
`;var aboutSectionCss={AboutSectionStyles:AboutSectionStyles};class AboutSection extends AboutSectionBase{static get styles(){return[AboutSectionStyles,css` 
            :host{
                disply: block;
            }
            `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;900&display=swap" rel="stylesheet">
        <section class="about-section section">
            <div class="container">
            <div class="columns">
                <div class="column">
                <div class="about-img-cont parallax" data-speed="30">
                    <div class="dec-bg"></div>
                    <div class="dec-img_fg">
                    <img src="${this.e.details.image}" alt="${this.e.name}">
                    </div>
                </div>
                </div>
                <div class="column">
                <div class="about-cont is-flex">
                    <div>
                    <h1 id="aboutTitle" class="about-title">${this.e.name}</h1>
                    <p class="about-subtitle">${this.e.defaultValue}</p>
                    <p class="cont">${this.e.kind}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const name=this.shadowRoot.querySelector("#aboutTitle").innerText,aboutTitleElement=this.shadowRoot.querySelector("#aboutTitle");var n=name.split(" "),lastname=n[n.length-1];const newName=name.replace(lastname,"");aboutTitleElement.innerHTML=newName+`<span style="color: var(--app-secondary-color)">${lastname}</span>`}}customElements.define(AboutSection.is,AboutSection);export{aboutSection as $aboutSection,aboutSectionCss as $aboutSectionCss,AboutSectionBase,AboutSectionStyles};