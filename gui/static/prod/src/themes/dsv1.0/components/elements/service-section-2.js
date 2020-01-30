import{html,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class ServiceSection2 extends SectionPElementDsc{static get is(){return"service-section-2"}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
        .service-section{
            background-color: #fff;
        }
        /* .row {
            margin-left: -10px;
            margin-right: -10px;
        } */
        .row::before {
            display: table;
            content: " ";
            grid-column-start: 1;
            grid-row-start: 1;
            grid-column-end: 2;
            grid-row-end: 2;
        }
        .service-label{
            width: 100px;
            border-radius: 8px;
            padding: 10px;
            background: #e5e5e5;
            color: var(--app-default-color);
        }
        .service-title{
            margin: 10px 0;
            font-size: 20px;
            font-weight: bold;
        }
        </style>
        <section class="section service-section">
            <div class="row container">
                <div class="columns">
                ${this.rows.map((slide,index)=>html`
                <div class="column">
                    <h1 class="is-size-5 has-text-weight-bold service-title">${slide[1]}</h1>
                    <p class="service-content">${slide[2]}</p>
                 </div>
                
                `)}
                    
                </div>
            </div>
        </section>
        `}}customElements.define(ServiceSection2.is,ServiceSection2);