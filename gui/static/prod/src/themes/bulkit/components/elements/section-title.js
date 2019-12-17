import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{BULMA_STYLES}from"../../styles/bulma-styles.js";import{LANDING_STYLES}from"../../styles/landing-style.js";import{DASHBOARD_STYLES}from"../../styles/dashboard-styles.js";import{SectionPElementBase}from"../../../../elements/base/section-pelement.js";class SectionTitle extends SectionPElementBase{renderDefault(){return html`
     ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
     <style>
</style>
      <section class="section is-small" style="padding: 0px;">
      <div class="container">
                <div class="section-title-wrapper">
                    <h2 class="title section-title has-text-centered dark-text"> ${SectionTitle.toTitleCase(this.e.elementJson[4])}</h2>
                    <div class="title-divider" style="margin: auto ;width: 80px;height: 5px; background: #4FC1EA;"></div>
                    <div class="subtitle has-text-centered is-tablet-padded">
                        ${this.e.defaultValue}
                    </div>
                </div>
                </div>
                </section>
                
                
        `}static get is(){return"section-title"}}customElements.define(SectionTitle.is,SectionTitle);