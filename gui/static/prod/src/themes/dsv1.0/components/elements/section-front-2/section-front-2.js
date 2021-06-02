import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const SectionFront2Styles=css`
    .columns {
        background-color:var(--app-default-color);
    }
    .subtitle {
        text-align:center;
        color:white;
        opacity:0;
        transform:translateY(50%);
    }
    .subtitle-appear-animation {
        opacity:1;
        transform:translateY(0px);
        transition:1.2s all ease-in-out;
    }
`;var sectionFront2Css={SectionFront2Styles:SectionFront2Styles};class SectionFront2 extends BaseElement{static get styles(){return[SectionFront2Styles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}firstUpdated(){this.loadAppear()}loadAppear(){setTimeout(()=>this.animateSubtitle(),300)}animateSubtitle(){const subtitle=this.shadowRoot.querySelector(".subtitle");subtitle.classList.add("subtitle-appear-animation")}static get is(){return"section-front-2"}render(){return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <section class="hero columns">
        <div class="hero-body">
          <p class="subtitle is-5">${this.e.defaultValue}</p>
        </div>
      </section>
    `}}customElements.define(SectionFront2.is,SectionFront2);var sectionFront2={SectionFront2:SectionFront2};export{sectionFront2Css as $sectionFront$2Css,sectionFront2 as $sectionFront$2,SectionFront2Styles,SectionFront2};