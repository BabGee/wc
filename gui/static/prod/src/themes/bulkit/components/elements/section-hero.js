import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{BULMA_STYLES}from"../../styles/bulma-styles.js";import{DASHBOARD_STYLES}from"../../styles/dashboard-styles.js";import{LANDING_STYLES}from"../../styles/landing-style.js";import{SectionPElementBase}from"../../../../elements/base/section-pelement.js";class SectionHero extends SectionPElementBase{renderDefault(){return html`
     ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
    
        <div class="Wallop Wallop--fade">
                <div class="Wallop-list">
                    <!-- Slide -->
                    <div class="Wallop-item  has-background-image"  style="background-image: url(https://images5.alphacoders.com/686/686934.jpg);">

                    <div id="main-hero" class="hero-body pt-80 pb-80">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-12 has-text-centered">
                            <h1 class="title main-title is-4 dark-text" style="font-size: 56px;font-weight: 300;">
                                Create Your Online Shop
                            </h1>
                            <h2 class="subtitle is-4 dark-text pt-10 pb-10">
                                Your stunning website is just a few clicks away. It's easy and free with Nikobizz.
                            </h2>
                            <br>
                                <div class="action">
                                    <a href=${this.e.defaultValue} class="button button-cta primary-btn rounded" style="font-size: 28px; font-weight: 500;">Start Now</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        `}static get is(){return"section-hero"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(SectionHero.is,SectionHero);