import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{FormBase}from"../../../../components/form.js";import{register}from"../../register.js";class SectionX extends FormBase{static get is(){return"section-x"}render(){return html`

        <style>  
        .ii__container-main{
            margin: 0 auto;
            padding: 0 90px;
        }
        .ii__container.ii__container--home{
            padding-top: 30px;
        }

        .ii__container{
            max-width: 1068px;
            margin-bottom: 9px;
            padding-right: 24px;
            padding-bottom: 25px;
            padding-left: 24px;
        }
        .wa__container{
            margin-left: auto;
            margin-right: auto;
            max-width: 940px;
        }
        </style>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <section class="section">
            <div class="ii__container wa__container">
              <slot name="body"></slot>
            </div>
        </section>
    `}getForm(){return this.shadowRoot.querySelector("slot[name='body']").assignedNodes()[0]}}register(SectionX);