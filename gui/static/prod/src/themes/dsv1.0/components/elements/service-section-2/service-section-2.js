import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const ServiceSection2Styles=css`

.service-section{
    background-color: #fff!important;
}
 .row {
    width: 80%;
} 
.row::before {
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}

.service-title{
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
}

`;var serviceSection2Css={ServiceSection2Styles:ServiceSection2Styles};class ServiceSection2 extends SectionPElementDsc{static get styles(){return[ServiceSection2Styles,css`
            :host {
              display: block;
            }
          `]}static get is(){return"service-section-2"}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
       
        <section class="section service-section">
            <div class="row container">
                <div class="columns">
                ${this.rows.map(slide=>html`
                <div class="column">
                    <h1 class="is-size-5 has-text-weight-bold service-title">${slide[1]}</h1>
                    <p class="service-content">${slide[2]}</p>
                 </div>
                
                `)}
                    
                </div>
            </div>
        </section>
        `}}customElements.define(ServiceSection2.is,ServiceSection2);export{serviceSection2Css as $serviceSection$2Css,ServiceSection2Styles};