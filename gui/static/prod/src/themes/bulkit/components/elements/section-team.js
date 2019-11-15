import{html,DASHBOARD_STYLES,BULMA_STYLES,LANDING_STYLES,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class SectionTeam extends SectionPElementDsc{renderDefault(){return html`
        ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
        
        <section class="section is-small">
            <div class="container">
                <div class="content-wrapper">
                        ${this.rows.map((slide,index)=>html` 
                  ${0===index%2?html`
                    <!-- Feature -->
                    <div class="columns is-vcentered">
                        <!-- Featured image -->
                        <div class="column is-7 has-text-centered">
                            <img class="featured-svg" src="/media/${slide[3]}" alt="">
                        </div>
                        <!-- Content -->
                        <div class="column is-5">
                            <h2 class="title feature-title bordered dark-text">${slide[1]}</h2>
                            <div class="title-divider"></div>
                            <span class="section-feature-description">${slide[2]}</span>
                            <div class="pt-10 pb-10">
                                <a href="#" class="button btn-align btn-more is-link color-primary">
                                    Learn more about this <i class="sl sl-icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Feature -->
                                        `:html`
                                 <!-- Feature -->
                    <div class="columns is-vcentered">
                                            <!-- Content -->
                        <div class="column is-5">
                            <h2 class="title feature-title bordered dark-text">${slide[1]}</h2>
                            <div class="title-divider"></div>
                            <span class="section-feature-description">${slide[2]}</span>
                            <div class="pt-10 pb-10">
                                <a href="#" class="button btn-align btn-more is-link color-primary">
                                    Learn more about this <i class="sl sl-icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <!-- Featured image -->
                        <div class="column is-7 has-text-centered">
                            <img class="featured-svg" src="/media/${slide[3]}" alt="">
                        </div>

                    </div>
                    <!-- /Feature -->
                                        `}   
                        `)} 
                    <h2 class="title has-text-centered is-title-reveal" data-sr-id="4" style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s, opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s; ">
                        <a href="features.html" class="button button-cta btn-align rounded raised primary-btn">
                            See all Features
                        </a>
                    </h2>
                </div>

            </div>
        </section>
        `}static get is(){return"section-team"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(SectionTeam.is,SectionTeam);