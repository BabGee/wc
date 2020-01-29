import{html,BaseElement}from"../../../../components/adaptive-ui.js";class TitleElement2 extends BaseElement{render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <style>
            h1{
                text-transform: initial!important;
            }
            </style>
            <div class="container">
                <div class="heading">
                    <h1 class="title has-text-centered">Lorem ipsum dolor sit amet</h1>
                    <p class="sub-title has-text-centered">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        `}static get is(){return"title-element-2"}}customElements.define(TitleElement2.is,TitleElement2);