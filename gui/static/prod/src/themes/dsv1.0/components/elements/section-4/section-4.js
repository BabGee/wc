import{css,html,SectionPElementBase,SectionStyles}from"../../../../../components/adaptive-ui.js";const Section4Styles=css`

`;var section4Css={Section4Styles:Section4Styles};class SectionPElement4 extends SectionPElementBase{static get styles(){return[Section4Styles,SectionStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="section coffee-break-2" style="padding: 50px 0;">
                <div class="container">
                    <div class="columns">
                        <div class="column" style="padding: 20px;">
                            <div class="section-3-img">
                                <img src="images/pencil-w.png" alt="section image">
                            </div>
                            <div class="section-3-description">
                                <p class="has-text-justified">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nisi nostrum quasi exercitationem,</p>
                            </div> 
                        </div>
                        <div class="column">
                            <div class="section-content">
                                <div class="section-sub-title">
                                    <p class="has-text-justified is-uppercase">Sale veritus</p>
                                </div>
                                <div class="heading">
                                    <h1 class="title has-text-justified has-text-centered" style="font-size: 19px;">Quo luptatum evertitur</h1>
                                </div>
                                <p style="margin-bottom: 50px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae.</p>
                                <div class="columns is-mobile is-paddingless">
                                    <div class="column">
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>lorem</p>
                                        </div>
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>Dicat</p>
                                        </div>
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>Dolorum</p>
                                        </div>
                                    </div>

                                    <div class="column">
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>lorem</p>
                                        </div>
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>Dicat</p>
                                        </div>
                                        <div class="icon-pair is-flex">
                                            <div class="icon-content-circle"></div>
                                            <p>Dolorum</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn center">
                                    <a href="" class="is-rounded button landing-btn-borderd">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}static get is(){return"section-4"}}customElements.define(SectionPElement4.is,SectionPElement4);export{section4Css as $section$4Css,Section4Styles};