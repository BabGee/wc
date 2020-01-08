import{html,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class FeatureElement extends SectionPElementDsc{constructor(){super()}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
    
    </style>
    <div class="ii__features">
    ${this.rows.map(slide=>html`
    <div class="columns">
        <div class="column">
            <img src="${slide[3]}" alt="feature image">
        </div>
        <div class="column">
            <div class="feature-container">
                <h1 class="feature-title has-text-weight-bold">${slide[1]}</h1>
                <p class="is-size-7">${slide[2]}</p>                    
            </div>
        </div>
    </div>
    `)}
        
    </div>
        `}static get is(){return"feature-element"}static get properties(){return{}}}customElements.define(FeatureElement.is,FeatureElement);var featureElement={FeatureElement:FeatureElement};export{featureElement as $featureElement,FeatureElement};