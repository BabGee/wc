import{css,html,SectionPElementBase,SectionStyles}from"../../../../../components/adaptive-ui.js";const Section8Styles=css`

`;var section8Css={Section8Styles:Section8Styles};class SectionPElement8 extends SectionPElementBase{static get styles(){return[Section8Styles,SectionStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <section class="section coffee-break" style="padding: 20px 0 0 0; position: relative">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="portfolio-image">
                                <img src="images/human-book.png" alt="">
                            </div>
                        </div>
                        <div class="column">
                            <div class="section-content" style="padding: 50px 0 0 0;">
                                <div class="section-sub-title">
                                    <p class="has-text-justified is-uppercase">Sale veritus</p>
                                </div>
                                <div class="heading">
                                    <h1 class="title has-text-justified has-text-centered">Mazim</h1>
                                </div>
                                <p style="margin-bottom: 50px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>

                                <div class="portfolio-name">
                                    <p class="title">Denice Ekdahl</p>
                                    <p class="name">Apple</p>
                                </div>

                                <div class="scroll is-flex">
                                    <div class="dial"></div>
                                    <div class="dial"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`}static get is(){return"section-8"}}customElements.define(SectionPElement8.is,SectionPElement8);export{section8Css as $section$8Css,Section8Styles};