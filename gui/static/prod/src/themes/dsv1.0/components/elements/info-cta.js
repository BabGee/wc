import{html,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class InfoCta extends SectionPElementDsc{static get is(){return"info-cta"}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
        .mipay-info-cta{
            width: 100%;
            height: 260px;
            align-items: center;
            background: #fff;
            display: flex;
            padding: 0 10%;
        }
        .info-btn{
            margin-right: 20px;
        }
        .btn{
            width: 200px;
            height: 3em;
            color: #fff;
            border-radius: 6px
        }
        .btn:hover{
            background: var(--app-primary-color);
            color: #fff;
        }
        
        </style>

        <div class="container mipay-info-cta">
            <div class="columns" style="width: 100%;">
                <div class="column is-three-quaters">
                    <div class="heading">
                        <h1 class="title">${this.e.name}</h1>
                    </div>
                    <p>${this.e.defaultValue}</p>
                </div>
                <div class="column is-flex">
                    <div class="info-btn">
                        <a href="${this.e.details.path}" target="_blank" class="button btn" style="background: var(--app-primary-color)">${this.e.details.button_title}</a>
                    </div>
                </div>
            </div>
        </div>
        `}}customElements.define(InfoCta.is,InfoCta);