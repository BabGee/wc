import{html,BaseElement}from"../../../../components/adaptive-ui.js";class ServiceSection2 extends BaseElement{static get is(){return"service-section-2"}render(){return html`
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
                    <div class="column">
                        <div class="service-label">
                            <p class="has-text-centered is-capitalized">label</p>
                        </div>
                        <h1 class="is-size-5 has-text-weight-bold service-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                        <p class="service-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="column">
                        <div class="service-label">
                            <p class="has-text-centered is-capitalized">label</p>
                        </div>
                        <h1 class="is-size-5 has-text-weight-bold service-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                        <p class="service-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="column">
                        <div class="service-label">
                            <p class="has-text-centered is-capitalized">label</p>
                        </div>
                        <h1 class="is-size-5 has-text-weight-bold service-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                        <p class="service-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
        `}}customElements.define(ServiceSection2.is,ServiceSection2);