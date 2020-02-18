import{css,html,SectionPElementBase,SectionStyles}from"../../../../../components/adaptive-ui.js";const Section3Styles=css`

`;var section3Css={Section3Styles:Section3Styles};class SectionPElement3 extends SectionPElementBase{static get styles(){return[Section3Styles,SectionStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <section class="section landing-tiles">
            <div class="container">
                <div class="section-content">
                    <div class="section-sub-title">
                        <p class="has-text-centered is-uppercase">Sale veritus</p>
                    </div>
                    <div class="heading">
                        <h1 class="title has-text-centered has-text-centered" style="width: 57%; margin: 21px auto">Viderer dettacto something</h1>
                    </div>
                </div>
                <div class="columns" style="padding: 20px">
                    <div class="column">
                        <div class="card custom-card card-1">
                            <div class="card-header">
                                <div class="icon-container icon-1"></div>
                            </div>
                            <div class="card-body card-content">
                                <div class="heading">
                                    <h1 class="title" style="font-size: 18px; margin-bottom: 13px;">Mel everti</h1>
                                </div>
                                <p style="font-size: 12px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione quas voluptatem atque ab quod quam veniam. </p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card custom-card card-2">
                            <div class="card-header">
                                <div class="icon-container icon-2"></div>
                            </div>
                            <div class="card-body card-content">
                                <div class="heading">
                                    <h1 class="title" style="font-size: 18px; margin-bottom: 13px;">Mel everti</h1>
                                </div>
                                <p style="font-size: 12px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione quas voluptatem atque ab quod quam veniam. </p>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card custom-card card-3">
                            <div class="card-header">
                                <div class="icon-container icon-3"></div>
                            </div>
                            <div class="card-body card-content">
                                <div class="heading">
                                    <h1 class="title" style="font-size: 18px; margin-bottom: 13px;">Mel everti</h1>
                                </div>
                                <p style="font-size: 12px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione quas voluptatem atque ab quod quam veniam. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        `}static get is(){return"section-3"}}customElements.define(SectionPElement3.is,SectionPElement3);export{section3Css as $section$3Css,Section3Styles};