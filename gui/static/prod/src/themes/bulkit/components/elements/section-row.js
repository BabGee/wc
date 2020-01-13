import{html,SharedStyles,SectionPElementBase}from"../../../../components/adaptive-ui.js";class SectionRow extends SectionPElementBase{renderDefault(){return html`
        ${SharedStyles}
         <style>
            img {
                display: block;
                width: 100%;
                height: auto;
            }

            h1,
            h2,
            h3 {
                margin: 0;
                padding: 4px;
            }
            h1{
                font-size: 42px;
                font-weight: 300;
            }

            p {
                font-size:16px;
                padding: 4px;
                margin: 0 0 10px;
                font-weight: 300;
                line-height: 1.6;
            }

            .btn {
                display: inline-block;
                background: #333;
                color: #fff;
                text-decoration: none;
                padding: 1em 2em;
                border: 1px solid #666;
                margin: 0.5em 0;
            }

            .btn:hover {
                background: #eaeaea;
                color: #333;
            }

            /* Header Showcase */

            #showcase {
                min-height:400px;
                color: white;
                text-align: center;
                background-color:var(--app-default-color);
                background-size: cover;
                z-index: -1;
                transform: skew(0deg, -3deg) translate(0, -45px);
                margin-top: 100px;
                /*box-shadow: 0 2px 244px 0 var(--app-default-color);*/
            }


            #showcase h1 {
                  
                  font-weight: 600 !important;
                   font-size: 2.4rem !important;
                   margin-bottom: 0 !important;
                   padding: 10px 0;
            }

            #showcase .content-wrap,
            #section-a .content-wrap {
                padding: 0 1.5em;
                margin-top: 50px;
                transform: skew(0deg, 3deg) translate(0, 45px);
            }

            /* Section A */

            #section-a {
                background: #eaeaea;
                color: #333;
                padding-bottom: 2em;
            }

            /* Section B */

            #section-b {
                padding: 2em 1em 1em;
            }

            #section-b ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            #section-b li {
                margin-bottom: 1em;
                background: #fff;
                color: #333;
            }

            .card-content {
                padding: 1.5em;
            }

            /* Section C */

            #section-c {
                background: #fff;
                color: #333;
                padding: 2em;
            }

            /* Section D / Boxes */

            #section-d .box {
                padding: 2em;
                color: #fff;
            }

            #section-d .box:first-child {
                background: #2690d4;
            }

            /* Footer */

            #main-footer {
                padding: 2em;
                background: #000;
                color: #fff;
                text-align: center;
            }

            #main-footer a {
                color: #2690d4;
                text-decoration: none;
            }

            /* Media Queries */

            @media (min-width: 700px) {
                .grid {
                    display: grid;
                    grid-template-columns: 1fr repeat(2, minmax(auto, 50em)) 1fr;
                }

                #section-a .content-text {
                    columns: 2;
                    column-gap: 2em;
                }

                #section-a .content-text p {
                    padding-top: 0;
                }

                .content-wrap,
                #section-b ul {
                    grid-column: 2/4;
                }

                .box,
                #main-footer div {
                    grid-column: span 2;
                }

                #section-b ul {
                    display: flex;
                    justify-content: space-around;
                }

                #section-b li {
                    width: 31%;
                }
            }
            .ccc {
                width: 100%;
                padding: 1em 0.5em;
                text-align: center;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -ms-flex-direction: column;
                -webkit-flex-direction: column;
                flex-direction: column;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                -ms-flex: 1 1 0.000000001px;
                -webkit-flex: 1;
                flex: 1;
                -webkit-flex-basis: 0.000000001px;
                flex-basis: 0.000000001px;
                margin-bottom: 10px;
            }

        </style>
        <header id="showcase" class="grid">
            <div class="content-wrap">
          <!--      <iron-icon style="width:115px !important;height: 115px !important;"
                           icon="[[icon]]"></iron-icon> -->
                <h1>${SectionRow.toTitleCase(this.e.formName)}</h1>
                <p>${this.e.defaultValue} </p>
                <!--<a href="#section-b" class="btn">Read More</a>-->
            </div>
        </header>
        `}static get is(){return"section-row"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);var self=this}}customElements.define(SectionRow.is,SectionRow);