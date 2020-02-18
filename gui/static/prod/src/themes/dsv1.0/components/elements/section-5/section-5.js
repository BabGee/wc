import{css,html,SectionPElementBase,SectionStyles}from"../../../../../components/adaptive-ui.js";const Section5Styles=css`

`;var section5Css={Section5Styles:Section5Styles};class SectionPElement5 extends SectionPElementBase{static get styles(){return[Section5Styles,SectionStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <section class="section blue-section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="section-content">
                                <div class="section-sub-title">
                                    <p class="has-text-justified is-uppercase" style="color: #fff">Sale veritus</p>
                                </div>
                                <div class="heading">
                                    <h1 class="title has-text-justified has-text-centered" style="color: #fff;">Vidit maiestatis his ut principes</h1>
                                </div>
                                <p style="margin-bottom: 50px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>
            
                                <div class="blue-user is-flex">
                                    <div class="mendia">
                                        <img src="images/dummy-profile-image.png" alt="media-prifile">
                                    </div>
                                    <div class="profile-content">
                                        <p class="profile-name">Nominavi suavitate</p>
                                        <p class="profile-text">Ea sed vivendo offendit persecuti, porro animal no cum. Eu pro ludus dignissim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="old-camera">
                                <img src="images/old-camera.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>`}static get is(){return"section-5"}}customElements.define(SectionPElement5.is,SectionPElement5);export{section5Css as $section$5Css,Section5Styles};