import{html,BULMA_STYLES,DASHBOARD_STYLES,LANDING_STYLES,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class SectionAdvert extends SectionPElementDsc{renderDefault(){return html`
     ${BULMA_STYLES}
     ${DASHBOARD_STYLES} 
     ${LANDING_STYLES}
     <style>
     .multiline-wrapper{
     display: flex;
     flex-wrap: wrap;
     }
     .card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
}
</style>
<div class="multiline-wrapper">
	    ${this.rows.map(slide=>html`   
<div class="column is-4">
                        <div class="card">
                            <figure class="image is-16by9">
                                    <img src="/media/${slide[3]}" alt="" >
                                </figure>
                        </div>
                    </div>
              `)}           
                    </div>

        `}static get is(){return"section-advert"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}showSlidesAuto(){var i=0;function Move(){i=i%this.rows.length+1;this.shadowRoot.querySelector("i"+i).checked=!0}setInterval(Move,3e3)}init(pElement,loader){super.init(pElement,loader)}}customElements.define(SectionAdvert.is,SectionAdvert);