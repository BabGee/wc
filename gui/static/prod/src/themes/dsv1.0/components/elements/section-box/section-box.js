import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const SectionBoxStyles=css`

img {  
    width:128px;
    height:128px;
}

`;var sectionBoxCss={SectionBoxStyles:SectionBoxStyles};class SectionBox extends SectionPElementDsc{static get styles(){return[SectionBoxStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
           
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>

            <section id="services" class="section is-small">
                <div class="container">
                    <div class="content-wrapper">
                        <div class="columns is-vcentered is-multiline has-text-centered">
                            ${this.rows.map(slide=>html` 
                                <div class="column">
                                    <div class="startup-icon-box">
                                        <div class="is-icon-reveal" 
                                            data-sr-id="7" 
                                            style="visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; ">
                                            <img  src="/media/${slide[3]}">
                                        </div>
                                        <div class="box-title has-text-weight-bold">${slide[1]}</div>
                                        <p class="box-content is-tablet-padded">${slide[2]}</p>
                                    </div>
                                </div>
                        
                            `)} 
                        </div>
                        <div class="has-text-centered is-title-reveal pt-20 pb-20" 
                            data-sr-id="1" 
                            style="visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; ">
                            <a href="#" class="button button-cta primary-btn rounded raised">Learn more</a>
                        </div>
                    </div> 
                </div>
            </section>
        `}static get is(){return"section-box"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(SectionBox.is,SectionBox);export{sectionBoxCss as $sectionBoxCss,SectionBoxStyles};