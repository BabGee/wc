import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const SectionFrontStyles=css`

.module-inner {
    padding-top: calc(10.638888888888888888 * 1vw);
    padding-bottom: calc(15 * 1vw);
}
.module .module-inner{
    position: relative;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: calc(5 * 1vw);
    padding-right: calc(5 * 1vw);
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: var(--app-secondary-color);
}
.module .module-wrap {
    max-width: 66.75em;
    margin: 0 auto;
}
.section-box{
    width: 100%;
    background-color: var(--app-default-color);
}
.box{
    background: #fff;
    padding: 7.1875em 5.8125em 5.8125em 5.8125em;
    box-shadow: 0 .9375em 1.5625em 0 rgba(0, 0, 0, 0, .8);
    border-radius: 6px;
    text-align: center;
}
.animation-appear {
    opacity: 1;
    animation: fadeIn ease 2s;
}
.animation-disappear {
    opacity: 0;
}
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}

`;var sectionFrontCss={SectionFrontStyles:SectionFrontStyles};class SectionFront extends BaseElement{static get styles(){return[SectionFrontStyles,css`
            :host {
              display: block;
            }
          `]}constructor(){super()}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
   
    <div class="ii__section module section-box">
        <div class="module-inner">
            <div class="module-wrap">
                <div class="box">
                  <p id="title" style="margin-bottom: 21px;font-size: 20px;" class="animation-disappear"><i>${this.e.name}</i></p>
                  <p id="content" class="section-text animation-disappear">${this.e.defaultValue}</p>
                </div>
            </div>
        </div>  
    </div>
        `}firstUpdated(){window.addEventListener("scroll",()=>this.scrollToFadeInText())}scrollToFadeInText(){const contentContainer=this.shadowRoot.querySelector(".box"),title=this.shadowRoot.querySelector("#title"),content=this.shadowRoot.querySelector("#content"),contentContainerTop=contentContainer.getBoundingClientRect().top,windowHeight=window.innerHeight-20;if(windowHeight>contentContainerTop){title.classList.remove("animation-disappear");content.classList.remove("animation-disappear");title.classList.add("animation-appear");content.classList.add("animation-appear")}}static get is(){return"section-front"}static get properties(){return{}}}customElements.define(SectionFront.is,SectionFront);var sectionFront={SectionFront:SectionFront};export{sectionFrontCss as $sectionFrontCss,sectionFront as $sectionFront,SectionFrontStyles,SectionFront};