import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const ClienElementStyles=css`

.client-link{
    justify-content: center;
    align-items: center
}

`;var clientElementCss={ClienElementStyles:ClienElementStyles};class ClientElement extends SectionPElementDsc{static get styles(){return[ClienElementStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
           

            <div class="columns is-multiline">
                ${this.rows.map(slide=>html`
                <div class="column is-3">
                  <a class="client-link is-flex">
                    <img src="/media/${slide[2]}" alt="${slide[1]}"/>
                  </a>
                 </div>
                
                `)}
            </div>
        `}static get is(){return"client-element"}}customElements.define(ClientElement.is,ClientElement);export{clientElementCss as $clientElementCss,ClienElementStyles};